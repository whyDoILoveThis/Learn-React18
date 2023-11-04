const orderedLists = document.querySelectorAll('ol');

orderedLists.forEach((orderedList, index) => {
    const liElements = orderedList.querySelectorAll('li');
    
    liElements.forEach((li, liIndex) => {
        const anchor = li.querySelector('a');
        const anchorText = anchor.textContent;
        const checkMark = createCheckMark(index, liIndex, anchorText);
        li.appendChild(checkMark);
    });
});

function createCheckMark(olIndex, liIndex, anchorText) {
    const checkMark = document.createElement('img');
    checkMark.src = getCheckMarkSrc(olIndex, liIndex);
    checkMark.classList.add('check-mark');

    checkMark.addEventListener('click', () => {
        const isGreen = checkMark.src.endsWith('check-mark.png');
        const actionText = isGreen ? 'uncheck' : 'check';

        if (window.confirm(`Do you want to ${actionText} this item: ${anchorText}?`)) {
            fadeOutAndChange(checkMark, isGreen ? "../../imgs/un-checked-mark.png" : "../../imgs/check-mark.png");
            saveCheckMarkState(olIndex, liIndex, !isGreen); // Toggle the state in localStorage
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

function getCheckMarkSrc(olIndex, liIndex) {
    const key = `checkMarkState_${olIndex}_${liIndex}`;
    return localStorage.getItem(key) === 'true' ? "../../imgs/check-mark.png" : "../../imgs/un-checked-mark.png";
}

function saveCheckMarkState(olIndex, liIndex, isChecked) {
    const key = `checkMarkState_${olIndex}_${liIndex}`;
    localStorage.setItem(key, isChecked);
}

// Rest of the code remains the same.



