let posts = [
    {
        title: "Post One",
        body: "I am Post One",
        createdAt: new Date().getTime()
    },
    {
        title: "Post Two",
        body: "I am Post Two",
        createdAt: new Date().getTime()
    }
]


let user = {
    username: "Crazy",
    lastactice: new Date().getTime()
}


function getPost() {
    let output = "";
    if (posts.length == 0) {
        output = "";
    }
    else {
        posts.forEach(post => {
            output += `<li>${post.title}-last updated ${(new Date().getTime() - post.createdAt) / 1000} seconds ago</li>`
        });
    }
    document.body.innerHTML = output;
}
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ ...post, createdAt: new Date().getTime() });
            let error = false;
            if (error) {
                reject("Error! Something went wrong")
            }
            else {
                resolve(post)
            }
        }, 0)
    })
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                resolve(posts.pop())
            }
            else {
                reject("Error! The array is empty now!")
            }
        }, 1000)
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastactice = new Date().getTime()
            resolve(user.lastactice)
        },1000)
    });
}

console.log(`Before creating a new post user,s last activity was at ${user.lastactice}`)

// createPost({
//     title: "Post Three",
//     body: "I am Post Three",
// }).then(console.log(posts)).catch((err) => console.log(err))

// updateLastUserActivityTime().then((value)=>console.log(`Current last seen is ${value}`)).catch((err) => console.log(err))

// Promise.all([createPost,updateLastUserActivityTime]).then(console.log(posts), console.log(user.lastactice)).catch(error => console.log(error))

Promise.all([createPost({
    title: "Post Three",
    body: "I am Post Three",
}),updateLastUserActivityTime]).then(deletePost, console.log(posts),console.log(`New last seen is ${user.lastactice}`)).catch(error => console.log(error))


