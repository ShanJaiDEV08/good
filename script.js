const forTimeBasedText = new Date().getHours();
const forDisplayingText = document.getElementById('time-rendering');

const toCheckTime = (toValuate) => {
  if(toValuate >= 5 && toValuate <= 12){
    return 'Good Morning, Have a nice day.';
  }else if(toValuate >= 13 && toValuate <= 16){
    return 'Good Afternoon, Hope your day is nice.';
  }else if(toValuate >= 15 && toValuate <= 23){
    return 'Good Evening, Tired? Take some rest, everything will be okay.';
  }else if(toValuate >= 0 && toValuate <= 5){
    return 'It is too late. Go, go and sleep. Good Night'
  }
}
forDisplayingText.innerHTML = toCheckTime(forTimeBasedText);

const defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ["star"],
  colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ["star"],
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ["circle"],
  });
}

setTimeout(shoot, 0);
setTimeout(shoot, 100);
setTimeout(shoot, 200);