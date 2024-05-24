import React from 'react'

const Score = ({score}) => {
  return (
    <div className=' ml-28 mt-20 '>
        <h1 className=' font-bold text-8xl'>{score}</h1>
        <p className=' text-2xl font-medium'>Total Score</p>
    </div>
  )
}

export default Score