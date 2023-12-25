import React, { useState } from "react";
import "../App.css";
//import {Functianlities} from  "../component/functinalities"
//const Todo = () => {
//  const [value, setValue] = useState("");
//  const [ToDo, setTodo] = useState([]);
//  const handleSubmit = () => {
//    setTodo([...ToDo, value]);
//    setValue("");
//  };
//  const handleDelete = (index) => {
//    const updatedToDo = [...ToDo];
//    updatedToDo.splice(index, 1);
//    setTodo(updatedToDo);
//  };
//
//  return (
//    <div className="d-flex justify-content-center ">
//      <div className="smalldiv">
//        <div className="figure">
//          <figure>
//            <img
//              className="logo"
//              src="https://s3.amazonaws.com/ionic-marketplace/todo-app-theme/icon.png"
//              alt="todologo"
//            ></img>
//            <figcaption className="mt-4 font-weight-dark">
//              Add Your List Here ✌️
//            </figcaption>
//          </figure>
//        </div>
//        <div className="d-flex align-items-center">
//          <input
//            type="text"
//            value={value}
//            placeholder="✍️ Add Items ..."
//            id="inputBox"
//            className=" form-control input-lg col-xs-4"
//            onChange={(e) => {
//              setValue(e.target.value);
//            }}
//          />
//          <button
//            className="btn btn-primary add-btn w-25"
//            onClick={handleSubmit}
//          >
//            <i className="fa fa-plus add-btn" title="Add Items"></i>
//          </button>
//        </div>
//        <ul className='list-group'>
//                {ToDo.map((TodoValue, index) => (
//                  <li key={index} className='list-group-item d-flex justify-content-between align-items-center mt-3 mb-3' id="hello">
//                    {TodoValue}
//                    <button className='btn btn-danger' onClick={() => handleDelete(index)}>Delete</button>
//                  </li>
//                ))}
//              </ul>
//      </div>
//    </div>
//  );
//};
//
//export default Todo;
//


const Todo = () => {
  const [value, setValue] = useState('');
  const [ToDo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === -1) {
      setTodo([...ToDo, value]);
    } else {
      const updatedToDo = [...ToDo];
      updatedToDo[editIndex] = value;
      setTodo(updatedToDo);
      setEditIndex(-1);
    }
    setValue('');
  }

  const handleEdit = (index) => {
    setEditIndex(index);
    setValue(ToDo[index]);
  }

  const handleDelete = (index) => {
    const updatedToDo = [...ToDo];
    updatedToDo.splice(index, 1);
    setTodo(updatedToDo);
    setEditIndex(-1);
  }

  return (
    <div className="d-flex justify-content-center">
          <div className="smalldiv">
            <div className="figure">
              <figure>
               <img
                  className="logo"
                  src="https://s3.amazonaws.com/ionic-marketplace/todo-app-theme/icon.png"
                  alt="todologo"
                ></img>
                <figcaption className="mt-4 font-weight-dark">
                  Add Your List Here ✌️
                </figcaption>
              </figure>
            </div>
            <div className="d-flex align-items-center">
              <input
                type="text"
                value={value}
                placeholder="✍️ Add Items ..."
                id="inputBox"
                className=" form-control input-lg col-xs-4"
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
              <button
                className="btn btn-primary add-btn w-25"
                onClick={handleSubmit}
              >
                <i className="fa fa-plus add-btn" title="Add Items"></i>
              </button>
            </div>
              <ul className='list-group'>
                {ToDo.map((TodoValue, index) => (
                  <li key={index} className='list-group-item d-flex justify-content-between align-items-center mt-3 mb-3'>
                    {editIndex === index ? (
                      <input
                        type='text'
                        className='form-control'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    ) : (
                      <span>{TodoValue}</span>
                    )}
                    <div>
                      {editIndex === index ? (
                        <button className='btn btn-secondary mb-3 ml-4 mb-2' onClick={() => handleSubmit({ preventDefault: () => { } })}>Save</button>
                      ) : (
                        <button className='btn btn-secondary text-white mr-2' onClick={() => handleEdit(index)}>Edit</button>
                      )}
                      <button className='btn btn-dark text-white ml-3' onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        
  )
}

export default Todo;
