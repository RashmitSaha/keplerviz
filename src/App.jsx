// src/App.jsx
import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Definition from "./components/Definition";
import KeplerFirstLaw from "./components/KeplerFirstLaw";
import KeplerSecondLaw from "./components/KeplerSecondLaw";
import KeplerThirdLaw from "./components/KeplerThirdLaw";
import LawThreeDerivation from "./components/LawThreeDerivation";

export default function App() {
  const [activeTab, setActiveTab] = useState("Definition");

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="p-6">
        {activeTab === "Definition" && <Definition />}
        {activeTab === "Laws" && (
          <div className="space-y-6">
            <KeplerFirstLaw />
            <KeplerSecondLaw />
            <KeplerThirdLaw />
            <LawThreeDerivation />
            
          </div>
        )}
      </div>
    </div>
  );
}
