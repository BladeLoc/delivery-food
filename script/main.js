let closeButton = document.querySelector('#modal-close');
let modal = document.querySelector('.modal');
let openCart = document.querySelector('#open-cart');

openCart.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);

function toggleModal(){
    modal.classList.toggle('if-open');
}
new WOW().init();