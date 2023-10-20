const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const expandButton = card.querySelector('collapsible--expanded');

  if (expandButton) {
    card.classList.add('card--has-expandable');
  }
});
