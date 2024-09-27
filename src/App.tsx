
import { useEffect, useState } from 'react'
import './App.css'
import { HangImage } from './components/Haglmage'
import { letters } from './helpers/letters'
import { getRandomWord } from './helpers/getRandomWord';

function App() {
  const [ word, setWord ] = useState(getRandomWord());
  const [ hiddenWord, setHiddenWord ] = useState('_ '.repeat(word.length));
  const [ attempts, setAttempts ] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);


  //Determina si la persona perdio.
  useEffect(()=>{
    if(attempts>= 9){
      setLose(true);
    }
  },[attempts]); //Hooks


  //Determinar si la persona gano.
  useEffect(()=>{
    const currentHiddenWord = hiddenWord.split(' ').join('');
    if (currentHiddenWord === word){
      setWon(true);
    }
  },[hiddenWord]);


  const checkLetter = (letter: string) =>{
    if(lose)return;
    if (!word.includes(letter)){
        setAttempts(Math.min (attempts + 1, 9));
        return;   
      }

      const hiddenWordArray = hiddenWord.split(' ');

      for (let i = 0; i < word.length; i++){
        if (word[i] === letter){
          hiddenWordArray[i] = letter;
        }
      }
      setHiddenWord(hiddenWordArray.join(' '));   
  }

  //Reincia el juego
   const newGame = () =>{
    const newWord = getRandomWord();
    setWord(newWord);
    setHiddenWord('_ '.repeat(newWord.length));
    setAttempts(0);
    setLose( false );
    setWon( false );
   }



  return(
    <div className="App">
      {/*  imagenes  */}
      <HangImage imageNumber={attempts}/>

      {/*  palabra oculta  */}
      <h3>{hiddenWord}</h3>

      {/*  Contador de intentos  */}
      <h3>Intentos: {attempts}</h3>
      {/* Mensaje Si perdio  */}
      {
        (lose) ?  <h2>Perdiste, la palabra era:  {word}</h2> : ''
      }    



      {/* Mensaje Si Gano  */}
      {
        (won) ?  <h2>Ganaste:  {word}</h2> : ''
      }




      {/* Botones de letras */}
      {
        letters.map( (letter) => (
          <button
          onClick={ () => checkLetter(letter) }
          key={letter}>
            {letter}
          </button>
        ))
      }
      <br /><br />
      <button onClick={newGame}>Nuevo Juego?</button>
    </div>
  )
}

export default App
