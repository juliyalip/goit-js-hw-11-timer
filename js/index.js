const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]')
 
};

const CountdownTimer = function({selector, targetDate}) {
  this.selector = selector;
  this.targetDate = targetDate;
};

const timer = {
  start() {
    const startTime = new CountdownTimer({
      selector: '#timer-1',
      targetDate: new Date('Jan 01, 2021'),
    });
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime.targetDate - currentTime;
      const { days, hours, mins, secs } = getTimeComponents(deltaTime);
      console.log(`${days}:${hours}:${mins}:${secs}`);

    }, 1000);
  },
}

timer.start();

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
}
