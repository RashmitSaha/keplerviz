import OrbitCanvas from "./OrbitCanvas";

export default function KeplerSecondLaw() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-2">Kepler's Second Law</h2>
      <OrbitCanvas mode="equalAreas" />
    </div>
  );
}
