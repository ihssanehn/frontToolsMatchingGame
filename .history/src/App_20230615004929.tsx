import MatchingCard from "./matchingCard/matchingCard";
import "./App.css";
import { Card, cardsDataUnique } from "./data";
import { useEffect, useState } from "react";
import Header from "./header/header";
import Footer from "./footer";

const cardsData = [...cardsDataUnique, ...cardsDataUnique].sort(
  () => Math.random() - 0.5
);
function App() {
  // const cards is two arrays of cardsDataUnique
  // and make randoms
  const [cards, setCards] = useState(cardsData as Card[]);
  const [selectedItems, setSelectedItems] = useState([] as number[]);
  const [matchedItems, setMatchedItems] = useState([] as number[]);

  useEffect(() => {
    if (selectedItems.length === 2) {
      const [first, second] = selectedItems;
      if (cards[first].id === cards[second].id) {
        setMatchedItems((prev) => [...prev, cards[first].id]);
      }
      setTimeout(() => {
        setSelectedItems([]);
      }, 500);
    }
  }, [selectedItems]);

  const handleSelect = (index: number) => {
    setSelectedItems((prev) => [...prev, index]);
  };

  const onReset = () => {
    setCards(cardsData);
    setSelectedItems([]);
    setMatchedItems([]);
  };

  return (
    <div className="container">
      <Header onReset={onReset} />
      <div className="card-container">
        {cards.map((card, index) => (
          <MatchingCard
            key={index}
            index={index}
            id={card.id}
            content={card.content}
            handleSelect={handleSelect}
            isFlipped={selectedItems?.includes(index)}
            matched={matchedItems?.includes(card?.id)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
