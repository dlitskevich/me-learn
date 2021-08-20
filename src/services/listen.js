/* eslint-disable new-cap */
/* eslint-disable no-undef */

const recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const diagnostic = document.querySelector('.output');
const bg = document.querySelector('html');
console.log(diagnostic);
document.body.onclick = () => {
  recognition.start();
  console.log('Ready to receive a color command.');
};

recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  if (diagnostic) {
    diagnostic.textContent = `Result received: ${color}`;
    console.log(`Result received: ${color}`);
  }
  if (bg) {
    console.log(`Result received: ${color}`);
    bg.style.backgroundColor = color;
  }
};
