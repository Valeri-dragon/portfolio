const timer = () => {
  
  const deadline = "31 march 2022";
  let interval;
  const countdownTimer = () => {
    const blockTimer = document.querySelector(".timer__time");
       const date = new Date().getTime(); 
    const dateDeadline = new Date(deadline).getTime(); 
        const timeRemaining = (dateDeadline - date) / 1000;
    
    const hours = timeRemaining / 60 / 60;
   
    const roundHours = Math.floor(hours);
  
    const minutes = Math.floor((timeRemaining / 60) % 60);
   
    const seconds = Math.floor(timeRemaining % 60);

  
    const days = Math.floor(roundHours / 24);
    
    const nigthHours = roundHours/60/60%24;

      const formatHours = nigthHours < 10 ? "0" + nigthHours : nigthHours;
      const formatmin = minutes < 10 ? "0" + minutes : minutes;
      const formatsec = seconds < 10 ? "0" + seconds : seconds;
      blockTimer.textContent = `${days} дн.  ${formatHours}:${formatmin}:${formatsec}`;
   
    if (timeRemaining <= 0) {
      clearInterval(interval);
      blockTimer.textContent = `0 дн. 00:00:00`;
    }
  };
  interval = setInterval(countdownTimer, 500);
};
export default timer;
