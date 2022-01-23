import "./styles.css";
import Square from "./Square";
import Counter from "./Counter";

export default function App() {
  return (
    <div className="App">
      <h1>Ad Orientem</h1>
      <h2>Start editing to see some magic happen! Cannot yet.</h2>
      <Square value={1} />
      <Counter counterName="Main Counter" />
    </div>
  );
}
