import React,{useState} from 'react';
import WordCard from './WordCard';
import './App.css';
import CountdownTimer from './Components/CountdownTimer/CountdownTimer';
import Form from './Form'
function App() {
  const [view, setView] = useState("เริ่มนับเวลา")


  return (
    <div className='container'>
      <div className='box'>
        <div className='time-button' onClick={() =>{
          setView("gibj,0y[g;]kvbvb")
        }}>
          {view}
        </div>
        
        {
          <WordCard value="hello"/>
        }
        <div className='box-time'>
          {
            <CountdownTimer countdownTimestampMs={1643673600000}/>
          }
          {/* {
            <Form/>
          } */}

        </div>
      </div>
    </div>
  );
}
export default App;