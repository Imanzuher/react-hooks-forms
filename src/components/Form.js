import React from "react";

function Form({ firstName, lastName, handleFirstName, handleLastName }) {
  return (
    <div>
      <form>
        <input type="text" onChange={handleFirstName} value={firstName} />
        <input type="text" onChange={handleLastName} value={lastName} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
