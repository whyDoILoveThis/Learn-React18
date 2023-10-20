// TAB ICON
const head = document.getElementsByTagName('head')[0];
const tabIcon = document.createElement("link");
tabIcon.href = "../imgs/react-icon.png";
tabIcon.rel = "icon";
head.appendChild(tabIcon);




















/** COLLAPSIBLE  */
const collapsibles = document.querySelectorAll(".collapsible");
const collapseBtns = document.querySelectorAll(".collapsible__button")
collapsibles.forEach((item) =>
  
    collapseBtns.forEach((btn) =>
    btn.addEventListener("click", function() {
      item.classList.toggle("collapsible--expanded");
    }))
  
);

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const expandButton = card.querySelector('collapsible--expanded');

  if (expandButton) {
    card.classList.add('card--has-expandable');
  }
});
