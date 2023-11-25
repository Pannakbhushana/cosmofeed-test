import React, { useState } from 'react';

const DynamicForm = () => {
  const [data, setData] = useState([{ value: "" }]);

  const handleAddInput = () => {
    setData([...data, { value: "" }]);
  };

  const handleRemoveInput = (ind) => {
    const newData = [...data];
    newData.splice(ind, 1);
    setData(newData);
  };

  const handleChange = (ind, event) => {
    const newData = [...data];
    newData[ind].value = event.target.value;
    setData(newData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log( data.map((field) => field.value));
  };

  return (
    <div style={{
                    marginTop:"10%",
                    boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    width:"30%",marginLeft:"35%",
                    padding:"50px",
                    borderRadius:"5%"
                    }}>

            <h1>Dynamic Form Fields</h1>

        <form onSubmit={handleSubmit}>
      {data.map((el, i) => (
        <div key={i}>
          <input
            type="text"
            placeholder="Enter a value"
            value={el.value}
            onChange={(e) => handleChange(i, e)}
          />
          <button type="button" onClick={() => handleRemoveInput(i)}>
            Remove
          </button>
          <br />
          <br />
        </div>
        
      ))}
      <button type="button" onClick={handleAddInput}>
        Add Input
      </button>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default DynamicForm;