import MatchingCard from "./matchingCard/matchingCard";
import "./App.css";
import { Card, cardsDataUnique} from "./data";


function App() {

  // const cards is two arrays of cardsDataUnique 
  // and make randoms 
  const cards: Card[] = [...cardsDataUnique, ...cardsDataUnique].sort(() => Math.random() - 0.5);
  

  return (
    <div className="container">
      <div className="card-container">
        <MatchingCard />
      </div>
    </div>
  );
}

export default App;
