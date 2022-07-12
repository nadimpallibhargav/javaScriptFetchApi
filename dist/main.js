const getTextBtn = document.querySelector('.getText');
const output = document.querySelector('.output');

getTextBtn.addEventListener('click', () => {
    fetch('getText.txt')
    .then((res) => res.text())
    .then((data) => {
        output.innerHTML = data;
    })
    .catch((err) => console.log(err))
});