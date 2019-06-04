function toggleMenu() {
  var aside = getElement("aside");
  var length = aside.classList.length;
  if(length === 1) {
    aside.classList.add("aside_active");
  } else {
    aside.classList.remove("aside_active");
  }
}

function getElement(id) {
  return document.getElementById(id);
}

