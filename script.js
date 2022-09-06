// js scripting to make homepage gay

const red = document.getElementById('red');
//change to red on mouseover
red.addEventListener('mouseover', function handleMouseOver() {
  red.style.color = 'red';
});
//change back to white on mouseout
red.addEventListener('mouseout', function handleMouseOut() {
    //fadeDelay();
    red.style.color = 'white';
});

const orange = document.getElementById('orange');
//change to orange on mouseover
orange.addEventListener('mouseover', function handleMouseOver() {
    orange.style.color = 'orange';
});
//change back to white on mouseout
orange.addEventListener('mouseout', function handleMouseOut() {
    //fadeDelay();
    orange.style.color = 'white';
});

const yellow = document.getElementById('yellow');
//change to yellow on mouseover
yellow.addEventListener('mouseover', function handleMouseOver() {
    yellow.style.color = 'yellow';
});
//change back to white on mouseout
yellow.addEventListener('mouseout', function handleMouseOut() {
    //fadeDelay();
    yellow.style.color = 'white';
});

const green = document.getElementById('green');
//change to green on mouseover
green.addEventListener('mouseover', function handleMouseOver() {
    green.style.color = 'green';
});
//change back to white on mouseout
green.addEventListener('mouseout', function handleMouseOut() {
    //fadeDelay();
    green.style.color = 'white';
});

const blue = document.getElementById('blue');
//change to blue on mouseover
blue.addEventListener('mouseover', function handleMouseOver() {
    blue.style.color = 'blue';
});
//change back to white on mouseout
blue.addEventListener('mouseout', function handleMouseOut() {
    //fadeDelay();
    blue.style.color = 'white';
});

const purple = document.getElementById('purple');
//change to purple on mouseover
purple.addEventListener('mouseover', function handleMouseOver() {
    purple.style.color = 'purple';
});
//change back to white on mouseout
purple.addEventListener('mouseout', function handleMouseOut() {
    //fadeDelay();
    purple.style.color = 'white';
});


function fadeDelay() {
    const delayTime = 500;
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < delayTime);
  }