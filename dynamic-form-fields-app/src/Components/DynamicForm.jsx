
import React, { useState } from 'react'

function DynamicForm() {
  const [data, setData]=useState([{value:""}]);

  const handleChange=(i,e)=>{
    data[i].value=e.target.value;
    setData(data)
  }

  const handleSubmit=(e)=>{
    console.log(data.map((el)=>el.value))
  }

  const handleAddInput=()=>{
    setData([...data,{value:""}]);
  }

  const handleRemove=(ind)=>{
    const newData=data.filter((el,i)=>{
      return i!==ind;
    })
    setData(newData);
  }

  return (
    <div>
      <h1>Welcom to home page</h1>
      <br />
      {
        data.map((el,i)=>{
          return <div key={i}>
            <input type="text" placeholder='Add value' onChange={(e)=>{
              handleChange(i,e)
            }} />
            <button onClick={()=>{
              handleRemove(i)
            }}>Remove</button>
          </div>
        })
      }
      <button onClick={handleSubmit} >Submit</button>
      <button onClick={handleAddInput}>Add Input</button>
    </div>
  )
}

export default DynamicForm
