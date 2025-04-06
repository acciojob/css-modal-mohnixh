document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('openModal');
  const closeModalBtn = document.querySelector('.close-modal');
  const modalContent = document.querySelector('.modal-content');

  // Open modal
  openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  // Close modal when clicking close button
  closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside modal content
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Prevent clicks inside modal content from closing modal
  modalContent.addEventListener('click', function(e) {
    e.stopPropagation();
  });
});