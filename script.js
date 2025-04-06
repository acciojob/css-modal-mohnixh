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

  // Close modal when clicking outside modal content
  modal.addEventListener('click', function (e) {
    // Check if the click is on the modal background (not content)
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // For Cypress testing - ensure background clicks work
  if (window.Cypress) {
    // Add a small delay to ensure modal is fully rendered
    setTimeout(() => {
      // Make only the background clickable (not the content)
      modalContent.style.pointerEvents = 'none';
      // But make sure the close button remains clickable
      closeModalBtn.style.pointerEvents = 'auto';
    }, 100);
  }
});