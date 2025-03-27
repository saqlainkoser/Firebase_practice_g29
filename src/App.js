import logo from './logo.svg';
import './App.css';
import {getDatabase, ref ,set} from "firebase/database"
import app from "./firebase"
import Signup from './Signup';
import Signin from './Signin';

import { useContext } from 'react';
import {CounterContext1} from "./context/CounterContext1"
import Counter1 from './components/Counter1';

function App() {
  const db = getDatabase(app);
  const data= useContext(CounterContext1);
  console.log(data);
  
  const putData= () =>{
    set(ref(db,'user/shaan'),{
      name:"Shaan Ansari",
      age:20,
      email:"shaan@gmai.com"
    })
  }
  return (
    <>
      <Counter1/>
      <Signup/>
      <Signin/>
    </>
  );
}

export default App;
