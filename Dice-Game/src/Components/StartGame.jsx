import React from 'react'

const StartGame = ({toggle}) => {
  return (
    <div className='flex justify-center items-center mt-20'>
        <div>
            <img src="src/Image/dices 1.png" alt="" />
        </div>
        <div className=' ml-10 mt-22  text-right '>
            <h1 className=' text-8xl font-bold'>Dice Game</h1>
            <button onClick={toggle} className=' mr-5 bg-black text-lg text-white w-[180px]  mt-8'>Play Now</button>
        </div>
    </div>
  )
}

export default StartGame