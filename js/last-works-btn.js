
const devBtn = document.querySelector('.btn-dev');
const desBtn = document.querySelector('.btn-design');


desBtn.addEventListener('click', () => {
    desBtn.classList.remove('btn-none-active');
    desBtn.classList.add('btn-active');
    devBtn.classList.remove('btn-active');
    devBtn.classList.add('btn-none-active');
});

devBtn.addEventListener('click', () => {
    devBtn.classList.add('btn-active');
    desBtn.classList.remove('btn-active');
    desBtn.classList.add('btn-none-active');
    devBtn.classList.remove('btn-none-active');
});

