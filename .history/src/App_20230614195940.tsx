import MatchingCard from "./matchingCard/matchingCard";
import "./App.css";
import { cardsDataUnique } from "./data";
import { useEffect, useState } from "react";

const cardsData = [
  ...cardsDataUnique, ...cardsDataUnique
].sort(() => Math.random() - 0.5);
function App() {
  // const cards is two arrays of cardsDataUnique
  // and make randoms
  const [selectedItems, setSelectedItems] = useState([] as number[]);
  const [matchedItems, setMatchedItems] = useState([] as number[]);

  useEffect(() => {
    console.log("selectedItems use effects", selectedItems);
  }, [selectedItems])
  const handleSelect = (id: number) => {
    console.log("id", id);
    console.log("selectedItems", selectedItems);
    if (selectedItems.length === 1) {
      if(selectedItems[0] === id) {
        console.log("matched");
        console.log("matchedItems before", matchedItems);
        setMatchedItems([...matchedItems, id]);
        // matchedItems = [...matchedItems, id];
        console.log("matchedItems after", matchedItems);
      }
      // selectedItems = [];
      setSelectedItems([]);
    }else {
      // selectedItems = [id];
      setSelectedItems([id]);
    }
  };
  
  return (
    <div className="container">
      <div className="card-container">
        {cardsData.map((card, index) => (
          <MatchingCard
            key={index}
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
