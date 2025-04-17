import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      {/* Navbar */}
      <div className="p-4 bg-gray-800 text-white flex justify-between">
        <h1 className="text-xl font-bold">Traffic Monitoring Dashboard</h1>
        <div>
          <a href="#overview" className="px-4">Overview</a>
          <a href="#map" className="px-4">Map</a>
        </div>
      </div>

      {/* Dashboard */}
      <div id="overview" className="p-8 space-y-6">
        <h2 className="text-2xl font-semibold">Traffic Overview</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-6 bg-green-500 text-white rounded-lg">Low Traffic: 5</div>
          <div className="p-6 bg-yellow-400 text-white rounded-lg">Medium Traffic: 14</div>
          <div className="p-6 bg-red-500 text-white rounded-lg">High Traffic: 7</div>
        </div>
        <div className="mt-8 text-lg">Live detection and optimization under progress...</div>
      </div>

      {/* Map Section */}
      <div id="map" className="p-8">
        <h2 className="text-2xl font-semibold mb-6">Traffic Map</h2>
        <iframe 
          src="/sample_traffic_map.html" 
          title="Traffic Map"
          className="w-full h-[600px] border rounded-lg"
        />
      </div>
    </div>
  );
}

export default App;
