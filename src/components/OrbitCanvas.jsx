import { useEffect, useRef } from "react";

export default function OrbitCanvas({ mode }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationId;
    let angle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Ellipse parameters
      const a = 200; // semi-major axis
      const b = 150; // semi-minor axis
      const c = Math.sqrt(a * a - b * b); // focal distance

      // Place Sun at right focus
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const sunX = cx + c;
      const sunY = cy;

      // Draw orbit
      ctx.strokeStyle = "white";
      ctx.beginPath();
      ctx.ellipse(cx, cy, a, b, 0, 0, 2 * Math.PI);
      ctx.stroke();

      // Draw Sun
      ctx.fillStyle = "yellow";
      ctx.beginPath();
      ctx.arc(sunX, sunY, 12, 0, Math.PI * 2);
      ctx.fill();

      // Planet position using parametric ellipse
      const x = cx + a * Math.cos(angle);
      const y = cy + b * Math.sin(angle);

      // Planet
      ctx.fillStyle = "cyan";
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fill();

      // ---- Labels ----
      ctx.fillStyle = "white";
      ctx.font = "16px Arial";

      // Orbit label (static above ellipse)
      ctx.fillText("Planet's Orbit", cx - 60, cy - b - 45);

      // Sun label (anchored next to Sun)
      ctx.fillText("Sun", sunX - 50, sunY + 5);

      // Planet label (moves with planet)
      ctx.fillText("Planet", x + 12, y - 12);

      // Law II (equal areas visualization)
      if (mode === "equalAreas") {
        ctx.strokeStyle = "rgba(57, 150, 111, 0.5)";
        ctx.beginPath();
        ctx.moveTo(sunX, sunY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      // Adjust speed (planet moves faster near perihelion)
      if (mode === "equalAreas") {
        const r = Math.hypot(x - sunX, y - sunY);
        angle += 0.8 / r; // variable speed
      } else {
        angle += 0.01; // uniform speed (for Law I)
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationId);
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={480}
      className="border border-gray-600 rounded-lg bg-black"
    />
  );
}
