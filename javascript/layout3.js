const firstName = 'Sharon';
const lastName = 'Cohen';
const calcNumOfSquares = firstName.length * lastName.length;
const mainRef = document.getElementById('main-3');
const turnDarkBtn = document.getElementById('turnDark');
const turnWhiteBtn = document.getElementById('turnWhite');


const firstSquare = document.createElement('div');
firstSquare.className = 'square-firstName';
mainRef.append(firstSquare);
for (let i = 1; i < calcNumOfSquares; i++) {
    const newSquare = document.createElement('div');
    if (i < firstName.length) {
        newSquare.className = 'square-firstName'
    } else {
        newSquare.className = 'square-lastName'
    }
    mainRef.append(newSquare);
}


firstSquare.addEventListener('mouseenter', function() {
    const textNode = document.createTextNode('S');
    firstSquare.append(textNode);
});
firstSquare.addEventListener('mouseleave', function () {
    firstSquare.innerText = ''
});
turnDarkBtn.addEventListener('click', function() {
    const firstNameSquares = document.getElementsByClassName('square-firstName');
    for (let i = 0; i < firstNameSquares.length; i++) {
        firstNameSquares[i].style.cssText = "background-color: black; color: white"
    }
});
turnWhiteBtn.addEventListener('click', function() {
    const firstNameSquares = document.getElementsByClassName('square-firstName');
    for (let i = 0; i < firstNameSquares.length; i++) {
        firstNameSquares[i].style.cssText = "background-color: white"
    }
});


