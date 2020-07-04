import React, {useState,  useRef} from 'react';
import Start from './img/start'
import Stop from './img/stop'
import Reset from './img/reset'
import './App.scss';

function App() {
  const timer = useRef()
  const [count, setCount] = useState(0)
  const [stop, setStop] = useState(true)

  const handleStopClick = () => {
      if(stop){
        timer.current = setInterval(() => {
          setCount(count => (count + 0.1))
        }, 100)
        setStop(false)
      } else {
        clearInterval(timer.current)
        setStop(true)
      }
  }
  const handleResetClick = () => {
    timer.current && clearInterval(timer.current)
    setCount(0)
    setStop(true)
  }
  return (
    <div className="App">
        <div className="countDown">
           <div className="count">
              {count.toFixed(1)}
           </div>
           <div className="stop" onClick={handleStopClick}>
             {stop ? <Start /> : <Stop />}
           </div>
           <div className="reset" onClick={handleResetClick}>
             <Reset />
           </div>
        </div>
    </div>
  );
}

export default App;
