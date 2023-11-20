document.addEventListener('DOMContentLoaded', function() {
    let startTime = localStorage.getItem('startTime');
    if (!startTime) {
      startTime = new Date().getTime();
      localStorage.setItem('startTime', startTime);
    }
    let timerId = null;
  
    function countdownTimer() {
      const currentTime = new Date();
      const elapsedTime = currentTime - startTime;
  
      let remainingTime = (60 * 60 * 1000) - elapsedTime;
  
      if (remainingTime <= 0) {
        localStorage.removeItem('startTime');
        startTime = new Date().getTime();
        localStorage.setItem('startTime', startTime);
        remainingTime = 60 * 60 * 1000;
        timerId = setInterval(countdownTimer, 1000);
        return;
      }
  
      const hours = Math.floor(remainingTime / 1000 / 60 / 60);
      const minutes = Math.floor(remainingTime / 1000 / 60) % 60;
      const seconds = Math.floor(remainingTime / 1000) % 60;
  
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    }
  
    const $hours = document.getElementById('timer-hours');
    const $minutes = document.getElementById('timer-minutes');
    const $seconds = document.getElementById('timer-seconds');
  
    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);
  });
  