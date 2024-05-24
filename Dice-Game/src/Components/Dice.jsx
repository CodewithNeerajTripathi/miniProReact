import React from 'react'


const Dice = ({currentDice, diceNumber}) => {
 

 
 
  
  return (
    <div className=' mt-10 '>
        <div className=' cursor-pointer flex justify-center items-center'
        onClick={()=>diceNumber()}>
          <img  src={`src/Image/DiceImage/dice_${currentDice}.png`} alt="pic Not availble" />
        </div>
        <p className='flex justify-center items-center font-medium text-2xl mt-4 '>Click on Dice to roll</p>
    </div>
  )
}

export default Dice