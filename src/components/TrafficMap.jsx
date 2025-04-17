function TrafficMap() {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-6">Traffic Map</h2>
        <iframe 
          src="/sample_traffic_map.html" 
          title="Traffic Map"
          className="w-full h-[600px] border rounded-lg"
        />
      </div>
    );
  }
  
  export default TrafficMap;
  