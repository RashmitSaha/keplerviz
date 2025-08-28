import React, { useEffect, useState } from "react";
import { InlineMath } from "react-katex";
import { motion } from "framer-motion";
const steps = [
  { id: 1, eq: "F_g = \\dfrac{G M m}{r^2}", note: "Newton's gravity for Sun-planet" },
  { id: 2, eq: "F_c = \\dfrac{m v^2}{r}", note: "Centripetal force for circular motion" },
  { id: 3, eq: "\\dfrac{G M m}{r^2} = \\dfrac{m v^2}{r}", 
    note: <span>Equating <InlineMath math="F_g" /> and <InlineMath math="F_c" /></span> },
  { id: 4, eq: "v^2 = \\dfrac{G M}{r}", note: "Cancel m and simplify" },
  { id: 5, eq: "T = \\dfrac{2 \\pi r}{v}", note: "Period = circumference / speed" },
  { id: 6, eq: "T^2 = \\dfrac{4 \\pi^2 r^3}{G M}", note: "Substitute v and rearrange" },
  { id: 7, eq: "T^2 = a^3 \\quad (r \\approx a, \\, \\mu = 4\\pi^2)", note: "For ellipses, use semi-major axis a" },
];


export default function LawThreeDerivation() {
  const [index, setIndex] = useState(0); // which step is currently visible
  const [visibleSteps, setVisibleSteps] = useState([]);

  useEffect(() => {
  let intervalId;

  if (index < steps.length) {
    // keep adding steps
    intervalId = setTimeout(() => {
      setVisibleSteps((prev) => [...prev, steps[index]]);
      setIndex((prev) => prev + 1);
    }, 1800);
  } else {
    // when finished, wait 2s then restart with fade-in for step 1
    intervalId = setTimeout(() => {
      setVisibleSteps([]);   // 👈 clear everything first
      setTimeout(() => {
        setVisibleSteps([steps[0]]); // 👈 re-add step 1 so fade-in triggers
        setIndex(1);
      }, 50); // tiny delay ensures React unmounts/remounts
    }, 2000);
  }

  return () => clearTimeout(intervalId);
}, [index]);


return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
    <h2 className="text-2xl font-bold mb-6 text-yellow-600">
      Derivation of Kepler&apos;s Third Law
    </h2>

    <div className="p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-lg text-center">
      {visibleSteps.map((step) => (
        <motion.div
          key={step.id}
          className="my-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <strong>Step {step.id}:</strong>{" "}
          <InlineMath math={step.eq} />
          <div className="text-sm text-gray-600">{step.note}</div>
        </motion.div>
      ))}
    </div>
  </div>
);


}
