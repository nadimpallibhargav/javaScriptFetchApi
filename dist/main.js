const getTextBtn = document.querySelector('.getText');
const getUsersBtn = document.querySelector('.getUsers');
let output = document.querySelector('.output');

getTextBtn.addEventListener('click', () => {
    fetch('getText.txt')
    .then((res) => res.text())
    .then((data) => {
        output.innerHTML = data;
    })
    .catch((err) => console.log(err))
});

getUsersBtn.addEventListener('click', () => {
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        data.forEach(eachUser => {
            output.innerHTML += `
                <ul>
                    <li>ID: ${eachUser.id}</li>
                    <li>NAME: ${eachUser.name}</li>
                    <li>EMAIL: ${eachUser.email}</li>
                </ul>
            `;
        });
    })
});