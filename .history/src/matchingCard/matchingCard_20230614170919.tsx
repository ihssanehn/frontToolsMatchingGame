import './matchingCard.scss';
import questionLogo from './../assets/question.png';
import reactLogo from './../assets/react.svg';

function MatchingCard() {
  return (
    <div className="card">
        {false && <div className="card-face card-front">
            <img src={questionLogo} alt="card-front"/>
        </div>}
        {true &&<div className="card-face card-back">
            <img src={reactLogo} alt="reactLogo"/>
        </div>}
    </div>
  )
}

export default MatchingCard
