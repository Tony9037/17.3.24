let square = document.querySelector('#square')
let button = document.querySelector('button')
let circ2 = document.querySelector('.two')
let circ3 = document.querySelector('.three')
let circ4 = document.querySelector('.four')
let circ5 = document.querySelector('.five')
let circ6 = document.querySelector('.six')
let a = getRandomSign()

function randint(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
function getRandomSign(){
    let a = randint(1,6)
    return a
}

function answer1(){
    let a = randint(1,6)
    if (a == 1){
        square.style.display = "contents";
        alert(1)
    }
    else if (a == 2) {
        circ2.style.display = "contents";
        alert(2)
    }
    else if (a == 3) {
        circ3.style.display = "contents";
        alert(3)
    }
    else if (a == 4) {
        circ4.style.display = "contents";
        alert(4)
    }
    else if (a == 5) {
        circ5.style.display = "contents";
        alert(5)
    }
    else if (a == 6) {
        circ6.style.display = "contents";
        alert(6)
    }
}

function answer(){
    anime({
        targets: '.square',
        keyframes: [
            {borderRadius: 0},
            {borderRadius: '50% 50%'},
            {borderRadius: '40% 40%'},
            {borderRadius: '0% 0%'}
        ],
        duration: 500,
        easing: 'linear'
    })
    setTimeout(function() {
        alert(a)
    }, 1000)
    }
