import React, { useState } from 'react';

const DynamicForm = () => {
  const [data, setData] = useState([{ value: '' }]);

  const handleAddField = () => {
    setData([...data, { value: '' }]);
  };

  const handleRemoveField = (ind) => {
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
      {data.map((field, ind) => (
        <div key={ind}>
          <input
            type="text"
            placeholder="Enter a value"
            value={field.value}
            onChange={(e) => handleChange(ind, e)}
          />
          <button type="button" onClick={() => handleRemoveField(ind)}>
            Remove
          </button>
          <br />
          <br />
        </div>
        
      ))}
      <button type="button" onClick={handleAddField}>
        Add Field
      </button>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default DynamicForm;