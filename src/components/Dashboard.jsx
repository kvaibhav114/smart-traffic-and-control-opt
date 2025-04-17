function Dashboard() {
    return (
      <div className="p-8 space-y-6">
        <h2 className="text-2xl font-semibold">Traffic Overview</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-6 bg-green-500 text-white rounded-lg">Low Traffic: 5</div>
          <div className="p-6 bg-yellow-400 text-white rounded-lg">Medium Traffic: 14</div>
          <div className="p-6 bg-red-500 text-white rounded-lg">High Traffic: 7</div>
        </div>
        <div className="mt-8 text-lg">Live detection and optimization under progress...</div>
      </div>
    );
  }
  
  export default Dashboard;
  