import React from 'react';
import { useTimer } from 'react-timer-hook';

export function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  

  // const x = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  // console.log('hours')
  // x.hours = 7
  // console.log(x)
 

  return (
    <div style={{textAlign: 'center', backgroundColor: 'red', marginBottom: 65}}>
      <h1 >O Tempo está acabando! </h1>

      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Contando' : 'Não contando'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button>
    </div>
  );
}