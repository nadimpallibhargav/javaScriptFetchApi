// buttons
const getTextBtn = document.querySelector('.getText');
const getUsersBtn = document.querySelector('.getUsers');
const getPostsBtn = document.querySelector('.getPosts');
const form = document.querySelector('#postForm');

// output div 
let output = document.querySelector('.output');
 

//////////////////////////////////////////////////////////////////////// fetching local TEXT file data button
getTextBtn.addEventListener('click', () => {
    fetch('getText.txt')
    .then((res) => res.text())
    .then((data) => {
        output.innerHTML = `
            <h2>Data Fetched from the Local Text File</h2>
            <p class="getTextContent">${data}</p>
        `;
    })
    .catch((err) => console.log(err))
});


//////////////////////////////////////////////////////////////////////// fetching local JSON file data button
getUsersBtn.addEventListener('click', () => {
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        output.innerHTML = `<h2>Data Fetched from the Local JSON File</h2>`;
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


//////////////////////////////////////////////////////////////////////// fetching external API data
getPostsBtn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        output.innerHTML = `<h2>Data Fetched from the External API</h2>`;
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


//////////////////////////////////////////////////////////////////////// post request to the api for adding the new post and content
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = document.querySelector('#title').value;
    let body = document.querySelector('#body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',                                         // http request method
        headers: {
            'Accept': 'application/json, text/plain, */*',      // indicates what kind of response a client can accept from the server
            'Content-type': 'application/json'                  // provides the actual content type of the returned content
        },
        body: JSON.stringify({postTitle:title, content:body})   // convert the user input text to JSON format
    })
    .then((res) => res.json())
    .then((data) => console.log(data))

});