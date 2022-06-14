const options = document.querySelectorAll('.option');
const btnSubmit = document.getElementById('submit');
const selected = document.getElementById('selected');
const rate = document.getElementById('rate');
const thanks = document.getElementById('thanks');
let selectedRating = 0;

options.forEach((option) => {
  option.addEventListener('click', (e) => {
    options.forEach((opt) => {
      opt.classList.remove('active');
    });
    option.classList.add('active');
    selectedRating = e.target.textContent;
  });
});

btnSubmit.addEventListener('click', () => {
  if (selectedRating < 1) return;
  rate.classList.add('hidden');
  thanks.classList.remove('hidden');
  selected.textContent = selectedRating;
  console.log(`Click! - ${selectedRating} selected`);
});
