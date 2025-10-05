import { useState } from "react"
import { languages } from "./languages"
import { wordsList } from "./wordsList"
import LostMsg from "./LostMsg"
import clsx from "clsx"
import Confetti from "react-confetti"



export default function App(){

  // State variables
  const [word, setWord] = useState("react")
  const [guessedLetters,setGuessedLetters]= useState([])


  // Static Variables
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("")


  // Derived Variables
  const wrongGuessesCount = guessedLetters.filter(letter => !word.includes(letter)).length
  const isGameLost = wrongGuessesCount  >= languages.length-1
  const isGamewon = word.split("").every(letter => guessedLetters.includes(letter))
  const isGameOver = isGamewon || isGameLost
  const lastGuessedLetter = guessedLetters[guessedLetters.length -1]
  const isLastGuessedLetterIncorrect= lastGuessedLetter && !word.includes(lastGuessedLetter)

  
    const statusClassName= clsx("status",
      isGamewon && "gameWon",
      isGameLost && "gameLost",
      !isGameOver && isLastGuessedLetterIncorrect && "WrongGuessMsg"

    )

    const statusMessage = () => {
      if (isGamewon) {
        return (
          <>
            <h2>You win</h2>
            <p>Well done! 🎉</p>
          </>
        );
      }
      else if (isGameLost){
        return (
          <>
            <h2>Game Over</h2>
            <p>You lose! Better start learning Assembly 😭</p>
          </>
        )

      }

      else{
        
        return (

          !isGameOver && isLastGuessedLetterIncorrect &&
          <LostMsg 
          lang= {languages[wrongGuessesCount-1].name}/>
        )
      }

    
    }
 
    const languageChips = languages.map((language,index)=>{
    const styles ={backgroundColor: language.backgroundColor, color: language.color}
    const isLanguageLost = index < wrongGuessesCount

    const classname= clsx( "LanguageChip",
      isLanguageLost && "lost"
    )
      return (
      <span className={classname} key={index} style={styles}>{language.name}</span>
    )})

  const letters = word.split("").map((letter, index) => {
    
    const letterClassName= clsx ("Letter",
      isGameOver && guessedLetters.includes(letter) && "correctLetter",
      isGameOver && !guessedLetters.includes(letter) && "wrongLetter"
    )
    
    return (
      <div className={letterClassName} key={index}>{ isGameOver ? letter.toUpperCase() :  guessedLetters.includes(letter) ? letter.toUpperCase() : " " }</div>
  )})

  function getRandomWord(){
    const randomIndex = Math.floor(Math.random() * wordsList.length)
    const randomWord = wordsList[randomIndex]
    setWord(randomWord)
  }


  function handleLetterClick(event){
    const clickedLetter = event.target.textContent.toLowerCase()
    setGuessedLetters( prevLetters => prevLetters.includes(clickedLetter) ? prevLetters :
      [...prevLetters,clickedLetter])
  }

  const keyboard= alphabets.map((letter,index)=>{
    
    const className= clsx("letterKey",
      guessedLetters.includes(letter) && "guessedLetter",
      word.includes(letter) && guessedLetters.includes(letter)  && "correctGuess",
      !word.includes(letter) && guessedLetters.includes(letter) && "wrongGuess"

    )
        
    return(
      <button className={className} key={index} onClick={handleLetterClick} disabled={isGameOver} >{letter.toUpperCase()}</button>
    )
  })


  function newGame(){
    setGuessedLetters([])
    getRandomWord()
  }


  const width= window.innerWidth
  const height= window.innerHeight

   
  return(

    <main>

      {isGamewon && <Confetti
           recycle={false}
           width={width}
           height={height}
           numberOfPieces={1000}
      /> }

      <section className="Header">
        <h1>Assembly : End Game</h1>
        <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
      </section>

      <section className={statusClassName}>
       {statusMessage()}
      </section>

      <section className="Languages">{languageChips}</section>

      <section className="Word">{ letters}</section>

      <section className="Keyboard">{keyboard}</section>

      {isGameOver ? <button className="NewGameButton" onClick={newGame}>New Game</button> : null}

          
    </main>
  )
}