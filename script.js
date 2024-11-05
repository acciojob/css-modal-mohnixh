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

// Prevent clicks inside modal content from closing the modal
modalContent.addEventListener('click', (e) => {
  e.stopPropagation();
});

// Close modal when clicking on the overlay outside modal content
modal.addEventListener('click', (e) => {
  if (e.target === modal) { // Ensure the click is on the overlay, not the content
    modal.style.display = 'none';
  }
});