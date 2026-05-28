import { useState, useRef } from "react";
import "../styles/beforeAfterSlider.css";

type Props = {
  before: string;
  after: string;
};

export default function BeforeAfterSlider({ before, after }: Props) {
  const [value, setValue] = useState(50);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);

  const calcValue = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    let percent = ((clientX - rect.left) / rect.width) * 100;

    if (percent < 0) percent = 0;
    if (percent > 100) percent = 100;

    setValue(percent);
  };

  const start = () => {
    isDragging.current = true;
  };

  const end = () => {
    isDragging.current = false;
  };

  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    calcValue(e.clientX);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    start();
    calcValue(e.clientX);
  };

  const onPointerUp = () => {
    end();
  };

  const onPointerLeave = () => {
    end();
  };

  return (
    <div
      className="ba-slider"
      ref={containerRef}
      onPointerMove={move}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerLeave}
    >
      <div className="ba-images">
        <img src={after} className="ba-img" alt="after" />

        <div className="ba-before" style={{ width: `${value}%` }}>
          <img src={before} className="ba-img" alt="before" />
        </div>

        <div
          className="ba-handle"
          style={{ left: `${value}%` }}
        />
      </div>
    </div>
  );
}