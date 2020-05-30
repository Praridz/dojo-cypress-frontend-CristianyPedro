import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
 
  const [inputValue,setInputValue] = useState("")
  const [message,setMessage] = useState("")
  const handleChange = (event)=> {
    const {value} = event.target
    setInputValue(value);
  }
  const handleSubmit = async(event)=> {
    event.preventDefault()
    const secret = '1234';
    try {
      const {data} = await axios.get(`http://localhost:4000/codebreaker?value=${inputValue}&secret=${secret}`)
      setMessage(data.result)
      
    } catch (error) {
      
    }   
  
  }


  return (
    <div className="App">
      <form id = 'numberForm' onSubmit={handleSubmit}>
        <input id = 'number' type ='text' value ={inputValue} onChange={handleChange}/>
        <button type = 'submit'>  SUBMIT  </button>
        

        </form>
        
          <p id ='message'>{message}</p>
  

    </div>
  );







}

export default App;
