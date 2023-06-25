const ratings = document.querySelectorAll('.rating');
const button = document.querySelector('button');
let selectedIndex = -1;

ratings.forEach((rating, index) => {
  rating.addEventListener('click', () => {
    selectedIndex = index;
    resetRating();
    rating.classList.add('selected');
  });
});

function resetRating() {
  ratings.forEach(rating => {
    rating.classList.remove('selected');
  });
}

button.addEventListener('click', () => {
  if (selectedIndex !== -1) {
    document.querySelector('.answer').textContent = `You selected ${selectedIndex + 1} out of 5`;
    document.querySelector('.card').style.display = 'none';
    document.querySelector('.answer-card').style.display = 'inline';
  }
});