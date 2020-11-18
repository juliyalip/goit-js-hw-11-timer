const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]')
};

//new CountdownTimer ({
 // selector: '#timer-1',
 // targetDate: new Date('Jul 17, 2019'),
//});

class CountdownTimer { 
    constructor({selector, targetDate, onTick }) { 
      this.intervalId = null;
      this.targetDate = targetDate;
      this.onTick = onTick;
    }
    start() {
        this.intervalId = setInterval(() => {
            const currentTime = Date.now(); // текущая дата!!!!
            const deltaTime = this.targetDate - currentTime;
            const time = this.getTimeComponents(deltaTime);
            console.log(time);
            this.onTick(time);
        }, 1000);
    }
    getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
    pad(value) {
    return String(value).padStart(2, '0');
  }
}
const timer = new CountdownTimer({
  selector: '#timer-1', // не совсем понимаю для нужна эта штука?
  targetDate: new Date('Dec 15, 2020'),
  onTick: updateClockface,
});
function updateClockface({ days, hours, mins, secs }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}


//timer.start();

const startTimer = {
    s () {
        const swichTimer = Date.now();
        setInterval(() => {
            const currentTime = Date.now();
            const delta = currentTime - swichTimer;
        }, 1000)
    }
}

console.log(startTimer.s())