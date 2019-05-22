const field = document.getElementById('field');
const ball = document.getElementById('ball');

function inRange(x, low, high) {
  // фиксируем значение х в границах low, high
  if (x < low) return low;
  if (x > high) return high;
  return x;
}

field.addEventListener('click', (event)=> {
  const fieldRect = field.getBoundingClientRect();
  const innerFieldCoords = {
    y: event.clientY - (field.offsetTop + fieldRect.top),
    x: event.clientX - (field.offsetLeft + fieldRect.left),
  }

  const halfBallWidth = ball.clientWidth / 2;
  const halfBallHeight = ball.clientHeight /2 ;
  const ballCoords = {
    x: inRange(innerFieldCoords.x - halfBallWidth,
       0, fieldRect.width - halfBallWidth * 3),
    y: inRange(innerFieldCoords.y - halfBallHeight,
       0, fieldRect.height - halfBallHeight * 3)
  }

  ball.style.top = `${ballCoords.y}px`;
  ball.style.left = `${ballCoords.x}px`;
});
