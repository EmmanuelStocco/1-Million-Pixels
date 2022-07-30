import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useTimer } from 'react-timer-hook';

export function MyTimer({ expiryTimestamp }) {
  let allUseTime = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [day, setDay] = useState(0);

  useEffect(() => {
    allUseTime.seconds = second;
    allUseTime.minutes = minute;
    allUseTime.hours = hour;
    allUseTime.days = day;

    console.log(allUseTime);
  }, [second, minute, hour, day])

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    setSecond(data.date_seconds)
    setMinute(data.date_mins)
    setHour(data.date_hours)
    setDay(data.date_days)

    alert('enviando data')

  };

  return (
    <>
      <div style={{ textAlign: 'center', backgroundColor: 'red', marginBottom: 65, width: 800, height: 200 }}>
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
          <span>{allUseTime.days}</span>:<span>{allUseTime.hours}</span>:<span>{allUseTime.minutes}</span>:<span>{allUseTime.seconds}</span>
        </div>
        <p>{allUseTime.isRunning ? 'Contando' : 'Não contando'}</p>
        <button onClick={allUseTime.start}>Start</button>
        <button onClick={allUseTime.pause}>Pause</button>
        <button onClick={allUseTime.resume}>Resume</button>
        <button onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          allUseTime.restart(time)
        }}>Restart</button>
      </div>
    </>

  );
}