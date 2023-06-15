import MatchingCard from "./matchingCard/matchingCard";
import "./App.css";
function App() {
  return (
    <div className="container">
      <div className="card-container">
        <MatchingCard />
        <MatchingCard />
        <MatchingCard />
        <MatchingCard />
      </div>
    </div>
  );
}

export default App;
