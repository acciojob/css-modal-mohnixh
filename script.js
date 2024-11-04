// Get the modal, open button, and close button
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.querySelector('.close-modal');
const modalContent = document.querySelector('.modal-content');

// Open modal on button click
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block'; // Show modal
});

// Close modal on close button click
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none'; // Hide modal
});

// Close modal when clicking outside modal content
modal.addEventListener('click', (e) => {
  if (!modalContent.contains(e.target)) { // Check if click is outside modal content
    modal.style.display = 'none';
  }
});