if (window.performance.navigation.type > 0) {
    let random1 = Math.floor(Math.random() * 6) + 1;
    let random2 = Math.floor(Math.random() * 6) + 1;

    let image1 = 'images/dice' + random1 + '.png';
    let image2 = 'images/dice' + random2 + '.png';

    document.querySelectorAll('img')[0].setAttribute('src', image1);
    document.querySelectorAll('img')[1].setAttribute('src', image2);

    if (random1 > random2) {
        document.querySelector('h1').innerHTML = '&#128681 Player 1 Wins!' 
    } else if (random1 < random2) {
        document.querySelector('h1').innerHTML = 'Player 2 Wins! &#128681' 
    } else {
        document.querySelector('h1').innerHTML = 'Draw!' 
    }
}
