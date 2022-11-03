  window.addEventListener('load', function () {

    const profileUser = document.querySelector('.profile__user')
    const profileInfo = profileUser.querySelector('.profile__info');
    const profileName = profileInfo.querySelector('.profile__name');
    const profileDescription = profileInfo.querySelector('.profile__description');
    const buttonEditProfile = profileInfo.querySelector('.profile__edit-button');
    const buttonAdd = document.querySelector('.profile__add-button');
    const popupEditProfile = document.querySelector('#popup-profile');
    const buttonClosePopupProfile = popupEditProfile.querySelector('.popup__close-button');
    const profileForm = popupEditProfile.querySelector('#profile-form');
    const inputNamePopupProfile = profileForm.querySelector('#profile-name');
    const inputJobPopupProfile = profileForm.querySelector('#profile-description');
    const popupMesto = document.querySelector('#popup-mesto');
    const buttonClosePopupMesto = popupMesto.querySelector('.popup__close-button ');
    const mestoForm = document.querySelector('#form-mesto');
    const inputUrlPopupMesto = document.querySelector('#mesto-url');
    const inputNamePopupMesto = document.querySelector('#mesto-name');
    const popupImage = document.querySelector('#image-popup');
    const popupImagePicture = document.querySelector('.popup__image');
    const popupImageCaption = document.querySelector('.popup__caption')
    const buttonClosePopupImage = popupImage.querySelector('.popup__close-button');
    const cards = document.querySelector('.cards');
    const cardTemplate = document.querySelector('#card').content;

    // Функция отправки формы popup edit profile

    function submitFormHandler (evt) {
      evt.preventDefault();
      profileName.textContent = inputNamePopupProfile.value;
      profileDescription.textContent = inputJobPopupProfile.value;
      closePopup(popupEditProfile);
      evt.target.reset();
    }

    // Функция открытия popup

    function openPopup(element) {
      element.classList.add('popup_opened');
    }

    // Функция закрытия popup

    function closePopup(element) {
      element.classList.remove('popup_opened');
    }

    // Функция подтверждения формы popup mesto

    function submitFormAddCard(evt) {
      evt.preventDefault();
      const item = {};
      item.name = inputNamePopupMesto.value;
      item.link = inputUrlPopupMesto.value;
      addNewCard(item);
      closePopup(popupMesto);
      evt.target.reset();
    }

      // Функция создания новой карточки

    function createNewCard(item) {
      const card = cardTemplate.querySelector('.card').cloneNode(true);
      const cardImage = card.querySelector('.card__image');
      const cardTitle = card.querySelector('.card__title');
      cardTitle.textContent = item.name;
      cardImage.src = item.link;
      cardImage.alt = item.name;
      toggleLike(card);
      deleteCard(card);
      imagePopup(card, item);
      return card;

    }

    // Функция добавления новой карточки на страницу

    function addNewCard(item) {
      cards.prepend(createNewCard(item))
    }


    // Инициализация карточек при загрузке страницы

    initialCards.forEach(function (item) {
      addNewCard(item);
    });


    // Реализация лайков

    function toggleLike (element) {
      element
      .querySelector('.card__like-button')
      .addEventListener('click', function (evt) {
      evt.target.classList.toggle('card__like-button_active');
    });
    }

    // Удаление карточки

    function deleteCard (element) {
      element
      .querySelector('.card__delete-button')
      .addEventListener('click', function (evt) {
      evt.stopPropagation();
      evt.target.parentElement.remove();
    })
    }

      // Открываем картинку при клике на изображение

    function imagePopup (element, item) {
        element
        .querySelector('.card__image')
        .addEventListener('click', function () {
          popupImagePicture.src = item.link;
          popupImagePicture.alt = item.name;
          popupImageCaption.textContent = item.name;
          openPopup(popupImage);
        })
      }

    // Слушатель события на закрытие popup image

    buttonClosePopupImage.addEventListener('click', function () {
      closePopup(popupImage);
    });

      // Слушатель события на подтверждение формы в popup edit profile

      profileForm.addEventListener('submit', submitFormHandler);

    // Слушатель события на открытие popup edit profile

    buttonEditProfile.addEventListener('click', function () {
      openPopup(popupEditProfile);
    });

    // Слушатель события на закрытие popup edit profile

    buttonClosePopupProfile.addEventListener('click', function () {
      closePopup(popupEditProfile);
    });


    // Слушатель события на открытие popup mesto

    buttonAdd.addEventListener('click', function () {
      openPopup(popupMesto);
    });

      // Слушатель события на закрытие popup mesto

    buttonClosePopupMesto.addEventListener('click', function () {
      closePopup(popupMesto);
    });

    // Слушатель события на подтверждение формы в popup mesto

    mestoForm.addEventListener('submit', submitFormAddCard);

  })
