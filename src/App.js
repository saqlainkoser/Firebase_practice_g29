import logo from './logo.svg';
import './App.css';
import {getDatabase, ref ,set} from "firebase/database"
import app from "./firebase"
import Signup from './Signup';
import Signin from './Signin';
const db = getDatabase(app);


function App() {
  const putData= () =>{
    set(ref(db,'user/shaan'),{
      name:"Shaan Ansari",
      age:20,
      email:"shaan@gmai.com"
    })
  }
  return (
    <>
      <Signup/>
    </>
  );
}

export default App;
