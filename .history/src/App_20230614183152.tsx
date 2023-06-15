import MatchingCard from "./matchingCard/matchingCard";
import "./App.css";
import { Card, cardsDataUnique } from "./data";
import { useState } from "react";

const cardsData = [
  ...cardsDataUnique, ...cardsDataUnique
].sort(() => Math.random() - 0.5);
function App() {
  // const cards is two arrays of cardsDataUnique
  // and make randoms
  const [selectedItems, setSelectedItems] = useState([] as number[]);
  const [matchedItems, setMatchedItems] = useState([] as number[]);

  const handleSelect = (id: number) => {
    console.log("id", id);
    setSelectedItems([...selectedItems, id]);
    console.log("selectedItems", selectedItems);
    if (selectedItems.length === 1) {
      if(selectedItems[0] === id) {
        setMatchedItems([...matchedItems, id]);
        console.log("matchedItems", matchedItems);
      }
    }
  };
  return (
    <div className="container">
      <div className="card-container">
        {cardsData.map((card, index) => (
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
