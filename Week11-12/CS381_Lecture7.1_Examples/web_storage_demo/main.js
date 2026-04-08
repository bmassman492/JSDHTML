const htmlElem = document.querySelector('html');
const pElem = document.querySelector('p');
const imgElem = document.querySelector('img');

const bgcolorForm = document.getElementById('bgcolor');
const fontForm = document.getElementById('font');
const imageForm = document.getElementById('image');

if (!localStorage.getItem('bgcolor')) {
  populateStorage();
  alert("first time open page");
} else {
  setStyles();
  alert("reload page");
}

function populateStorage() {
  localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
  localStorage.setItem('font', document.getElementById('font').value);
  localStorage.setItem('image', document.getElementById('image').value);

  setStyles();
}

function setStyles() {
  const currentColor = localStorage.getItem('bgcolor');
  const currentFont = localStorage.getItem('font');
  const currentImage = localStorage.getItem('image');

  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('font').value = currentFont;
  document.getElementById('image').value = currentImage;

  htmlElem.style.backgroundColor = '#' + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute('src', currentImage);
}

bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;