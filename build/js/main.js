const modalElement = document.getElementById('modal-search');
const openModal = document.getElementById('open-modal');
const closeModal = modalElement.querySelector('.modal__close-button');

openModal.addEventListener('click', () => {
  modalElement.showModal();
});

closeModal.addEventListener('click', () => {
  modalElement.close();
  openModal.scrollIntoView();
});

