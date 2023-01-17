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
})