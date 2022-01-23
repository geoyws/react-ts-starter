import { useState } from "react";

export interface CounterProp {
  counterName: string;
}

export default function Counter(prop: CounterProp) {
  const [count, setCount] = useState(0);

  const handleClick = (delta: number) => setCount(count + delta);

  return (
    <div style={{ marginTop: "1rem" }}>
      <div style={{ marginBottom: "0.5rem" }}>{prop.counterName}</div>
      <button onClick={() => handleClick(-1)}>Decrease</button>
      <div style={{ padding: "0.25rem" }}>{count}</div>
      <button onClick={() => handleClick(1)}>Increase</button>
    </div>
  );
}
