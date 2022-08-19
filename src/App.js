import React,{useState} from 'react';
import WordCard from './WordCard';
import './App.css';
function App() {
  const [view, setView] = useState("เริ่มนับเวลา")


  return (
    <div className='container'>
      <div className='box'>
        <div className='time-button' onClick={() =>{
          setView("เริ่มนับเวลา")
        }}>
          {view}
        </div>
        {
          <WordCard value="hello"/>
        }
        
      </div>
    </div>
  );
}
export default App;