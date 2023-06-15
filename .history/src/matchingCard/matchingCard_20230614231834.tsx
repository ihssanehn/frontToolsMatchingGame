import './matchingCard.scss';
import questionLogo from './../assets/question.png';
interface MatchingCardProps {
  id : number;
  index : number;
  content: string;
  matched: boolean;
  isFlipped : boolean;
  handleSelect: (index: number) => void;
}
function MatchingCard({id, content, matched, isFlipped, handleSelect, index}: MatchingCardProps) {

  // set state hook for isFlipped

  const handleFlip = () => {
    if(matched || isFlipped) return;
    handleSelect(index);
  }


  return (
    !matched ? 
    <div className={`card ${isFlipped || matched ? 'flipped' : ''}`} onClick={handleFlip}>
        {!isFlipped &&!matched && <div className="card-face card-front">
            <img src={questionLogo} alt={matched?.toString()}/>
        </div>}
        {(isFlipped || matched) &&<div className="card-face card-back">
            <img src={content} alt={content}/>
        </div>}
    </div> : null
  )
}

export default MatchingCard
