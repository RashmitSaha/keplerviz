import OrbitCanvas from "./OrbitCanvas";

export default function KeplerFirstLaw() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-2">Kepler's First Law</h2>
      <OrbitCanvas mode="ellipse" />
    </div>
  );
}
