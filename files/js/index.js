divs = document.querySelectorAll('.js-element');
hiddenElement = document.querySelector('.hidden-text');

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('mouseenter', function() {
        divAnimation(this);
        if (i === 1) {
            hiddenElement.classList.toggle('hidden-toggle');
        } 
    });

    divs[i].addEventListener('mouseleave', function() {
        divAnimation(this);
        if (i === 1) {
            hiddenElement.classList.toggle('hidden-toggle');
        } 
    });
}

function divAnimation(activeDiv) {
    activeDiv.classList.toggle('hover');
}
