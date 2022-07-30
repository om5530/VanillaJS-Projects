// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


const modalBtn = document.querySelector('.model-btn')
const modalOverlay = document.querySelector('.modal-overlay')
const modalClose = document.querySelector('.close-btn')

modalBtn.addEventListener('click',()=>{
  modalOverlay.classList.add('open-modal')
})

modalClose.addEventListener('click',()=>{
  modalOverlay.classList.remove('open-modal')
})