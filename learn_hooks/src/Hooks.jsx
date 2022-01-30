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
/*
const Hooks = () => {
  //first take an array
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
  // console.log(myData)

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
*/


// topic five ---------------------------------------------------------------->
// how to use spread operator to change update a sigle information.
/*
const Hooks = () => {
  const aboutMe = {
    name: 'Shahid',
    age: 36
  }
  const[about,setAbout] = useState(aboutMe);
  
  const changeName = () => {
    setAbout({...about, name:'Ansari'})
  }

  return(
    <div>
      <h1>Name: {about.name} and Age:{about.age}</h1>
      <button onClick={changeName}>Change</button>
    </div>
  ) 
};
export default Hooks;
*/


// topic six ------------------------->
// in this we are going to make a delete button same as todo delete button in
/*
const Hooks = () => {
  const array = [
    {id:0, name:'foo', age:36},
    {id:1, name:'fee', age:38},
    {id:2, name:'fau', age:40}
  ];
  const [newArray,setNewArray] = useState(array)
  const clearArray = () => {
    setNewArray([])
  }
  const deleteItem = (id) =>{
    const myNewArray = newArray.filter((e) =>{
      return e.id !== id;
    })
    setNewArray(myNewArray);
  }
  // in this an important thing to remember that if we use an onclick inside it if we pass prop so before it is called
  // we have to use a fat arrow. Because react act like as a function if we pass parenthesis.
  return(
    <>
      {newArray.map((e)=> <h1 key={e.id}>name : {e.name} age: {e.age} <button onClick={ () => deleteItem(e.id)}>delete</button></h1>)}
      <button onClick={clearArray}>Clear Array</button>
    </>
  );
};
export default Hooks;
*/



/*
// topic seven----------------------------->
// In this we are going to look Short Circuit Evaluation.
// we can use || or && 
const Hooks = () => {
  return(
    <div>
     <h1>{'Shahid' || 'Ansari'}</h1> 
     <h1>{'' || 'Ansari'}</h1> 
     <h1>{'Shahid' && 'Ansari'}</h1> 
     <h1>{'' && 'Ansari'}</h1> 
    </div>
  )
};
// in line 169 we are using as true or true so if first we get true then we show shahid
// in line 170 we are using as false or true so if first we get true then we show Ansari
// Now we are going to make and short circuit in line no. 173 and 174.
// this one is same as && operator
// we can do more with this short circuit.
export default Hooks;
*/


// topic eight----------------------------->
// In this we are going to see how basic form workspace
/* 
const Hooks = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [entry, setEntry] = useState([]);
  
  const submitForm =(e) => {
    e.preventDefault();    
    if(email && password){
      const newEntry = {id: new Date().getTime().toString(), email, password};
      // console.log(newEntry.id);
      setEntry([...entry ,newEntry]);
      setEmail("");
      setPassword("");
    }
    else{
      alert("Please enter all inputs!")
    }
  }

  return (
    <> 
    <form action="" onSubmit={submitForm}>
      <hr />
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}></input>
      </div>
      <button type="submit">Submit</button>
    </form>
    
    <div>
      {entry.map((e) => {
        const {id, email,password} =e;
        return (
          <div key={id}>
          <p>{email}</p>
          <p>{password}</p>
        </div>
        )
      })}
    </div>
    </>
  )
};
export default Hooks;
*/



