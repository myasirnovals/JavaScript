function createParagraph() {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'You clicked to create Paragraph!';
    document.body.appendChild(paragraph);
}

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
    button.addEventListener('click', createParagraph);
}
