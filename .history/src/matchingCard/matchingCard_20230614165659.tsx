import './matchingCard.scss';
import questionLogo from './../assets/question.png';

function MatchingCard() {
  return (
    <div className="card">
        <div className="card-face card-front">
            <img src={questionLogo} alt="card-front"/>
        </div>
    </div>
  )
}

export default MatchingCard
