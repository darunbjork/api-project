import "./App.css";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data, try again", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>My API App</h1>
      <button onClick={fetchData}>Refresh Data</button>

      {loading && <p>Loading...</p>}

      {!loading && (
        <div>
          <p>Found {data.length} items</p>

          {!loading && (
            <div>
              <p>Found {data.length} users</p>
              {data.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
