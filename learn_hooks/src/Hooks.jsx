import React, { useState } from 'react';

// topic one----------------------------->
// in this example we are leaning how to use useState so that we can change the state of the component.
/*
const Hooks = () => {
  const [myName,setMyName] = useState('This is Shahid Ansari');
  const changeName = () =>{
    setMyName('Thanks to come in this page');
  }
  
  return (
    <div>
    <h2>Learning React Hooks</h2>
    <div>{myName}</div>
    <button onClick={changeName}> Click me! </button>
    </div>
    );
  };
export default Hooks;
*/


// topic two----------------------------->
// now we are learning how to toggle the useState.
/* 
const Hooks = () => {
  const [myName,setMyName] = useState('This is Shahid Ansari');
  const changeName = () =>{
    
    // for that i'm going to use if else...
    // if(myName === 'This is Shahid Ansari'){
    //   setMyName('Thanks to come in this page');
    // }
    // else{
    //   setMyName('This is Shahid Ansari');
    // }
    
    // same i can get from ternary operation...
    (myName === 'This is Shahid Ansari') ? setMyName('Thanks to come in this page') : setMyName('This is Shahid Ansari');
  }

  return (
    <div>
      <h2>Learning React Hooks</h2>
      <div>{myName}</div>
      <button onClick={changeName}> Click me! </button>
    </div>
  );
};
export default Hooks;
*/



// topic three----------------------------->
// now we are going to discuss the four different rules of using hooks;
// Always write it inside the component or function;
// Component name must be PascalCase;
// must import react hook or can directly write like React.hookName;
// dont call hooks inside the loop, conditions or nested function.



// topic four----------------------------->
// now we are going to discuss how to use array in useState;
const Hooks = () => {
  const myData = [
    {
      id: 0,
      name: 'foo',
      age: 36
    },
    {
      id: 1,
      name: 'faa',
      age: 38
    },
    {
      id: 2,
      name: 'fau',
      age: 37
    }
  ];
  console.log(myData)

  const [array,setArray] = useState(myData);
  const clearArrays = () => {
    setArray([])
  }

  return(
    <>
    {array.map((e) => <h1 key={e.id}>name:{e.name} age:{e.age}</h1>)}
    <button onClick={clearArrays}>Clear</button>
    </>
  )
};

export default Hooks;

