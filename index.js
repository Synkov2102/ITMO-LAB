const labCards = document.querySelector('.lab__cards');
const labCardBtn = labCards.querySelectorAll('.lab__card-btn');
const popup = document.querySelector('.popup');
const popupClose = popup.querySelector('.popup__close');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closeOnPage);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closeOnPage);
}

function closeOnPage(evt) { 
  if(evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

popupClose.addEventListener('click', () => {
  closePopup(popup);
});

labCardBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    openPopup(popup);
  });
});

