import React, { useEffect, useRef } from "react";

const BAR_COUNT = 32;
const COLORS = [
  "#0fffc1",
  "#ff00ea",
  "#00bfff",
  "#fffb00",
  "#7e0fff"
];

const NeonMusicBackground = () => {
  const barsRef = useRef([]);

  useEffect(() => {
    let running = true;
    function animate() {
      if (!running) return;
      barsRef.current.forEach((bar, i) => {
        if (bar) {
          const scale = 0.3 + Math.abs(Math.sin(Date.now() / 600 + i)) * 0.7;
          bar.style.transform = `scaleY(${scale})`;
          bar.style.opacity = 0.7 + 0.3 * Math.abs(Math.cos(Date.now() / 800 + i));
        }
      });
      requestAnimationFrame(animate);
    }
    animate();
    return () => { running = false; };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: "0.5vw",
        opacity: 0.5,
        mixBlendMode: "screen",
        paddingBottom: "12vh"
      }}
      aria-hidden="true"
    >
      {Array.from({ length: BAR_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={el => barsRef.current[i] = el}
          style={{
            width: "1vw",
            height: "40vh",
            background: COLORS[i % COLORS.length],
            borderRadius: "0.5vw",
            boxShadow: `0 0 16px 4px ${COLORS[i % COLORS.length]}, 0 0 48px 8px ${COLORS[i % COLORS.length]}`,
            transition: "transform 0.2s, opacity 0.2s"
          }}
        />
      ))}
    </div>
  );
};

export default NeonMusicBackground; 