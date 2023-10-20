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
