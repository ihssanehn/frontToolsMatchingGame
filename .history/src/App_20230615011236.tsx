import MatchingCard from "./matchingCard/matchingCard";
import "./App.css";
import { Card, cardsDataUnique } from "./data";
import { useEffect, useState } from "react";
import Header from "./header/header";
import Footer from "./footer";

// function that returns cards data sorted randomly
 const getCards = () => {
   const cards = [...cardsDataUnique, ...cardsDataUnique];
   return cards.sort(() => Math.random() - 0.5);
 };
function App() {
  // const cards is two arrays of cardsDataUnique
  // and make randoms
  const [cards, setCards] = useState(getCards() as Card[]);
  const [selectedItems, setSelectedItems] = useState([] as number[]);
  const [matchedItems, setMatchedItems] = useState([] as number[]);
  const [moves, setMoves] = useState(0);
  const [bestScore, setBestScore] = useState(Number(localStorage.getItem('bestScore')) || 0);

  useEffect(() => {
    if (selectedItems.length === 2) {
      const [first, second] = selectedItems;
      if (cards[first].id === cards[second].id) {
        setMatchedItems((prev) => [...prev, cards[first].id]);
      }
      setMoves((prev) => prev + 1);
      setTimeout(() => {
        setSelectedItems([]);
      }, 500);
    }

  }, [selectedItems]);

  useEffect(() => {
    if(matchedItems.length === cardsDataUnique.length) {
      // set best score in local storage
      if(!bestScore || bestScore > moves) {
        localStorage.setItem('bestScore', moves.toString());
        setBestScore(moves);
      }
    }
  }, [matchedItems])

  const handleSelect = (index: number) => {
    setSelectedItems((prev) => [...prev, index]);
  };

  const randomizeCards = (wait : boolean) => {
    setTimeout(() => {
      setCards(getCards());
    }, wait ? 500 : 0);
  }
  const onReset = () => {
    // radnomize cards but wait until the cards are flipped if they are
    selectedItems.length > 0 ? randomizeCards(true) : randomizeCards(false);
    setSelectedItems([]);
    setMatchedItems([]);
    setMoves(0);
  };

  return (
    <div className="container">
      <Header onReset={onReset} moves={moves} />
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
      <Footer bestScore={bestScore} />
    </div>
  );
}

export default App;
