import React, { useState } from 'react'

 const Page = () => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [mainTask, setMainTask] = useState([])

    const submitHanler = (e) =>
    {
        e.preventDefault()
        setMainTask ([...mainTask , {title , desc}])
        // console.log(title)
        // console.log(desc)
        console.log(mainTask)
        setdesc("")
        settitle("")
        
    }
    let renderTask = <h5>No task available</h5>;
    if(renderTask.length>0)
    {
    renderTask = mainTask.map((task, index) => {
        return (
            <li key={index}>
                <div className='tasks'>
                    <h5>{task.title}</h5>
                    <h6>{task.desc}</h6>
                </div>
            </li>
        );
    });
}
  return (
    <>
   <h1>This is My to do list</h1>
   <form onSubmit={submitHanler}>
    <input type='text' placeholder='please enter title' value={title} onChange={(e)=>{
        settitle(e.target.value)
    }}>
    </input>   
    <input type='text' placeholder='please enter description' value={desc} onChange={(e)=>{
        setdesc(e.target.value)}}>
    </input>
  

   <button>Add task</button>
   </form>
   <hr />
   <div>
    <h2>Tasks list</h2>
    <ul>{renderTask}</ul>
   </div>
   </>
   
  )
}
export default Page;