function updateCountdown() {
    // Current date
    const now = new Date();
  
    // Ramadan start date (Example: April 1, 2024)
    const ramadanStart = new Date(now.getFullYear(), 2, 12); // Months are 0-indexed, so April is 3
  
    // Check if Ramadan has already started
    if (now >= ramadanStart) {
      document.getElementById('days').innerText = 'Ramadan has begun!';
      document.getElementById('hours').innerText = '';
      document.getElementById('minutes').innerText = '';
      document.getElementById('seconds').innerText = '';
      return;
    }
  
    // Calculate time difference
    const difference = ramadanStart - now;
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    document.getElementById('days').innerText = days < 10 ? `0${days}` : days;
    document.getElementById('hours').innerText = hours < 10 ? `0${hours}` : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? `0${seconds}` : seconds;
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
  