const homeGray = document.querySelector('.home');
const menuRed = document.querySelector('.red');
const menuBlue = document.querySelector('.blue');
const menuYellow = document.querySelector('.yellow');
const menuGreen = document.querySelector('.green');
const menuPurple = document.querySelector('.purple');
const backgroundColor = document.body;

const makeGray = function () {
    document.querySelector('h1').innerHTML = 'KleurenToggle';
    backgroundColor.classList.remove('background-default');
    backgroundColor.classList.add('home');
    backgroundColor.classList.remove('red');
    backgroundColor.classList.remove('blue');
    backgroundColor.classList.remove('yellow');
    backgroundColor.classList.remove('green');
    backgroundColor.classList.remove('purple');
};

const makeRed = function () {
    document.querySelector('h1').innerHTML = 'Red';
    backgroundColor.classList.remove('background-default');
    backgroundColor.classList.remove('home');
    backgroundColor.classList.add('red');
    backgroundColor.classList.remove('blue');
    backgroundColor.classList.remove('yellow');
    backgroundColor.classList.remove('green');
    backgroundColor.classList.remove('purple');
};

const makeBlue = function () {
    document.querySelector('h1').innerHTML = 'Blue';
    backgroundColor.classList.remove('background-default');
    backgroundColor.classList.remove('home');
    backgroundColor.classList.remove('red');
    backgroundColor.classList.add('blue');
    backgroundColor.classList.remove('yellow');
    backgroundColor.classList.remove('green');
    backgroundColor.classList.remove('purple');
};

const makeYellow = function () {
    document.querySelector('h1').innerHTML = 'Yellow';
    backgroundColor.classList.remove('background-default');
    backgroundColor.classList.remove('home');
    backgroundColor.classList.remove('red');
    backgroundColor.classList.remove('blue');
    backgroundColor.classList.add('yellow');
    backgroundColor.classList.remove('green');
    backgroundColor.classList.remove('purple');
};

const makeGreen = function () {
    document.querySelector('h1').innerHTML = 'Green';
    backgroundColor.classList.remove('background-default');
    backgroundColor.classList.remove('home');
    backgroundColor.classList.remove('red');
    backgroundColor.classList.remove('blue');
    backgroundColor.classList.remove('yellow');
    backgroundColor.classList.add('green');
    backgroundColor.classList.remove('purple');
};

const makePurple = function () {
    document.querySelector('h1').innerHTML = 'Purple';
    backgroundColor.classList.remove('background-default');
    backgroundColor.classList.remove('home');
    backgroundColor.classList.remove('red');
    backgroundColor.classList.remove('blue');
    backgroundColor.classList.remove('yellow');
    backgroundColor.classList.remove('green');
    backgroundColor.classList.add('purple');
};
homeGray.addEventListener('mouseover', makeGray);
menuRed.addEventListener('mouseover', makeRed);
menuBlue.addEventListener('mouseover', makeBlue);
menuYellow.addEventListener('mouseover', makeYellow);
menuGreen.addEventListener('mouseover', makeGreen);
menuPurple.addEventListener('mouseover', makePurple);
