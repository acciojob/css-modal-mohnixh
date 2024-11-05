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

// Prevent click events within modal content from closing the modal
modalContent.addEventListener('click', (e) => {
  e.stopPropagation();
});

// Close modal when clicking outside modal content (on the overlay)
modal.addEventListener('click', () => {
  modal.style.display = 'none'; // Hide modal
});