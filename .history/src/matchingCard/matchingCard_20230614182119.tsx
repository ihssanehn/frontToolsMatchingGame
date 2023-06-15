import './matchingCard.scss';
import questionLogo from './../assets/question.png';
import { useState } from 'react';
interface MatchingCardProps {
  id : number;
  content: string;
  matched: boolean;
  handleSelect: (id: number) => void;
}
function MatchingCard({id, content, matched, handleSelect}: MatchingCardProps) {

  // set state hook for isFlipped
  const [isFlipped, setFlip] = useState(false);

  const handleFlip = () => {
    console.log('handleFlip', matched);
    if(matched) return;
    setFlip(!isFlipped);
    handleSelect(id);
  }
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        {!isFlipped && <div className="card-face card-front">
            <img src={questionLogo} alt="card-front"/>
        </div>}
        {isFlipped &&<div className="card-face card-back">
            <img src={content} alt={content}/>
        </div>}
    </div>
  )
}

export default MatchingCard
