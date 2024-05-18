import React from 'react'
import { MdOutlineChat } from "react-icons/md";
import { IoCall } from "react-icons/io5";


function Home() {
  return (
    <div className=' ml-48 mt-16'>
        <div className=''>
            <h1 className=' font-bold        text-5xl'>CONTACT US</h1>
            <p className=' pr-56 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt cum asperiores at fugit eligendi pariatur obcaecati debitis nostrum, ad totam omnis. Ratione, nobis culpa? Asperiores vel fugit dolores quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vitae iste nisi.</p>  

        </div>
        <div className='   flex w-[40%]'>
         <div className=' mt-20 '>
            <div className='flex'>
                <button className='flex justify-center items-center text-lg gap-2  w-[200px] h-10 bg-black text-white'> <MdOutlineChat /> VIA SUPPORT CHAT</button>

                <button className=' flex justify-center items-center gap-2 text-lg  w-36 h-10 ml-12 bg-black text-white'> <IoCall />
                    VIA CALL</button>
             </div>
             <div className=' flex flex-col w-[400px] '> 
             <button className=' flex justify-center items-center text-lg gap-2 h-10 mt-8 border-2 border-black  w-[400px]'> <MdOutlineChat /> VIA EMAIL FORM</button>
             <label className=' mt-3' htmlFor="Name">Name</label>
             <input className=' h-8 border-black border-2' type="text" placeholder='enter your name' />

             <label className=' mt-3' htmlFor="E-Mail">E-Mail</label>
             <input className=' h-8 border-black border-2' type="text" placeholder='Enter your E-Mail' />

             <label className=' mt-3' htmlFor="Text">Text</label>
             <input className=' h-32 border-black border-2' type="text"   />
              <button className=' h-10 w-28 justify-center items-center text-lg  flex ml-auto bg-black text-white mt-6'>SUBMIT
             </button>

             </div>
            

         </div>
         <img className=' ml-28 ' src="src/Images/Service 24_7-pana 1.svg" alt="" />
      </div>
    </div>
  )
}

export default Home