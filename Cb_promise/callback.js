let posts = [
    { title: 'Post one', body: 'this is post one', createdAt: new Date().getTime() },
    { title: 'Post two', body: 'this is post two', createdAt: new Date().getTime() }
]
let output;
let lastedit = new Date();
let intervalId = 0;
let intervalId2 = 0;

function getPosts() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        output = "";
        posts.forEach((element) => {
            output += `<li>${element.title} - last updated ${(new Date().getTime() - element.createdAt) / 1000} seconds ago</li>`;
        });
        document.body.innerHTML = output
    }, 1000)
}


function lastEditedInSecondsAgo() {
    clearInterval(intervalId2)
    intervalId2 = setInterval(() => {
        console.log(`Last edited ${(new Date().getTime() - lastedit.getTime()) / 1000} seconds ago`)
    }, 1000)
}

function createPost(element, callback) {
    setTimeout(() => {
        posts.push({ ...element, createdAt: new Date().getTime() });
        callback();
    }, 1000)
}


function create4thPost(element, callback) {
    setTimeout(() => {
        posts.push({ ...element, createdAt: new Date().getTime() });
        callback()
    }, 6000)
}

lastEditedInSecondsAgo()
createPost({ title: "Post three", body: "This is post three" }, getPosts)
create4thPost({ title: "Post fourth", body: "This is post fourth", createdAt: new Date().getTime() }, getPosts)

let promise1 = 10;
let promise2 = new Promise((resolve,reject) => setTimeout(() => {
    resolve("Hi")
}, 2000))
let promise3 = Promise.resolve("Goood bye")

Promise.all([promise1,promise2,promise3]).then(values => console.log(values))