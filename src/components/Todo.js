import React, { useState } from 'react';

function Todo(){

const [name, setName] =  useState("");
const [item, setItem] =  useState([]);
const [itemdelete , setItemdelete] = useState([]);


const handleClick = () =>{

    setItem((oldItems)=>{
        return [...oldItems, name]
    })
    setName("")

    console.log(item)
} 


const DeleteClick =() =>{
    setItemdelete(item.pop());
}


    return(
        <div>
            <input type ="text"
            onChange={(e)=>setName(e.target.value)}
            value={name}
            />
            <button onClick={handleClick}>+</button>    
            <button onClick={DeleteClick}>-</button>    
            <ol>
                  {
                      item.map((itemvalue)=>{
                          return(
                              <li>{itemvalue}</li>
                          )
                      })
                  }
            </ol>
        </div>
    )
}

export default Todo;