import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Count + 1</button>
      <button onClick={() => setCount(count - 1)}>Count - 1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
