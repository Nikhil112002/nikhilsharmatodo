import React from "react";


function Todolist(props) {
  
  
  return (
    <>
        
      <div className="todo_style">
        <button className="btn2"  
        onClick = {()=>{
            props.onSelect(props.id);
        }}><i className="fa fa-times"></i></button>
        <li key={props.index}> {props.text} </li>
      </div>
    </>
  );
}
  
export default Todolist;
