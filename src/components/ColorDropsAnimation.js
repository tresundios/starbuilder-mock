import React from "react";

const NUM_DROPS = 144;

const ColorDropsAnimation = () => (
  <div className="color-drops-wrap" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '400px', zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
    <style>{`
      .color-drops-wrap {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 400px;
        z-index: 0;
        pointer-events: none;
        overflow: hidden;
      }
      .color-drop {
        position: relative;
        height: 400px;
        width: 0.69444%;
        margin-top: -400px;
        animation: drop 4s infinite ease-in;
      }
      .color-drop:after {
        content: "";
        position: absolute;
        width: 0.9vw;
        height: 0.9vw;
        border-radius: 50%;
        left: 50%;
        bottom: -0.45vw;
        margin-left: -0.45vw;
      }
      @keyframes drop {
        0% { margin-top: -400px; opacity: 0; }
        10% { opacity: 1; }
        100% { margin-top: 100vh; opacity: 0; }
      }
    `}</style>
    {Array.from({ length: NUM_DROPS }).map((_, i) => (
      <div
        key={i}
        className="color-drop"
        style={{
          left: `${(i * 0.69444).toFixed(5)}%`,
          background: `linear-gradient(to bottom, black, rgba(${255}, ${9 + i * 9}, 0, 0.8))`,
          animationDelay: `${(-Math.random() * 4).toFixed(2)}s`,
        }}
      />
    ))}
  </div>
);

export default ColorDropsAnimation; 