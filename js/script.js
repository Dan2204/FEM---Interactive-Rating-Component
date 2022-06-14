const options = document.querySelectorAll('.option');
const btnSubmit = document.getElementById('submit');
const selected = document.getElementById('selected');
const cards = document.querySelectorAll('.card');

let selectedRating = 0;

options.forEach((option) => {
  option.addEventListener('click', (e) => {
    if (selectedRating > 0) {
      document
        .querySelector(`.options :nth-child(${selectedRating})`)
        .classList.remove('active');
    }
    option.classList.add('active');
    selectedRating = e.target.textContent;
  });
});

btnSubmit.addEventListener('click', () => {
  if (selectedRating < 1) return;
  cards.forEach((card) => card.classList.toggle('hidden'));
  selected.textContent = selectedRating;
});
