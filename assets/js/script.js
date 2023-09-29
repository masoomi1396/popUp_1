const box = document.getElementById('box');
const submitBtn = document.getElementById('submitBtn');
const okBtn = document.getElementById('okBtn');

submitBtn.addEventListener('click',()=>{
    box.classList.remove("hidden");
    box.classList.add("animationClass");
})
okBtn.addEventListener("click",()=>{
    box.classList.add("hidden");
    box.classList.remove("animationClass");
})