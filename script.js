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
    // Check if the click is directly on the modal background (not content)
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // No need for stopPropagation since we're checking e.target directly
});