import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDelete,MdEdit } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import uuid4 from 'react-uuid';


const Manager = () => {
    const ref = useRef()
    const passwordref=useRef()
    const [form, setform] = useState({site:"",username:"",password:""})
    const [passwordarray, setpasswordarray] = useState([])

    useEffect(() => {
      let passwords=localStorage.getItem("passwords");
      
      if(passwords){
        setpasswordarray(JSON.parse(passwords))
      }
     }, [])
    

    const showPassword=() => { 
        passwordref.current.type="text"
        if(ref.current.src.includes('icons/eyecross.png')){
            passwordref.current.type="password"
            ref.current.src='icons/eye.png'
        }
        else{
            passwordref.current.type="text"
            ref.current.src='icons/eyecross.png'
        }
     }

     const savePassword=() => { 
        // console.log(form)
        setpasswordarray([...passwordarray,{...form,id:uuid4()}])
        localStorage.setItem("password",JSON.stringify([...passwordarray,{...form,id:uuid4()}]))
        setform({site:"",username:"",password:""})
        console.log([...passwordarray,{...form,id:uuid4()}])

        
      }
      const deletePassword=(id) => { 
        console.log("deleting id ")
        let c=confirm("Do you really want to delete this password?")
        if(c){

            setpasswordarray(passwordarray.filter(item=>item.id!==id))
            localStorage.setItem("password",JSON.stringify(passwordarray.filter(item=>item.id!==id)))
        }

        
      }
      const editPassword=(id) => { 
        console.log("editing id ")
        setform(passwordarray.filter(i=>i.id===id)[0])
        setpasswordarray(passwordarray.filter(item=>item.id!==id))
      }

      const Handlechange=(e) => { 
            setform({...form,[e.target.name]:e.target.value})
       }
  return (
   <> 
   <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-green-100 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

    <div className="  mycontainer">
        <h1 className='text-4xl font-bold text-center'>
        <span className='text-green-500'>&lt;</span>
            <span>Pass</span>
            <span className='text-green-500'>OP/&gt;</span>
        </h1>
        <p className='text-green-900 text-lg text-center font-serif'>Your own Password manager</p>

        <div className='text-white flex flex-col p-4 gap-8 items-center'>
            <input required type="text" placeholder='Enter website url' name='site'  value={form.site} onChange={Handlechange} className='rounded-full border border-green-500 w-full text-black px-4 py-1 hover:border-orange-300 outline-none' />

            <div className='flex w-full gap-8 justify-between '>
                <input required type="text" placeholder='Enter Username' name='username' value={form.username} onChange={Handlechange} className='rounded-full border border-green-500 w-full text-black px-4 py-1 hover:border-orange-300 outline-none '  />
                <div className='relative'>
                <input ref={passwordref} required type="password" placeholder='Enter Password' name='password' value={form.password} onChange={Handlechange} className='rounded-full border border-green-500 w-full text-black px-4 py-1 hover:border-orange-300 outline-none' />
                <span className='absolute right-0 text-black cursor-pointer' onClick={showPassword}>
                    <img ref={ref} className='w-7 pt-1 pr-1 mt-[2px] mr-[2px]' src="icons/eye.png" alt="" />
                </span>
                </div>
            </div>
            
            <button onClick={savePassword} className='text-black flex justify-center items-center gap-1 bg-green-500 rounded-full w-fit px-4 py-2 hover:bg-green-400 border-2 border-green-800'>
                <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover">
                </lord-icon>
             Save Password</button>
        </div>
        <div className="passwords">
            <h2 className='font-serif text-2xl font-bold p-3'>Your Passwords</h2>
            {passwordarray.length===0 && <div className='text-2xl font-bold'>No Passwords to show</div>}
            {passwordarray.length !=0 && <table className="table-auto w-full overflow-clip rounded-md ">
                <thead className='bg-green-700'>
                    <tr>
                    <th className='py-2'>Site</th>
                    <th className='py-2'>Username</th>
                    <th className='py-2'>Passwords</th>
                    <th className='py-2'>Actions</th>
                    </tr>
                </thead>
                <tbody className='bg-green-100'>
                    {passwordarray.map((item,index)=>{
                        return <tr key={index}>
                    <td className='text-center w-32 py-3 border border-white'><a href={item.site} target='_blank'>{item.site}</a></td>
                    <td className='text-center w-32 py-3 border border-white'>{item.username}</td>
                    <td className='text-center w-32 py-3 border border-white'>{item.password}</td>
                    <td className='text-center w-32 py-3 border border-white '>
                        <div className='flex justify-center items-center gap-4'>
                                <span className='cursor-pointer'><RiEdit2Fill size={25} onClick={()=>editPassword(item.id)}  /></span>
                            <span className='cursor-pointer'><lord-icon
                            src="https://cdn.lordicon.com/wpyrrmcq.json"
                                 trigger="hover" onClick={()=>deletePassword(item.id)}
    >
                        </lord-icon></span>
                        </div>
                    
                    </td>
                    </tr>
                    })}
                   
                </tbody>
            </table>
            }
        </div>
   </div>
   </>
  )
}

export default Manager