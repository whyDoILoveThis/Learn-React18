// TAB ICON
const head = document.getElementsByTagName('head')[0];
const tabIcon = document.createElement("link");
tabIcon.href = "../../imgs/react-icon.png";
tabIcon.rel = "icon";
head.appendChild(tabIcon);


const body = document.body;
const toTopIcon = document.createElement("img");
const toTopLink = document.createElement("a");
toTopLink.href = "#";
toTopIcon.src = "../../imgs/R.png";
toTopIcon.classList.add("to-top");
body.appendChild(toTopLink);
toTopLink.appendChild(toTopIcon);



















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
