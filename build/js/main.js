const modalElement = document.getElementById('modal-search');

const openBtn = document.getElementById('open-modal');
window.console.log('test');

openBtn.addEventListener('click', () => {
  modalElement.showModal();
});
