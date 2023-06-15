import './matchingCard.scss';
import questionLogo from './../assets/question.png';
interface MatchingCardProps {
  id : number;
  content: string;
  matched: boolean;
  isFlipped : boolean;
  handleSelect: (id: number) => void;
}
function MatchingCard({id, content, matched, isFlipped, handleSelect}: MatchingCardProps) {

  // set state hook for isFlipped

  const handleFlip = () => {
    if(matched && isFlipped) return;
    handleSelect(id);
  }


  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        {!isFlipped && <div className="card-face card-front">
            <img src={questionLogo} alt={matched?.toString()}/>
        </div>}
        {isFlipped &&<div className="card-face card-back">
            <img src={content} alt={content}/>
        </div>}
    </div>
  )
}

export default MatchingCard
