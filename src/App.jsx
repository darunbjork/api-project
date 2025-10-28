import "./App.css";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://randomuser.me/api/?results=10");
      const result = await response.json();

      setData(result.results);
      console.log(result);
      setLoading(false);
      setLastUpdate(new Date().toLocaleTimeString());
    } catch (error) {
      console.log("Fetching Data Failed", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      console.log("--- Automatic refresh running! ---");
      fetchData();
    }, 30000); // 30000 = 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>User API</h1>
      <button onClick={fetchData}>Fetch User API</button>
      {lastUpdate && <p>Last updated: {lastUpdate}</p>}

      {!loading && (
        <div>
          <p>Found {data.length} users</p>
          {data.map((user, index) => (
            <ItemCard items={user} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
