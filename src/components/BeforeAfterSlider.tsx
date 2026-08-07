import { useRef, useState } from "react";

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
  const [value, setValue] = useState(100);

  const [dragging, setDragging] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  const update = (clientX: number) => {
    const el = ref.current;

    if (!el) return;

    const rect = el.getBoundingClientRect();

    let percent =
      ((clientX - rect.left) / rect.width) * 100;

    percent = Math.max(0, Math.min(100, percent));

    setValue(percent);
  };

  const startDrag = (
    e: React.PointerEvent<HTMLDivElement>,
  ) => {
    setDragging(true);

    e.currentTarget.setPointerCapture(
      e.pointerId,
    );

    update(e.clientX);
  };

  const moveDrag = (
    e: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!dragging) return;

    update(e.clientX);
  };

  const stopDrag = (
    e: React.PointerEvent<HTMLDivElement>,
  ) => {
    setDragging(false);

    if (
      e.currentTarget.hasPointerCapture(
        e.pointerId,
      )
    ) {
      e.currentTarget.releasePointerCapture(
        e.pointerId,
      );
    }
  };

  return (
    <div
      className={`ba-wrapper ${
        dragging ? "is-dragging" : ""
      }`}
      style={{
        touchAction: "none",
      }}
    >
      <div
        className="ba-slider"
        ref={ref}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        onPointerLeave={stopDrag}
      >
        <div className="ba-images">
          <img
            src={after}
            className="ba-img"
            alt={afterAlt}
            loading="eager"
            decoding="async"
            style={{
              objectFit: afterFit,

              objectPosition: afterPosition,
            }}
          />

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
              style={{
                objectFit: beforeFit,

                objectPosition: beforePosition,
              }}
            />
          </div>

          <div
            className="ba-handle"
            style={{
              left: `${value}%`,
            }}
          >
            <div className="ba-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
