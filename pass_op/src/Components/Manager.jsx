import React from 'react'

const Manager = () => {
  return (
   <> 
   <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-green-100 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

    <div className="  mycontainer">
        <h1 className='text-4xl font-bold text-center'>
        <span className='text-green-500'>&lt;</span>
            <span>Pass</span>
            <span className='text-green-500'>OP/&gt;</span>
        </h1>
        <p className='text-green-900 text-lg text-center font-serif'>Your own Password manager</p>

        <div className='text-white flex flex-col p-4 gap-8 items-center'>
            <input type="text" placeholder='Enter website url' className='rounded-full border border-green-500 w-full text-black px-4 py-1' />

            <div className='flex w-full gap-8 justify-between '>
                <input type="text" placeholder='Enter Username' className='rounded-full border border-green-500 w-full text-black px-4 py-1' />
                <div className='relative'>
                <input type="text" placeholder='Enter Password' className='rounded-full border border-green-500 w-full text-black px-4 py-1' />
                <span className='absolute right-0 text-black'>
                    <img className='w-7 pt-1 pr-1 mt-[2px] mr-[2px]' src="icons/eye.png" alt="" />
                </span>
                </div>
            </div>
            
            <button className='text-black flex justify-center items-center gap-1 bg-green-500 rounded-full w-fit px-4 py-2 hover:bg-green-400 border-2 border-green-800'>
                <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover">
                </lord-icon>
             Add Password</button>
        </div>
   </div>
   </>
  )
}

export default Manager