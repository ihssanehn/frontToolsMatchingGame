
interface Props {
    onReset : () => void;
    moves : number;
}
function header({onReset, moves} : Props) {
  return (
    <div className="header">
      <h3>{moves} Move{moves > 1 ? 's' : null}</h3>
      <h1>Matching Game</h1>
      <a className="cta" type="button" onClick={onReset}>
        <span>RESET</span>
      </a>
    </div>
  );
}

export default header;
