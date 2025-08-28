// src/components/Definition.jsx
export default function Definition() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center md:items-start">
      {/* Text content */}
      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-4">Kepler's Laws of Planetary Motion</h2>
        <p className="mb-2">
          Johannes Kepler formulated three fundamental laws that describe the motion of planets
          around the Sun.
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Law of Orbits:</strong> Planets move in elliptical orbits with the Sun at one focus.
          </li>
          <li>
            <strong>Law of Areas:</strong> A line segment joining a planet and the Sun sweeps out
            equal areas during equal intervals of time.
          </li>
          <li>
            <strong>Law of Periods:</strong> The square of a planet’s orbital time (period)
            is proportional to the cube of the average distance from the Sun.  <em>T² ∝ a³</em>.
          </li>
        </ol>
      </div>

      {/* Image + caption */}
      <div className="md:w-1/3 flex flex-col items-center mt-6 md:mt-0 md:ml-6">
        <img
          src="images/kepler.png"
          alt="Johannes Kepler"
          className="rounded-lg shadow-lg w-48 h-auto"
        />
        <p className="mt-2 text-sm text-gray-600 italic">Johannes Kepler (1571–1630)</p>
      </div>
    </div>
  );
}
