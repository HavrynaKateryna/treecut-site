import {
  useRef,
  useState,
  type PointerEvent,
} from "react";

import "../styles/beforeAfterSlider.css";

type Props = {
  before: string;
  after: string;

  beforeAlt: string;
  afterAlt: string;

  beforePosition?: string;
  afterPosition?: string;

  beforeFit?: "cover" | "contain";
  afterFit?: "cover" | "contain";
};

export default function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  beforePosition = "center",
  afterPosition = "center",
  beforeFit = "cover",
  afterFit = "cover",
}: Props) {
  const [value, setValue] = useState(50);
  const [dragging, setDragging] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  const updateSlider = (clientX: number) => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const rect = slider.getBoundingClientRect();

    let percent =
      ((clientX - rect.left) / rect.width) * 100;

    percent = Math.max(0, Math.min(100, percent));

    setValue(percent);
  };

  const handlePointerDown = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    event.preventDefault();

    setDragging(true);

    event.currentTarget.setPointerCapture(
      event.pointerId,
    );

    updateSlider(event.clientX);
  };

  const handlePointerMove = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    if (!dragging) {
      return;
    }

    event.preventDefault();

    updateSlider(event.clientX);
  };

  const handlePointerUp = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    setDragging(false);

    if (
      event.currentTarget.hasPointerCapture(
        event.pointerId,
      )
    ) {
      event.currentTarget.releasePointerCapture(
        event.pointerId,
      );
    }
  };

  return (
    <div
      ref={sliderRef}
      className={`ba-wrapper ${
        dragging ? "is-dragging" : ""
      }`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* AFTER IMAGE */}
      <img
        src={after}
        className="ba-img"
        alt={afterAlt}
        loading="eager"
        decoding="async"
        draggable={false}
        style={{
          objectFit: afterFit,
          objectPosition: afterPosition,
        }}
      />

      {/* BEFORE IMAGE */}
      <div
        className="ba-before"
        style={{
          clipPath: `inset(0 ${
            100 - value
          }% 0 0)`,
        }}
      >
        <img
          src={before}
          className="ba-img"
          alt={beforeAlt}
          loading="lazy"
          decoding="async"
          draggable={false}
          style={{
            objectFit: beforeFit,
            objectPosition: beforePosition,
          }}
        />
      </div>

      {/* SLIDER */}
      <div
        className="ba-handle"
        style={{
          left: `${value}%`,
        }}
      >
        <div className="ba-dot">
          <span>↔</span>
        </div>
      </div>
    </div>
  );
}
