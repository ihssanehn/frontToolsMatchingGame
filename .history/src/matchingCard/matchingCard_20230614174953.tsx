import './matchingCard.scss';
import questionLogo from './../assets/question.png';
import { useState } from 'react';
interface MatchingCardProps {
  id : number;
  content: string;

}
function MatchingCard({id, content}: MatchingCardProps) {

  // set state hook for isFlipped
  const [isFlipped, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip(!isFlipped);
  }
  return (
    <div className={`card ${isFlipped && 'flipped'}`} onClick={handleFlip}>
        {!isFlipped && <div className="card-face card-front">
            <img src={questionLogo} alt="card-front"/>
        </div>}
        {isFlipped &&<div className="card-face card-back">
            <img src={content} alt="reactLogo"/>
        </div>}
    </div>
  )
}

export default MatchingCard
