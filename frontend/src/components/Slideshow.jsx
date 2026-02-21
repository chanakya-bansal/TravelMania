import { useEffect, useRef } from "react";
import gsap from "gsap";

const COLS = 4;

export default function ImageSlider({ image }) {
  const mainRef = useRef(null);
  const partsRef = useRef([]);
  const currentImageRef = useRef(image);
  const playingRef = useRef(false);

  // Rebuild columns when image changes
  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    // If already playing, skip
    if (playingRef.current) return;

    const newSrc = image;
    const prevSrc = currentImageRef.current;

    if (newSrc === prevSrc) return;

    playingRef.current = true;
    currentImageRef.current = newSrc;

    const parts = partsRef.current;

    function up(part, next) {
      part.appendChild(next);
      gsap.to(part, {
        duration: 2.3,
        ease: "power4.inOut",
        y: -window.innerHeight,
      }).then(() => {
        part.children[0].remove();
        gsap.set(part, { y: 0 });
      });
    }

    function down(part, next) {
      part.prepend(next);
      gsap.set(part, { y: -window.innerHeight });
      gsap.to(part, {
        duration: 2.3,
        ease: "power4.inOut",
        y: 0,
      }).then(() => {
        part.children[1].remove();
        playingRef.current = false;
      });
    }

    parts.forEach((part, p) => {
      const next = document.createElement("div");
      next.className = "is-section";
      const img = document.createElement("img");
      img.src = newSrc;
      next.appendChild(img);

      if (p % 2 === 0) {
        up(part, next);
      } else {
        down(part, next);
      }
    });
  }, [image]);

  // Initial mount — build columns
  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    main.innerHTML = "";
    partsRef.current = [];

    for (let col = 0; col < COLS; col++) {
      const part = document.createElement("div");
      part.className = "is-part";

      const section = document.createElement("div");
      section.className = "is-section";

      const img = document.createElement("img");
      img.src = currentImageRef.current;

      section.appendChild(img);
      part.style.setProperty("--x", (-100 / COLS) * col + "vw");
      part.appendChild(section);
      main.appendChild(part);
      partsRef.current.push(part);
    }
  }, []);

  return (
    <>
      <style>{`
        .is-main {
          display: flex;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .is-part {
          flex: 1;
          position: relative;
          overflow: hidden;
        }

        .is-section {
          width: 100%;
          height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .is-section img {
          width: 100vw;
          height: 100vh;
          object-fit: cover;
          position: absolute;
          left: var(--x);
          pointer-events: none;
          user-select: none;
          -webkit-user-drag: none;
        }
      `}</style>

      <div className="is-main" ref={mainRef} />
    </>
  );
}