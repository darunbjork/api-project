import "./App.css";
import { useEffect, useState } from "react";

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
    <div>
      <h1>My API project</h1>
      <button onClick={fetchData}>Get Data</button>

      <h3>Loading {loading && <p>...Loading</p>}</h3>
      <h3>{!loading && <p> Data {data.length} users</p>}</h3>
    </div>
  );
}

export default App;
