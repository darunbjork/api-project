import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>My API Project</h1>
      <h3>Count is {count}</h3>
      <button onClick={() => setCount(count + 1)}>Count +</button>
    </div>
  );
}

export default App;
