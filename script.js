const modal = document.getElementById('category-modal');
const btn_open = document.getElementById('btn-open');
const btn_close = document.getElementById('btn-close');

btn_open.addEventListener('click', ()=> {
   modal.setAttribute('open', 'true');
});
btn_close.addEventListener('click', ()=> {
   modal.removeAttribute('open');
});