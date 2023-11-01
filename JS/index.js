const orderedLists = document.querySelectorAll('ol');

orderedLists.forEach((orderedList) => {
    const liElements = orderedList.querySelectorAll('li');

    liElements.forEach((li, index) => {
        const anchor = li.querySelector('a');
        const anchorText = anchor.textContent;
        const checkMark = createCheckMark(index, anchorText);
        li.appendChild(checkMark);
    });
});

function createCheckMark(id, anchorText) {
    const checkMark = document.createElement('img');
    checkMark.src = getCheckMarkSrc(id);
    checkMark.classList.add('check-mark');

    checkMark.addEventListener('click', () => {
        const isGreen = checkMark.src.endsWith('check-mark.png');
        const actionText = isGreen ? 'uncheck' : 'check';

        if (window.confirm(`Do you want to ${actionText} this item: ${anchorText}?`)) {
            if (isGreen) {
                fadeOutAndChange(checkMark, "../../imgs/un-checked-mark.png");
                saveCheckMarkState(id, false);
            } else {
                fadeOutAndChange(checkMark, "../../imgs/check-mark.png");
                saveCheckMarkState(id, true);
            }
        }
    });

    return checkMark;
}

function fadeOutAndChange(element, newImageSrc) {
    element.style.opacity = 0;
    setTimeout(() => {
        element.src = newImageSrc;
        element.style.opacity = 1;
    }, 200); // Adjust the time to match your CSS transition duration
}

// Rest of the code (getCheckMarkSrc, saveCheckMarkState) remains the same.


function getCheckMarkSrc(id) {
    // Retrieve the saved state from localStorage or use the default state
    return localStorage.getItem(`checkMarkState_${id}`) === 'true' ? "../../imgs/check-mark.png" : "../../imgs/un-checked-mark.png";
}

function saveCheckMarkState(id, isChecked) {
    // Save the state to localStorage
    localStorage.setItem(`checkMarkState_${id}`, isChecked);
}
