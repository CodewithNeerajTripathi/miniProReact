import React from 'react'
import Score from './Score'
import Num from './Num'
import Dice from './Dice'
import { useState } from 'react'
import Reset from './Reset'

const GamePlay = () => {
  const [score, setScore]=useState(0)
  const [number, setNumber] = useState();
  const [currentDice, setCurrentDice] = useState(6)
  const [error, setError]=useState()


  const RandomValue= (min, max)=>{
  return  Math.floor(Math.random() * (max-min)+min)
}


const diceNumber = ()=>{

  if(!number){
    setError("You have not selected any number")
    return
  }
const diceValue = RandomValue(1,7)
setCurrentDice (() => diceValue)



if(number=== diceValue){
  setScore((prev)=> prev + diceValue);
}
else{
  setScore((prev)=> prev -2)
}

setNumber(undefined);

}



  return (
    <div>
    <div className=' flex justify-between'>
        <Score score={score}
        />
       <Num error={error} number = {number}
       setError = {setError}
       setNumber={setNumber}
       />
    </div>
    <Dice currentDice={currentDice}
     diceNumber={diceNumber}/>

     <Reset/>
  </div>
    
  )
}

export default GamePlay