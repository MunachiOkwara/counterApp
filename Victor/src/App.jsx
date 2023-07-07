
// import './App.css'
import { useReducer, useState } from "react"

const initialState = 0;

const[count,setCount]=useState()
// count <= 0 ? null : setCount(count-1)

const reducer=(state, action) =>{
  switch (action.type){
    case'ADD':
    return state + action.payload;
    case 'SUBTRACT':
    return state - action.payload;
    default:
      return state;
  }
}

const Counter = ()=>{

   
  const [count, dispatch] =useReducer(reducer, initialState);
   const handleAdd = ()=>{
    dispatch({
      type : 'ADD',
       payload : 1
    });
   };

   const handleSubtract =()=>{
    dispatch({
      type:'SUBTRACT',
      payload:1

     });
   };
   


  return (

    


  
    
    <> 

    <h2>Count:{count}</h2>
    <button onClick={()=>handleAdd()}>Add</button>
    <button onClick={handleSubtract}>Subtract</button>
     {/* <main className='box'>
      <div className="boxholder">
      <div className="boxtop">
        <input type='text' placeholder='   username?'></input>
        <input type='text' placeholder='   What is on your mind..?'></input>
      </div>
      <div className="boxdown">
        <button>Add Text</button>
        <div className="input">
          <div className="circle"><h1>x</h1><h2>UserName</h2><hr className='head'></hr></div>
          <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque natus beatae a alias quidem ut molestias amet fugit minima! Numquam, enim earum! Saepe cum quod a, ipsum unde aut ullam?
          Fugit corrupti beatae quibusdam veniam voluptatem dolores distinctio, quasi quas assu
          
          </div>
        </div>
      </div> */}
    
     
      {/* </div>
     </main> */}
    </>
  )
}

export default Counter
