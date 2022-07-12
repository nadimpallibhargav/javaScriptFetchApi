const getTextBtn = document.querySelector('.getText');

getTextBtn.addEventListener('click', () => {
    fetch('getText.txt')
    .then((res) => res.text())
    .then((data) => console.log(data))
});