import MatchingCard from "./matchingCard/matchingCard";
import "./App.css";
import { Card, cardsDataUnique } from "./data";
import { useState } from "react";

function App() {
  // const cards is two arrays of cardsDataUnique
  // and make randoms
  const cards: Card[] = [...cardsDataUnique, ...cardsDataUnique]
  const [selectedItems, setSelectedItems] = useState([] as number[]);
  const [matchedItems, setMatchedItems] = useState([] as number[]);

  const handleSelect = (id: number) => {
    setSelectedItems([...selectedItems, id]);
    if (selectedItems.length === 1 && selectedItems[0] === id) {
      setMatchedItems([...matchedItems, id]);
    }
    setSelectedItems([]);
  };
  return (
    <div className="container">
      <div className="card-container">
        {cards.map((card, index) => (
          <MatchingCard
            id={card.id}
            content={card.content}
            handleSelect={handleSelect}
            matched={matchedItems?.includes(card?.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
