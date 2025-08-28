import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function KeplerThirdLaw() {
  const [a, setA] = useState(100);

  const T = Math.pow(a, 1.5).toFixed(1);

  const data = Array.from({ length: 8 }, (_, i) => {
    const semi = (i + 1) * 50;
    return { a: semi, T: Math.pow(semi, 1.5) };
  });

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-2">Kepler's Third Law</h2>
      

      <div className="mb-4">
        <label>Semi-major axis: </label>
        <input
          type="range"
          min="50"
          max="300"
          value={a}
          onChange={(e) => setA(Number(e.target.value))}
        />
        <span className="ml-2">{a}</span>
      </div>

      <p className="mb-4">
        Period (T) ≈ <span className="font-bold">{T}</span>
      </p>

      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="a" label={{ value: "a (semi-major axis)", position: "insideBottom", dy: 10 }} />
        <YAxis label={{ value: "T (period)", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Line type="monotone" dataKey="T" stroke="#00d1ff" />
      </LineChart>
    </div>
  );
}