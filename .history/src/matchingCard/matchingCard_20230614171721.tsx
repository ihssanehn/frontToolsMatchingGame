import './matchingCard.scss';
import questionLogo from './../assets/question.png';
import reactLogo from './../assets/react.svg';
import { useState } from 'react';

function MatchingCard() {

  // set state hook for isFlipped
  const [isFlipped, setFlip] = useState(false);

  const handleFlip = () => {
    console.log('flip');
    setFlip(!isFlipped);
  }
  return (
    <div className={`card ${isFlipped && 'flipped'}`} onClick={handleFlip}>
        {!isFlipped && <div className="card-face card-front">
            <img src={questionLogo} alt="card-front"/>
        </div>}
        {isFlipped &&<div className="card-face card-back">
            <img src={reactLogo} alt="reactLogo"/>
        </div>}
    </div>
  )
}

export default MatchingCard
