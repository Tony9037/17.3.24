function randint(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function getRandomSign(){
    let a = randint(0,5)
    return a
}
function answer1(){
    let a = getRandomSign()
    let b = 0
    if (a == 0){b = 'да'}
    else if (a == 1) {b = 'нет'}
    else if (a == 2) {b = 'возможно'}
    else if (a == 3) {b = 'маловероятно'}
    else if (a == 4) {b = 'духи так не считают'}
    else if (a == 5) {b = 'духи согласны с этим'}
    let zero = document.querySelector('.zero')
    zero.innerHTML = `${b}`
    let inpt = document.querySelector('.text2')
    inpt.innerHTML = ``
}

function answer(){
anime({
    targets: '.img',
    keyframes: [
        {translateX: '0px'},
        {translateX: '-20px'},
        {translateX: '0px'},
        {translateX: '20px'},
        {translateX: '0px'},
        {translateX: '-20px'},
        {translateX: '0px'},
        {translateX: '20px'},
        {translateX: '0px'},
        {translateX: '-20px'},
        {translateX: '0px'},
        {translateX: '20px'},
        {translateX: '0px'},
        {translateX: '-20px'},
        {translateX: '0px'},
        {translateX: '20px'},
        {translateX: '0px'}
    ],
    duration: 1000,
    easing: 'linear'
})
setTimeout(function() {
    answer1()
}, 1000)
}
