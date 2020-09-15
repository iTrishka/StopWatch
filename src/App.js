import React, { useState } from 'react';
import Display from './components/Display.js';
import DisplayBtn from './components/DisplayBtn.js';
import './App.css';

function App() {

  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };
  
  let updateMs = time.ms, updateS = time.s, updateM = time.m, updateH = time.h;

  const run = () => {
    if(updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if(updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if(updateMs === 100) {
      updateS++;
      updateMs = 0;
    }
    updateMs++;
    return setTime({ms:updateMs, s:updateS, m:updateM, h:updateH})
  }

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  }

  const reset = () => {
    clearInterval(interv);
    setTime({ms:0, s:0, m:0, h:0})
    setStatus(0);
  }

  const resum = () => {
    setTime({ms:updateMs, s:updateS, m:updateM, h:updateH});
    start();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Секундомер </h1>
        <Display time={time}/>
        <DisplayBtn status = {status} start={start} stop={stop} reset={reset} resum={resum} />        
      </header>
    </div>
  );
}

export default App;
