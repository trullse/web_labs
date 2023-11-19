const mountainLeft = document.querySelector('#door_left');
const mountainRight = document.querySelector('#door_right');
const text = document.querySelector('#text');
const man = document.querySelector('#woman');

window.addEventListener('scroll',()=>{
    let value = scrollY;
    mountainLeft.style.left = `-${value/0.7}px`
    mountainRight.style.left = `${value/0.7}px`
    text.style.bottom = `-${value}px`;
    man.style.height = `${window.innerHeight - value}px`
})