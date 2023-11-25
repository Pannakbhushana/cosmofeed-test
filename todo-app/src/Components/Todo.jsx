import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Todo() {
    const [val, setVal]=useState("");
    const [data, setData]=useState([]);

    useEffect(()=>{
        const storedData=JSON.parse(localStorage.getItem("todo")) ||[];
        setData(storedData);
    },[])

    const handleChange=(e)=>{
        setVal(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(val!==""){
            const newData = [...data, val];
            setData(newData);   
            localStorage.setItem('todo', JSON.stringify(newData));
        }
        
    }

  return (
    <div>
      <div>
        <input type="text" placeholder='Add Task' onChange={handleChange} />
        <button onClick={handleSubmit}>Add Task</button>
      </div>


      {
        data.length ? data.map((el,i)=>{return <h3 key={i}>{el}</h3>}):<h3>No task Added</h3>
      }
    </div>
  )
}

export default Todo
