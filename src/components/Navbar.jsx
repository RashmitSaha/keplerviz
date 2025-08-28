export default function Navbar({ activeTab, onTabChange }) {
  const tabs = ["Definition", "Laws"];

  return (
    <nav className="bg-slate-900 text-white px-6 py-3 flex gap-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`font-semibold ${
            activeTab === tab
              ? "text-yellow-600 border-b-2 border-yellow-400"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
