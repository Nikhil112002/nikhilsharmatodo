
import "./App.css";
import { useState } from "react";
import Todolist from "./Todolist";

function App() {
  const [fullName, setFullName] = useState("");
  const [list, setlist] = useState([]); 

  function myfun(event){
    setFullName(event.target.value);
  }

  function itemList(){
    setlist((old)=>{
      return [...old,fullName];
    })
    setFullName("")

  }
const deleteItems = (id) =>{
  console.log("del")

  setlist((old)=>{
    return old.filter((arrElem,index)=>{
      return index !== id;
    });
  });
};


  // function del(id){
  //   console.log('delete')

  // setlist((old) => {
  //   return old.filter((arrElem,index)=>{
  //     return  index !== id;
  //   });
  // })}
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br></br>
          <h1>To Do List</h1>
          <br></br>
          <input name="" onChange= {myfun} value={fullName} placeholder="Add Items"></input>
          <button className="btn" onClick={itemList}>+</button>
          <ol>
          {list.map((itemval,index) =>{
           return <Todolist 
           key={index} 
           text={itemval}
           id={index}
           onSelect={deleteItems}></Todolist> 
          })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
