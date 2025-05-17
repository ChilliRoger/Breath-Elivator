const text = document.getElementById('text');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const container = document.getElementById('container');
const leafIcon = document.getElementById('leafIcon');

let breathingInterval = null;

function startBreathing() {
  if (breathingInterval) return; 
  text.textContent = "Breathe In";
  container.classList.add('grow');
  breathingInterval = setInterval(() => {
    if (text.textContent === "Breathe In") {
      text.textContent = "Breathe Out";
      container.classList.remove('grow');
      container.classList.add('shrink');
    } else {
      text.textContent = "Breathe In";
      container.classList.remove('shrink');
      container.classList.add('grow');
    }
  }, 3000); 
}

function stopBreathing() {
  clearInterval(breathingInterval);
  breathingInterval = null;
  text.textContent = "";
  container.classList.remove('grow', 'shrink');
}

startBtn.addEventListener('click', () => {
  leafIcon.classList.add('hidden');
  startBreathing();
});

stopBtn.addEventListener('click', () => {
  leafIcon.classList.remove('hidden');
  stopBreathing();
});
