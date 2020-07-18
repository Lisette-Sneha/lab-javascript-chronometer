class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() => this.currentTime++, 1000);
  }
  getMinutes() {
    this.currentTime = Math.floor(this.currentTime/60)
    return this.currentTime
  }
  getSeconds() {
   const seconds = this.currentTime - this.getMinutes () * 60
    return seconds    
  }
  twoDigitsNumber() {
   if (this.getMinutes()< 10) {
     return "0" + this.getMinutes()
   }
   if (this.getSeconds() < 10) {
     return "0" + this.getSeconds()
   }
  }
  stopClick() {
    clearInterval (this.intervalId)
  }
  resetClick() {
    return this.currentTime = 0
  }
  splitClick() {
    return '00:00'
    
  }
}
