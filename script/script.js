import {tabsData, dialogData} from './data.js';

// Анимация fade-in
document.addEventListener('DOMContentLoaded', () => {
  let 
      mainGallery = document.querySelector('#fadeInMainGallery');

  mainGallery.classList.remove('fade-in-start');
  mainGallery.classList.add('fade-in-end')
});

// Логика табов
const tabBtn = document.querySelectorAll('.tab-button');

tabBtn.forEach((el) => {
  el.addEventListener('click', () => {
    tabBtn.forEach((el) => {
      el.classList.remove('tab-active');
    })
    el.classList.add('tab-active');

    
    let 
        contentTitle = document.querySelector('#tab-title'),
        contentBody = document.querySelector('#tab-body'),
        currentSection,
        tabImage = document.querySelector('#tabImage');

    if (el.classList.contains('tab-active')) {
      currentSection = el.getAttribute('id');
      fillTab(currentSection);
    }

    function fillTab (section) {
      // console.log(section);
      switch (section) {
        case 'character': 
          contentTitle.innerHTML = tabsData.character.title;
          contentBody.innerHTML = tabsData.character.content;
          tabImage.setAttribute('src', './src/glen-characters.jpg');
          break;
        case 'pazzel': 
          contentTitle.innerHTML = tabsData.pazzel.title;
          contentBody.innerHTML = tabsData.pazzel.content;
          tabImage.setAttribute('src', './src/Pushing-Lamb-pazzel.jpg');
          break;
        case 'location': 
          contentTitle.innerHTML = tabsData.location.title;
          contentBody.innerHTML = tabsData.location.content;
          tabImage.setAttribute('src', './src/tab-location-barrel.webp'); 
          break;
        case 'dialog': 
          contentTitle.innerHTML = tabsData.dialog.title;
          contentBody.innerHTML = tabsData.dialog.content;
          tabImage.setAttribute('src', './src/Niko_faces.webp');
          break;
        case 'develop': 
          contentTitle.innerHTML = tabsData.develop.title;
          contentBody.innerHTML = tabsData.develop.content;
          tabImage.setAttribute('src', './src/Nightmargin.webp');
          break;
        default:
          break;
      }
      contentTitle.innerHTML;
    }
  })
});

// Диалоговые окна
let 
  backstoryBTN = document.querySelector('#backstory'),
  modal = document.querySelector('#backstoryDI'),
  close = document.querySelector('#closeModal'),
  modalTitle = document.querySelector('#modalTitle'),
  modalBody = document.querySelector('#modalBody'),
  personalityBTN = document.querySelector('#personality'),
  stuffBTN = document.querySelector('#stuff'),
  spritesBTN = document.querySelector('#sprites'),
  figureHolder = document.querySelector('.figure-wrapper');

close.addEventListener('click', () => {
  modal.classList.add('close');
  modal.close();
});
backstoryBTN.addEventListener('click', () => {
  clearModal()
  modal.showModal();
  modalTitle.innerHTML = dialogData.backstory.title;
  modalBody.innerHTML = dialogData.backstory.content;
});
personalityBTN.addEventListener('click', () => {
  clearModal()
  modal.showModal();
  modalTitle.innerHTML = dialogData.personality.title;
  modalBody.innerHTML = dialogData.personality.content;
});
stuffBTN.addEventListener('click', () => {
  clearModal()
  modal.showModal();
  modalTitle.innerHTML = dialogData.stuff.title;
  modalBody.innerHTML = dialogData.stuff.content;
});
spritesBTN.addEventListener('click', () => {
  clearModal()
  modal.showModal();
  for (const key in dialogData.sprites.content) {
    let   
        img = document.createElement('img'),
        figure = document.createElement('figure'),
        figCaption = document.createElement('figcaption');
    img.setAttribute('src', `./src/sprites/${key}.webp`);
    img.setAttribute('class', 'sprite-img');
    figCaption.innerHTML = key;
    figureHolder.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figCaption);
  }
  modalTitle.innerHTML = dialogData.sprites.title;
});
function clearModal() {
  modalTitle.innerHTML = '';
  modalBody.innerHTML = '';
  figureHolder.innerHTML = '';
  modal.classList.remove('close');
};

let 
    filterBTN = document.querySelector('#filterBTN'),
    summaryList = document.querySelector('.summary-list'),
    listIcon = document.querySelector('.default'),
    listItem = document.querySelectorAll('#char'),
    searchInput = document.querySelector('.search-input');

filterBTN.addEventListener('click', (event) => {
  if (summaryList.classList.contains('hide')) {
    listIcon.classList.remove('rotate');
    summaryList.classList.remove('hide');
  } else {
    listIcon.classList.add('rotate');
    summaryList.classList.add('hide');
  }
  
});

summaryList.addEventListener('click', (event) => {
  let condition = event.target.tagName !== 'LI';
  if(condition) {
    return
  } else {
    let filterClass = event.target.dataset['f'];
    listItem.forEach( (el) => {
      el.classList.remove('hide');
      if (!el.classList.contains(filterClass) && filterClass !== 'all') {
        el.classList.add('hide');
      }
    })
  }
});

searchInput.addEventListener('input', (event) => {

  if (event.target.value == '') {
    listItem.forEach((item) => {
      item.classList.remove('hide');
    })
    
  }
  listItem.forEach((item) => {
    if (event.target.value === item.getAttribute('alt')) {
      listItem.forEach((item) => {
        if (item.getAttribute('alt') !== event.target.value) {
          item.classList.add('hide')
        }
      })
    }
  })
  
});

let 
    menuBTN = document.querySelector('#menuBTN'),
    menu = document.querySelector('.menu-logo-wrapper');

menuBTN.addEventListener('click', () => {
  if (menu.classList.contains('hide')) {
    menu.classList.remove('hide');
  } else {
    menu.classList.add('hide');
  }
  
})
