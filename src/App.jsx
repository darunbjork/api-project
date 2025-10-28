import { useState, useEffect } from "react";
import "./App.css";
import ItemCard from "./ItemCard";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const result = await response.json();

      setData(result);
      setLastUpdate(new Date().toLocaleDateString());
      // setLastUpdate(new Date().toLocaleTimeString());
      setLoading(false);
    } catch (error) {
      console.log("Fetching data failed", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>My API APP</h1>
      <button onClick={fetchData}>Get Data</button>
      {lastUpdate && <p>Last update: {lastUpdate}</p>}
      <p>{loading && <p>Loading...</p>}</p>

      {!loading && (
        <div>
          <p>Found {data.length} users</p>

          {data.map((item) => (
            <ItemCard key={item.id} user={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
