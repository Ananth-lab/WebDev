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
        }, 1000)
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


createPost({
    title: "Post Three",
    body: "I am Post Three"
})
.then(() => {
createPost({
    title: "Post Four",
    body: "I am Post Four"
})
    .then(() => {
        getPost();
        deletePost().then(() => {
            getPost();
            deletePost().then(() => {
                getPost();
                deletePost().then(() => {
                    getPost();
                    deletePost().then(() => {
                        getPost();
                        deletePost().then(() => {})
                        .catch(error => console.log(error))
                    })
                        .catch(error => console.log(error))
                })
                    .catch(error => console.log(error))
            })
                .catch(error => console.log(error))
        })
            .catch(error => console.log(error))
    })
    .catch(error => console.log(error));
})
.catch(error => console.log(error));




