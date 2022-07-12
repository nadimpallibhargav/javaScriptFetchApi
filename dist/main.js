const getTextBtn = document.querySelector('.getText');

getTextBtn.addEventListener('click', () => {
    fetch('getText.txt')
    .then((data) => console.log(data.text()))
});