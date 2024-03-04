// Difference between Promise and Async & Await code

//=========================================================================================
//Promise - 1
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log); 
//=========================================================================================
//Async & Await -1 
async function fetchUsers(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    console.log(data);
}
fetchUsers();
//=========================================================================================
//Promise - 2
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then( results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2])
}).catch(() => console.log('Error in promise'));
//=========================================================================================
//Async & Await -1 
const getData = async function(){
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url => 
             fetch(url).then(resp => resp.json())
        ))
            console.log('users', users);
            console.log('posts', posts);
            console.log('albums', albums)
    } catch (error) {
            console.log('oops', error)
    }   
}
//=========================================================================================
