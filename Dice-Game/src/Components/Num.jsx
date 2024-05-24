import React from 'react'

const Num = ({ setError, error,number , setNumber}) => {
    const Arr = [1,2,3,4,5,6];

    const newfunction =(value)=>{
      setNumber(value);
      setError(" ");
    }
     
     
  return (
    
   
    <div>
      < p className=' text-red-500 text-lg '>{error}</p>
    <div className=' flex mt-10 mr-10 gap-7'>
    
        {
            Arr.map((value, i) =>
                (<div key={i}
                    onClick={() => newfunction(value)}
                    
                      className= {`${ value===number ? "bg-black": "bg-white"} ${ value===number ? "text-white": " text-black"}    w-[72px] h-[72px] border-2 border-black flex items-center justify-center text-3xl font-medium  `}> {value}</div>
            )) 
        
            }

           
            
       
    </div>
     <h1  className=' float-right text-2xl font-bold mr-10 mt-6'> Select Number</h1>
    </div>
    
  )
}

export default Num