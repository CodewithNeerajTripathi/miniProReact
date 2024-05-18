import React from 'react'

function Navigation() {
  return (
 <nav className=' flex ml-40  h-16 w-[80%] '>
    <div >
        <img className='mt-4 h-15' src="src/Images/logo.png" alt="" />
        
    </div>
    <ul className=' flex ml-auto gap-8 mt-4 font-medium text-xl mr-4  '>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
    </ul>

   
 </nav>
  )
}

export default Navigation