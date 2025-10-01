import { useState } from "react"
import { languages } from "./languages"
import { wordsList } from "./wordsList"


export default function App(){

  // State variables
  const [word, setWord] = useState("react")


  // Static Variables
  const alphabets = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")

 


  const languageChips = languages.map((language,index)=>{
    const styles ={backgroundColor: language.backgroundColor, color: language.color}
    return (
    <span className="LanguageChip" key={index} style={styles}>{language.name}</span>
  )})

  const letters = word.split("").map((letter, index) => (
      <div className="Letter" key={index}>{letter.toUpperCase()}</div>
  ));

  function getRandomWord(){
    const randomIndex = Math.floor(Math.random() * wordsList.length)
    const randomWord = wordsList[randomIndex]
    setWord(randomWord)
  }

  const keyboard= alphabets.map((letter,index)=>{
    return(
      <button className="letterKey" key={index}>{letter}</button>
    )
  })

  
  return(

    <main>
      <section className="Header">
        <h1>Assembly : End Game</h1>
        <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
      </section>

      <section className="Status">
        <h2> You win</h2>
        <p>Well done! 🎉</p>
      </section>

      <section className="Languages">{languageChips}</section>

      <section className="Word">{letters}</section>

      <section className="Keyboard">{keyboard}</section>

      <button className="NewGameButton" onClick={getRandomWord}>New Game</button>

    </main>
  )
}