// Get the modal, open button, and close button
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.querySelector('.close-modal');

// Open modal on button click
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Close modal on close button click
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside modal content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});