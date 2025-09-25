// src/components/Background/Background.jsx
import { useEffect, useRef } from "react";
import styles from "./Background.module.css";

const RADIUS_PX = 600;  // large, soft falloff
const FALLOFF = 65;     // fade to transparent by 65%

export default function Background() {
  const bgRef = useRef(null);
  const raf = useRef(0);
  const last = useRef({ x: null, y: null });

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;

    // seed at center (prevents first-move pop)
    const seed = () => {
      const x = Math.round(window.innerWidth / 2);
      const y = Math.round(window.innerHeight / 2);
      el.style.background = `
        radial-gradient(${RADIUS_PX}px circle at ${x}px ${y}px,
          color-mix(in srgb, var(--color-accent) 6%, transparent),
          transparent ${FALLOFF}%)
      `;
    };
    seed();

    const schedule = (x, y) => {
      last.current = { x, y };
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        const { x: lx, y: ly } = last.current;
        el.style.background = `
          radial-gradient(${RADIUS_PX}px circle at ${lx}px ${ly}px,
            color-mix(in srgb, var(--color-accent) 6%, transparent),
            transparent ${FALLOFF}%)
        `;
        raf.current = 0;
      });
    };

    const onMove = (e) => schedule(e.clientX, e.clientY);
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return <div ref={bgRef} className={styles.bgEffect} aria-hidden="true" />;
}
