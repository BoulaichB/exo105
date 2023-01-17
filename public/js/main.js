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

let btn3 = document.getElementsByTagName('button')[2];
btn3.addEventListener('click', ()=>{
    console.log(document.querySelectorAll('.box-body p')[4].innerText)
    document.getElementsByClassName('img-responsive')[0].setAttribute('src', document.querySelectorAll('.box-body p')[4].innerText.substring(9));
});

let img = document.getElementsByClassName('img-responsive')[1];
let chemin;
img.addEventListener('click', () =>{
    chemin = img.getAttribute('src');
});
let img2 = document.getElementsByClassName('img-responsive')[2];
img2.addEventListener('click', () =>{
    img2.setAttribute('src', chemin);
});

let btn4 = document.getElementsByTagName('button')[3];
btn4.addEventListener('click', ()=>{
    let p1 = document.querySelector('.box:nth-child(8) .box-body p:nth-child(2)').innerText;
    let p2 = document.querySelector('.box:nth-child(8) .box-body p:nth-child(4)').innerText;
    document.querySelector('.box:nth-child(8) .box-body p:nth-child(2)').innerText = p2;
    document.querySelector('.box:nth-child(8) .box-body p:nth-child(4)').innerText = p1;
})