// TAB ICON
const head = document.getElementsByTagName('head')[0];
const tabIcon = document.createElement("link");
tabIcon.href = "/imgs/react-icon.png";
tabIcon.rel = "icon";
head.appendChild(tabIcon);



// JUMP-TO-TOP BUTTON
const body = document.body;
const toTopIcon = document.createElement("img");
const toTopLink = document.createElement("a");
toTopLink.href = "#";
toTopIcon.src = "/imgs/R.png";
toTopIcon.classList.add("to-top");
body.appendChild(toTopLink);
toTopLink.appendChild(toTopIcon);

// JUMP-TO-BOTTOM BUTTON
const toBottomIcon = document.createElement("img");
const toBottomLink = document.createElement("a");
const theBottomOfPage = document.createElement('span');
theBottomOfPage.id = "bottom"
body.appendChild(theBottomOfPage);
toBottomLink.href = "#bottom";
toBottomIcon.src = "/imgs/R.png";
toBottomIcon.classList.add("to-bottom");
body.appendChild(toBottomLink);
toBottomLink.appendChild(toBottomIcon);


// BACK-BUTTON

const backBtnIcon = document.createElement("img");
backBtnIcon.addEventListener("click", function() {
  window.history.go(-1);
}); 
backBtnIcon.src = "/imgs/R.png";
backBtnIcon.classList.add("back-btn");
body.appendChild(backBtnIcon);





let domReady = (cb) => {
  document.readyState === 'interactive' || document.readyState === 'complete'
  ?(cb)
  : document.addEventListener('DOMContentLoaded', cb);
};

domReady(() => {
  document.body.style.visibility = 'visible';
})









// Check the current page's filename
const currentFilename = window.location.pathname.split('/').pop();
if (currentFilename !== 'index.html' && currentFilename !== 'part-2.html') {
    createCollapsibleStructure();
}

// Define a function to create the collapsible structure
function createCollapsibleStructure() {
  // Create the container for the dynamically generated structure
  const container = document.createElement('div');
  container.classList.add('centerer');

  // Create the collapsible section
  const collapsible = document.createElement('div');
  collapsible.classList.add('collapsible', 'sections-collapsible');

  // Create the collapsible heading
  const heading = document.createElement('h2');
  heading.classList.add('sections-heading', 'collapsible__heading');
  heading.textContent = 'Topics';

  // Create the icon for collapsing/expanding
  const icon = document.createElement('img');
  icon.src = '/imgs/R.png';
  icon.alt = '';
  icon.classList.add('icon', 'sections-icon', 'collapsible__button');
  heading.appendChild(icon);

  // Create the collapsible content
  const content = document.createElement('div');
  content.classList.add('collapsible__content');

  // Create an ordered list
  const orderedList = document.createElement('ol');

  // Get all existing h2 elements
  const h2Elements = document.querySelectorAll('h2');

  // Iterate through the h2 elements and generate anchor elements
  h2Elements.forEach((h2) => {
    h2.id = h2.textContent.replace(/\s+/g, '');
      const listItem = document.createElement('li');
      listItem.classList.add('section-item');
      listItem.classList.add('section-item--main');

      const anchor = document.createElement('a');
      anchor.textContent = h2.textContent;
      anchor.href = `#${h2.textContent.replace(/\s+/g, '')}`;

      listItem.appendChild(anchor);
      orderedList.appendChild(listItem);
  });

  // Append elements to build the structure
  content.appendChild(orderedList);
  collapsible.appendChild(heading);
  collapsible.appendChild(content);
  container.appendChild(collapsible);

  // Find a target element where you want to insert the structure
  // For example, you can use document.body to add it to the body of the page
  const targetElement = document.querySelector('h1');

  // Insert the structure into the target element
  targetElement.appendChild(container);
}
















const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((collapsible) => {
  const collapseBtn = collapsible.querySelector(".collapsible__button");
  
  if (collapseBtn) {
    collapseBtn.addEventListener("click", function() {
      collapsible.classList.toggle("collapsible--expanded");
    });
  }
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const expandButton = card.querySelector('.collapsible--expanded');

  if (expandButton) {
    card.classList.add('card--has-expandable');
  }
});





// enlarge img with click

const allImgs = document.querySelectorAll('img');

allImgs.forEach(img => {
  img.addEventListener('click', () => {
    img.classList.toggle('img-enlarged');
  })
})