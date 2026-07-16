import { useState, useRef } from "react";
import "../styles/beforeAfterSlider.css";


type Props = {
  before: string;
  after: string;
  title: string;
};


export default function BeforeAfterSlider({
  before,
  after,
  title,
}: Props) {

  const [value, setValue] = useState(50);
  const [dragging, setDragging] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);


  const update = (clientX: number) => {

    const el = ref.current;

    if (!el) return;


    const rect = el.getBoundingClientRect();


    let percent =
      ((clientX - rect.left) / rect.width) * 100;


    percent = Math.max(
      0,
      Math.min(100, percent)
    );


    setValue(percent);
  };



  const onPointerDown = (
    e: React.PointerEvent<HTMLDivElement>
  ) => {

    setDragging(true);

    e.currentTarget.setPointerCapture(
      e.pointerId
    );

    update(e.clientX);
  };



  const onPointerMove = (
    e: React.PointerEvent<HTMLDivElement>
  ) => {

    if (!dragging) return;

    update(e.clientX);
  };



  const stop = (
    e: React.PointerEvent<HTMLDivElement>
  ) => {

    setDragging(false);


    if (
      e.currentTarget.hasPointerCapture(
        e.pointerId
      )
    ) {

      e.currentTarget.releasePointerCapture(
        e.pointerId
      );

    }

  };



  return (

    <div

      className="ba-slider"

      ref={ref}

      onPointerDown={onPointerDown}

      onPointerMove={onPointerMove}

      onPointerUp={stop}

      onPointerCancel={stop}

    >


      <div className="ba-images">


        {/* AFTER IMAGE */}

        <img

          src={after}

          className="ba-img"

          alt={`${title} after`}

          loading="eager"

          decoding="async"

        />



        {/* BEFORE IMAGE */}

        <div

          className="ba-before"

          style={{
            clipPath:
              `inset(0 ${100 - value}% 0 0)`
          }}

        >

          <img

            src={before}

            className="ba-img"

            alt={`${title} before`}

            loading="lazy"

            decoding="async"

          />

        </div>



        {/* SLIDER HANDLE */}

        <div

          className="ba-handle"

          style={{
            left: `${value}%`
          }}

        >

          <div className="ba-dot" />

        </div>



      </div>


    </div>

  );
}