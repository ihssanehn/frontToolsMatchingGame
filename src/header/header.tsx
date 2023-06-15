
interface Props {
    onReset : () => void;
    moves : number;
    completed : boolean;
}
function header({onReset, moves, completed} : Props) {
  return (
    <div className="header">
      <h3>{moves} Move{moves > 1 ? 's' : null}</h3>
      <h1>Matching Game</h1>
      <a className="cta" type="button" onClick={onReset}>
        <span>{completed ? 'START' : 'RESET'}</span>
      </a>
    </div>
  );
}

export default header;
