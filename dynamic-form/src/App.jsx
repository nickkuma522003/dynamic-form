import React, { useState } from "react";
import "./App.css";

function App() {
  const [fields, setFields] = useState([{ value: "" }]); // Initialize state for dynamic fields

  // Handle change in input fields
  const handleChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].value = event.target.value;
    setFields(newFields);
  };

  // Add a new field
  const addField = () => {
    setFields([...fields, { value: "" }]);
  };

  // Remove a field
  const removeField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted:", fields);
    alert("Form submitted successfully!");
  };

  return (
    <div className="App">
      <h1>Dynamic Form</h1>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} className="field-container">
            <input
              type="text"
              value={field.value}
              onChange={(e) => handleChange(index, e)}
              placeholder={`Field ${index + 1}`}
            />
            <button type="button" onClick={() => removeField(index)}>
              Remove Field
            </button>
          </div>
        ))}
        <button type="button" onClick={addField}>
          Add Field
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
