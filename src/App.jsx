import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [laoding, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      setData(result);
      console.log(result);
      setLastUpdate(new Date().toLocaleTimeString());
      setLoading(false);
    } catch (error) {
      console.log("Fetching data failed", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>MY API APP</h1>
      <button onClick={fetchData}>Fetch data</button>

      {lastUpdate && <p>Last Update: {lastUpdate}</p>}

      {laoding && <p>Loading...</p>}
      {data.map((user) => (
        <ItemCard key={user.id} props={user} />
      ))}
    </div>
  );
}

export default App;
