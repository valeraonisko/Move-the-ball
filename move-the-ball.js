const field = document.getElementById('field');
const ball = document.getElementById('ball');

field.addEventListener('click', (event)=> {
  const innerFieldCoords = {
    y: event.clientY - (field.offsetTop + field.clientTop),
   x: event.clientX - (field.offsetLeft + field.clientLeft),
  }
  console.log(innerFieldCoords);
  const ballCoords = {
    x: innerFieldCoords.x - ball.offsetWidth/2,
    y: innerFieldCoords.y - ball.offsetHeight/2
  }
  console.log(ballCoords);
  if (ballCoords.y < 0) {
   ballCoords.y = 0;
  }

  if (ballCoords.x < 0) {
   ballCoords.x = 0;
  }
  if (ballCoords.y + ball.clientHeight > field.clientHeight) {
    ballCoords.y = field.clientHeight - ball.clientHeight;
  }

  if (ballCoords.x + ball.clientWidth > field.clientWidth) {
  ballCoords.x = field.clientWidth - ball.clientWidth;
  }

  ball.style.top = `${ballCoords.y}px`;
  ball.style.left = `${ballCoords.x}px`;
})
