import React, { useState} from "react";

const Form = (props) => {

    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("")
    }

    function handleChange(e) {
        setName(e.target.value);
    }

    return(
      <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="labe_lg">
            What needs to be done?
          </label>
        </h2>
        <div className="container">
            <input
            type="text"
            id="new-todo-input"
            className="input input_lg"
            name="text"
            autoComplete="off"
            value={name}
            onChange={handleChange}
            />
            <button type="submit" className="btn btn_primary btn_lg btnHeight">
            Add
            </button>
        </div>
      </form>  
    )
}

export default Form