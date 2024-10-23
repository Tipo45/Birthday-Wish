import { useEffect, useRef, useState } from "react";
import "../src/Countdown.css";
import CakeIcon from '@mui/icons-material/Cake';

const Countdown = () => {

    const [timerDays, setTimerDays] = useState('00');
    const [timerhours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date('October 29, 2024 00:00:00').getTime();

        interval - setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000)
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    })

  return (
  <>
  <section className="timer-container">
    <section className="timer">
        <div>
            <span><CakeIcon className="timer-icon" /></span>
            <h2>Countdown Timer</h2>
            <p>Countdown to a really special day my love</p>
        </div>
        <div>
            <section>
                <p>{timerDays}</p>
                <p><small>days</small></p>
            </section>
            <span>:</span>

            <section>
                <p>{timerhours}</p>
                <p><small>hours</small></p>
            </section>
            <span>:</span>

            <section>
                <p>{timerMinutes}</p>
                <p><small>minutes</small></p>
            </section>
            <span>:</span>

            <section>
                <p>{timerSeconds}</p>
                <p><small>seconds</small></p>
            </section>
        </div>
    </section>
  </section>
  </>
  );
};

export default Countdown;
