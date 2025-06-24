import React, { useRef, useEffect } from "react";
import * as THREE from "three";

// More recognizable music note SVG path (eighth note)
const NOTE_SVG_PATH = "M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6zm6 0v4h-4v10a2 2 0 1 1-2-2V3h6z";

function createNoteTexture() {
  const size = 96; // Increased size for clarity
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, size, size);
  ctx.save();
  ctx.translate(size / 2, size / 2);
  ctx.scale(3.5, 3.5); // Larger scale
  ctx.translate(-12, -10); // Center the note
  // Draw SVG path (manually for this path)
  ctx.beginPath();
  ctx.moveTo(12, 3);
  ctx.lineTo(12, 13.55);
  ctx.arcTo(12, 17, 14, 17, 4); // Arc for the note head
  ctx.lineTo(14, 7);
  ctx.lineTo(18, 7);
  ctx.lineTo(18, 3);
  ctx.lineTo(12, 3);
  ctx.closePath();
  ctx.moveTo(18, 3);
  ctx.lineTo(18, 7);
  ctx.lineTo(14, 7);
  ctx.lineTo(14, 17);
  ctx.arc(12, 15, 2, 0, Math.PI * 2, false); // Note head
  ctx.closePath();
  ctx.shadowColor = "#fff";
  ctx.shadowBlur = 12;
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = "#111";
  ctx.stroke();
  ctx.restore();
  return new THREE.CanvasTexture(canvas);
}

const NUM_NOTES = 24;
const NOTE_MIN_SIZE = 0.13; // Increased min size
const NOTE_MAX_SIZE = 0.22; // Increased max size
const NOTE_MIN_SPEED = 0.3;
const NOTE_MAX_SPEED = 0.7;

const MusicNotesAnimation = () => {
  const containerRef = useRef();
  useEffect(() => {
    let renderer, scene, camera, notes = [], frameId;
    let width = window.innerWidth;
    let height = 400;
    let disposed = false;
    const noteTexture = createNoteTexture();

    function randomX() {
      return (Math.random() - 0.5) * 2; // -1 to 1
    }
    function randomY() {
      return Math.random() * 2 - 1; // -1 to 1
    }
    function randomSize() {
      return NOTE_MIN_SIZE + Math.random() * (NOTE_MAX_SIZE - NOTE_MIN_SIZE);
    }
    function randomSpeed() {
      return NOTE_MIN_SPEED + Math.random() * (NOTE_MAX_SPEED - NOTE_MIN_SPEED);
    }

    function createNote() {
      const size = randomSize();
      const material = new THREE.SpriteMaterial({ map: noteTexture, transparent: true });
      const sprite = new THREE.Sprite(material);
      sprite.position.set(randomX(), 1.2 + Math.random(), 0);
      sprite.scale.set(size, size, 1);
      scene.add(sprite);
      return {
        sprite,
        speed: randomSpeed(),
        size,
        x: sprite.position.x,
        y: sprite.position.y,
      };
    }

    function init() {
      scene = new THREE.Scene();
      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 10);
      camera.position.z = 1;
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        containerRef.current.appendChild(renderer.domElement);
      }
      // Create notes
      notes = [];
      for (let i = 0; i < NUM_NOTES; i++) {
        notes.push(createNote());
      }
      window.addEventListener("resize", onWindowResize);
    }

    function onWindowResize() {
      width = window.innerWidth;
      renderer.setSize(width, height);
    }

    function animate() {
      if (disposed) return;
      // Animate notes
      for (let note of notes) {
        note.sprite.position.y -= note.speed * 0.008;
        note.sprite.position.x += Math.sin(Date.now() * 0.0005 + note.sprite.position.y * 2) * 0.0015;
        if (note.sprite.position.y < -1.2) {
          note.sprite.position.y = 1.2 + Math.random() * 0.2;
          note.sprite.position.x = randomX();
          note.speed = randomSpeed();
          note.sprite.scale.set(randomSize(), randomSize(), 1);
        }
      }
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      disposed = true;
      window.removeEventListener("resize", onWindowResize);
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return <div ref={containerRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 400, zIndex: 0, pointerEvents: 'none' }} />;
};

export default MusicNotesAnimation; 