export default function Header() {
  return (
    <header className="flex flex-col items-center py-6 bg-gradient-to-b from-black to-indigo-950 shadow-lg">
        {/* Title with Icon */}
        <div className="flex items-center gap-4">
        {/* Sun + Orbit Icon */}
        <div className="relative w-12 h-12">
            {/* Orbit Circle */}
            <div className="w-12 h-12 rounded-full border-2 border-white animate-spin-slow"></div>

            {/* Sun */}
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
        </div>

        {/* Text */}
        <div>
            <h1 className="text-3xl font-bold text-yellow-400 drop-shadow-lg">
            KeplerViz
            </h1>
            <p className="text-lg text-gray-300 mt-1 tracking-wide">
            Visualizing Kepler’s Laws
            </p>
        </div>
        </div>

    </header>

  );
}
