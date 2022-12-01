class AlarmClock {
  constructor() {
    this.timerId = null;
    this.alarmCollection = [];
  }
  addClock(time, callback, id) {
    if (id === undefined) {
      throw new Error('Параметр ID не передан');
    } else if (this.alarmCollection.some(el => el.id === id)){
      return console.error('Звонок с таким ID уже существует');
    }
    return this.alarmCollection.push({time, callback, id});
  }
  removeClock(id) {
    const lenBefore = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(el => el.id !== id);
    return this.alarmCollection.length !== lenBefore;
  }
  getCurrentFormattedTime(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let nowTime = `${hour}:${minute}`

    return nowTime;
  }
  start() {
    const checkClock = alarmCollection => {
      if (this.alarmCollection == this.getCurrentFormattedTime()) {
        this.alarmCollection.callback();
      } 
    }
    if (this.timerId === null) {
      this.timerId = setInterval(() => this.alarmCollection.forEach(checkClock),1000);
    }
  }
  stop(){
    if (this.timerId !== undefined) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
  printAlarms(){
    this.alarmCollection.forEach((el) => {
      console.log(`${el.id}:${el.time}`);
    })
  }
  clearAlarms(){
    this.stop();
    this.alarmCollection = [];
  }
}

function testCase(){
  let newAlarmClock = new AlarmClock();
  newAlarmClock.addClock("10:00", () => console.log('Пора действовать!'), 1);
  newAlarmClock.addClock("10:01", () => {console.log('Время не ждет!'); newAlarmClock.removeClock(2)}, 2);
  newAlarmClock.addClock("10:01", () => {console.log('Торопись!'); newAlarmClock.clearAlarms(); newAlarmClock.printAlarms()}, 3);
  newAlarmClock.printAlarms();
  newAlarmClock.start();
}