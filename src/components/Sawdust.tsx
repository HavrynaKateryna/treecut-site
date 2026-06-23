import { useEffect, useRef } from "react";
import "../styles/sawdust.css";


export default function Sawdust() {

  const containerRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {

    const container = containerRef.current;

    if (!container) return;


    const count = 120;

    const pieces: HTMLSpanElement[] = [];


    for (let i = 0; i < count; i++) {


      const chip = document.createElement("span");


      chip.className = "wood-chip";


      const random = Math.random();



      // мелкая пыль
      if (random < 0.55) {

        const size = Math.random() * 5 + 1;

        chip.style.width =
          `${size}px`;

        chip.style.height =
          `${size}px`;

      }


      // средняя стружка
      else if (random < 0.85) {


        chip.style.width =
          `${Math.random() * 15 + 5}px`;


        chip.style.height =
          `${Math.random() * 4 + 2}px`;


      }


      // крупная щепка

      else {


        chip.style.width =
          `${Math.random() * 25 + 10}px`;


        chip.style.height =
          `${Math.random() * 5 + 2}px`;

      }




      chip.style.left =
        `${Math.random() * 100}%`;


      chip.style.top =
        `${Math.random() * 100}%`;



      const speed =
        Math.random() * 12 + 8;



      chip.style.animationDuration =
        `${speed}s`;



      chip.style.animationDelay =
        `${Math.random() * -20}s`;



      chip.style.setProperty(
        "--x",
        `${Math.random() * 500 - 250}px`
      );



      chip.style.setProperty(
        "--y",
        `${Math.random() * 40 + 20}vh`
      );



      chip.style.setProperty(
        "--rotate",
        `${Math.random() * 1200 - 600}deg`
      );



      chip.style.setProperty(
        "--opacity",
        `${Math.random() * .35 + .1}`
      );



      container.appendChild(chip);

      pieces.push(chip);

    }



    return () => {

      pieces.forEach(
        chip => chip.remove()
      );

    };


  }, []);



  return (

    <div
      ref={containerRef}
      className="sawdust"
    />

  );

}