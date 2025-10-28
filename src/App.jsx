import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://randomuser.me/api/?results=10");
      const result = await response.json();

      setData(result.results);
      console.log(result);
      setLoading(false);
    } catch (error) {
      console.log("Fetching Data Failed", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>User API</h1>
      <button onClick={fetchData}>Fetch User API</button>

      {!loading && (
        <div>
          <p>Found {data.length} users</p>

          {data.map((user, index) => (
            <li key={index}>
              {user.gender} - {user.name.first}
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
