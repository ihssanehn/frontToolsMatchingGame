function footer({bestScore} : {bestScore : number}) {
  return (
    bestScore ? <h1 className="best-score">
        THE BEST SCORE IS : {bestScore} MOVES      
    </h1> : null
  )
}

export default footer
