// accordion


let moreBtn = document.querySelector('.moreBtn');

moreBtn.addEventListener('click', function () {
  moreBtn.classList.toggle('active');
  moreBtn.previousElementSibling.classList.toggle('active');
});