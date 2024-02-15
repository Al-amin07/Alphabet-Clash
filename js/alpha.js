// function play(){
//     const home = document.getElementById('home');
//     home.classList.add('hidden');
//     const play = document.getElementById('play');
//     play.classList.remove('hidden')
// }


function play() {

    hideElementById('home');
    showElementById('play')
    gameStart()
}

function gameStart() {
    const alphabet = getRandomAlphabet();

    document.getElementById('alphabate').innerText = alphabet.toUpperCase();

    setBgColor(alphabet);

}

function getRandomAlphabet() {
    const str = 'abcdefghijklmnopqrstuvwxyz';
    const arr = str.split('');
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    return arr[index];
}


function setBgColor(elementId){
    document.getElementById(elementId).classList.add('bg-orange-400');
}

function handleClick(event){
 const al = document.getElementById('alphabate').innerText 
 
}
document.addEventListener('keyup', handleClick)