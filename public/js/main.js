let input = document.getElementsByTagName('input')[0];
input.addEventListener('focus', () =>{
    input.style.backgroundColor = 'blue';
})

let input2 = document.getElementsByTagName('input')[1];
input2.addEventListener('focus', () =>{
    input2.style.backgroundColor = 'blue';
});
input2.addEventListener('focusout', () =>{
    input2.style.backgroundColor = 'white';
});

let p1 = document.getElementsByClassName('premierParagraphe')[0];
let p2 = document.getElementsByClassName('secondParagraphe')[0];
let p3 = document.getElementsByClassName('dernierParagraphe')[0];
let btn = document.getElementsByClassName('buttonExo')[0];
btn.addEventListener('click', ()=>{
    p1.innerText = p2.innerText;
    p3.innerText = p2.innerText;
});

let btn2 = document.getElementsByClassName('buttonExo')[1];
btn2.addEventListener('click', () => {
    let input = document.getElementsByTagName('input')[2];
    document.getElementById('exo4').innerText = input.value;
});