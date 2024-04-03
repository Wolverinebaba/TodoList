import React,  {useState} from 'react'


function Landingpage() {
    const [task, settask] = useState("");
    const [discrip, setdiscrip] = useState("");
    const [maintask,setmaintask] = useState([])
    const submitHandler=(e)=>{
      e.preventDefault()
      setmaintask([...maintask,{task,discrip}])
      setdiscrip("")
      settask("")
      console.log(maintask)
  
      
    }
    const deleteHandler= (i)=>{
      let copytask=[...maintask]
      copytask.splice(i,1)
      setmaintask(copytask)
    }
    let rendartask=<h2>No task availble</h2>
    rendartask=maintask.map((t,i)=>{
      return <li key={i}
      className='   items-center justify-between mb-10 gap-3 '
      >
        <div className='flex justify-between items-center w-2/4'>
        <h5 className=' text-2xl font-semibold'>{t.task}</h5>
        <h6 className=' text-lg font-medium'>{t.discrip}</h6>
        <button onClick={()=>{
          deleteHandler(i)
        }}
        className='bg-green-700 p-2 text-white rounded-md font-bold'
        >Delete</button>
      </div>
      </li>
    })
  return (
    <>
        <div className='bg-zinc-900  w-full h-screen'>
          <form  onSubmit={submitHandler} className=''>
            <div className=' '>
            <input
               type="text" 
               className='text-2xl  border-zinc-800 border-10 m-5 px-4 py-2 '
               placeholder='Enter Task Here'
               value={task}
               onChange={(e)=>{
               settask(e.target.value)
               }}/>
            <input
              type="text" 
              className='text-2xl border-zinc-800 border-10 m-5 px-4 py-2'
              placeholder='Enter Discription Here' 
              value={discrip}
              onChange={(e)=>{
              setdiscrip(e.target.value)
              }}/>
             <button className='rounded bg-green-700 p-2 text-center border-2 font-bold text-white'>Add Task</button>
             </div>
         </form>
            <hr className='bg-black'/>
         <div className='p-8 bg-slate-300'>{rendartask}</div>
       </div>

    
    </>
  )
}

export default Landingpage