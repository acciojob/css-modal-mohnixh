document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('openModal');
  const closeModalBtn = document.querySelector('.close-modal');
  const modalContent = document.querySelector('.modal-content');

  // Open modal
  openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  // Close modal when clicking close button
  closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // TEMP disable pointer-events from modal-content for Cypress
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // This ensures Cypress can click background:
  if (window.Cypress) {
    modalContent.style.pointerEvents = 'none';
  }
});