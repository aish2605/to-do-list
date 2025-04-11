import React from 'react'
import './App.css'
import { useState } from 'react'

function App() {

    const[task, setTask] = useState([])
    const[completed, setCompleted] = useState([])
    const[text, setText] = useState()
    const[cb, setCb] = useState(false)
  
    const deleteTask = (place) =>{
        task.splice(place,1)
        setTask([...task])
    }
  
    const completeTheTask = (place) =>{
  
      setTimeout(()=>{
        let t = task.splice(place,1)
        setCompleted([...completed,t])
        setCb(false)
        setTask([...task])
      },500)
  
  }
  

  return (
    <>
    
    <div className="container">
    <div className='box'>
        <div>
           <h3 id="heading">To Do List ✅..</h3>
        </div>
   

    <div className="child1">
        <input type="text"
          id="input"
          placeholder='your task ...'
          value={text} onChange={(event)=>{setText(event.target.value)}}
          />

          <button id="btn" onClick={()=>{
            let t = text.trim()
            if(t==''){
              alert("Cant't add empty task")
            }
            else{
              setTask([...task,t])
            }
            
           
             setText('')}}>Add</button>

    </div>
    <div className="child2">
        <div className='ongoing'>
            <h2>Ongoing task</h2>
        
            {task.map((item,index)=><div className='rendered-tasks'>

             <input  
             style={{height:'20px',width:'20px'}}
             type='checkbox'
            
             checked={cb}
             onChange={()=>{completeTheTask(index)}}
            
             />

            <li  key={index}>{item}</li>
            <img src="/editt.png" 
                    onClick={()=>{
                      let upated_value = prompt("Previously: "+task[index])
                      task.splice(index,1,upated_value)
                      setTask([...task])
                    }}
                    />
           <img id={index} src="./delete.png" width="50" onClick={()=>{deleteTask(index)}}/>

              </div>)}
             </div>
   
             


        
        <div className='completed'>
                  <h2>Completed Task</h2>
                  {completed.map((item,index)=><li key={index}>{item}</li>)}
              </div>
            
        </div>
        </div>
        </div>
        </>
    )
  }
  
  export default App
 