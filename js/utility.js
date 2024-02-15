function hideElementById(elementId) {
    document.getElementById(elementId).classList.add('hidden');
}

function showElementById(elementId) {
    document.getElementById(elementId).classList.remove('hidden');
}
function setBgColor(elementId){
    document.getElementById(elementId).classList.add('bg-orange-400');
}
function removeBgColor(elementId){
    document.getElementById(elementId).classList.remove('bg-orange-400');
}

function gameStart() {
    const alphabate = getRandomAlphebate();
    document.getElementById('alphabate').innerText = alphabate;
    setBgColor(alphabate)
}

function getRandomAlphebate() {
    const str = 'abcdefghijklmnopqrstuvwxyz';
    const arr = str.split('');
    const num = Math.random() * 25
    const index = Math.round(num);
    return arr[index]
}

function play() {
    hideElementById('home');
    showElementById('play');
    gameStart();
}

function getIntValueById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText ;
    return parseInt(elementText);
}

 function countScore(event){
     const press = event.key;
     
    const given = document.getElementById('alphabate').innerText;
    if(press === given){
        console.log('You got a point');
        removeBgColor(press);
        // Update Score
        
        const score = getIntValueById('score')
        const updateScore = document.getElementById('score');
        updateScore.innerText = score + 1;
        gameStart();
    }
    else{
        console.log('No point')
        // Update life
       const life = getIntValueById('life');
       const updateLife = document.getElementById('life');
       updateLife.innerText = life - 1;
    }

 }

document.addEventListener('keyup',countScore)