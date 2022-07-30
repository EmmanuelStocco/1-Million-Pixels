import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
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

  const [time, setTime] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log('handle submit', data);
    //setTime(data)
  }

  return (
    <>

    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h6>
            Indique o tempo para finalizar a promoção:
          </h6>
        </div>
        <div>
          <input type='number' name='date_seconds' placeholder='segundos finais' />

          <input type='number' name='date_mins' placeholder='minutos finais' />

          <input type='number' name='date_hours' placeholder='horas finais' />

          <input type='number' name='date_days' placeholder='dias finais' />

          <button type='submit'>Enviar</button>
        </div>
      </form>
    </div>

      <div style={{ textAlign: 'center', backgroundColor: 'blue', marginBottom: 65, width: 800, height: 300 }}>



        <p id="log"></p>

        <div style={{ fontSize: '100px' }}>
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
    </>

  );
}