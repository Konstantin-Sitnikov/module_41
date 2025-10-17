

function clickButton() {
  const button = document.querySelector(".button");
  const btnIconActive = document.querySelector(".button__icon--btn-active")
  const btnIconNotActive = document.querySelector(".button__icon--btn-not-active")
  
  
  if(!button.classList.contains("button--active")) {
    button.classList.add("button--active");
  } else {
    button.classList.remove("button--active")
  }

  if (button.classList.contains("button--active")) {
    btnIconActive.style.display = "block";
    btnIconNotActive.style.display = "none";
  } else {
    btnIconActive.style.display = "none";
    btnIconNotActive.style.display = "block";
  }

}