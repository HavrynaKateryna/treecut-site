import { useState } from "react";
import "../styles/beforeAfterSlider.css";

type Props = {
  before: string;
  after: string;
};

export default function BeforeAfterSlider({ before, after }: Props) {
  const [value, setValue] = useState(50);

  return (
    <div className="ba-slider">

      <div className="ba-images">
        <img src={after} className="ba-img" alt="after" />

        <div className="ba-before" style={{ width: `${value}%` }}>
          <img src={before} className="ba-img" alt="before" />
        </div>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="ba-range"
      />

    </div>
  );
}