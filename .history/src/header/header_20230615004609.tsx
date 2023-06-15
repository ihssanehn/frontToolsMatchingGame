
interface Props {
    onReset : () => void;
}
function header({onReset} : Props) {
  return (
    <div className="header">
      <h3>0 Move(s)</h3>
      <h1>Matching Game</h1>
      <a className="cta" type="button" onClick={onReset}>
        <span>RESET</span>
      </a>
    </div>
  );
}

export default header;
