# Personal Website

This project is a personal website designed to showcase information about myself.

## Overview

The personal website consists of sections such as:
- About Me
- Education
- My Hobbies
- My Skills

## Features

- **Responsive Design:** The website is designed to be responsive and adapt to different screen sizes.
- **Gradient Background:** Utilizes a gradient background with dynamic animation effects for visual appeal.
- **Custom Fonts:** Employs custom fonts from Google Fonts to enhance typography.
- **Stylish Layout:** Implements CSS styling for headers, paragraphs, images, containers, links, and lists to create a visually appealing layout.
- **Interactive Elements:** Incorporates JavaScript for interactive elements, such as toggling hidden text and responsive layout adjustments.

## Usage

To view the website, open the `index.html` file in a web browser. All necessary styles are included in the `style.css` file, and JavaScript functionality is provided in the `index.js` file.

## Installation

To run this project locally, follow these steps:
1. Clone this repository to your local machine.
2. Open the `index.html` file in your preferred web browser.

## JavaScript

The JavaScript file (`index.js`) includes the following functionality:
- Event listeners are added to elements with the class `.js-element` to trigger animations on mouseenter and mouseleave.
- When hovering over the second `.js-element`, a hidden text element with the class `.hidden-text` is toggled to reveal hidden content.

```javascript
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
