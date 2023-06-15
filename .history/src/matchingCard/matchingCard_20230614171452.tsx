import './matchingCard.scss';
import questionLogo from './../assets/question.png';
import reactLogo from './../assets/react.svg';

function MatchingCard() {

  const isFlipped = true;
  return (
    <div className={`card ${isFlipped && 'flipped'}`}>
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
