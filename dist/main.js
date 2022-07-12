const getTextBtn = document.querySelector('.getText');
const getUsersBtn = document.querySelector('.getUsers');
const getPostsBtn = document.querySelector('.getPosts');
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

getPostsBtn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        data.forEach(eachPost => {
            output.innerHTML += `
                <div class="postCard">
                    <h3>${eachPost.title}</h3>
                    <p>${eachPost.body}</p>
                </div>
            `;
        });
    })
});