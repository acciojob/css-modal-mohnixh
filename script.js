document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('openModal');
  const closeModalBtn = document.querySelector('.close-modal');

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
    if (e.target === e.currentTarget) {
      modal.style.display = 'none';
    }
  });
});