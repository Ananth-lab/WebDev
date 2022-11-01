console.log("person 1: Shows ticket")
console.log("person 2: Shows ticket")

const preMovie = async () => {
    const promiseWifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("ticket")
        }, 3000)
    })
    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
    const addButter = new Promise((resolve, reject) => resolve('button'));
    const getColdDrinks = new Promise((resolve, reject) => resolve("colddrink"))

    const ticket = await promiseWifeBringingTickets;

    console.log(`Wife : I am with the ${ticket}`)
    console.log("Husband : We should get inside")
    console.log("wife : No, I am hungry")


    let popcorn = await getPopcorn

    console.log(`Hunsband : I got some ${popcorn}`)
    console.log(`Wife : Greate! but can i have a lil more butter`)
    console.log(`Hunsband : Hmm! ok`);
    let butter = await addButter


    console.log(`Husband : I got some ${butter} on popcorn`)
    console.log("Husband : Done ? Shall we get inside now?")
    console.log("Wife : No along with these I want to have a cold drink")

    let colddrink = await getColdDrinks
    console.log(`Hubband : I have bought ${colddrink} for you babe`)
    console.log("Wife : Thats awesome!")
    console.log("Husband : Shall we go inside now?")
    console.log("Wife : Sure! Lets goo")

    return ticket;
}
preMovie().then((m) => console.log(m))
console.log("person 4: Shows ticket")
console.log("person 5: Shows ticket")



//Above code using promise.All------------------

console.log("person 1: Shows ticket")
console.log("person 2: Shows ticket")

const preMovie = async () => {
    const promiseWifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("ticket")
        }, 3000)
    })
    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
    const addButter = new Promise((resolve, reject) => resolve('button'));
    const getColdDrinks = new Promise((resolve, reject) => resolve("colddrink"))
    const [popcorn, butter, colddrink] = await Promise.all([getPopcorn, addButter, getColdDrinks])
    console.log(popcorn, butter, colddrink)
    const ticket = await promiseWifeBringingTickets;
    return ticket;
}
preMovie().then((m) => console.log(`person 3: Shows ${m}`))
console.log("person 4: Shows ticket")
console.log("person 5: Shows ticket")




//Converting previous code into Aync function

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
    setTimeout(() => {
        if (posts.length == 0) {
            output = "";
        }
        else {
            posts.forEach(post => {
                output += `<li>${post.title}-last updated ${(new Date().getTime() - post.createdAt) / 1000} seconds ago</li>`
            });
        }
        document.body.innerHTML = output;
    }, 1000)
}

let createPost = (post) => {
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

async function created(){
createPost({
    title: "Post Three",
    body: "I am Post Three",    
})
getPost();
await deletePost();
getPost();
await deletePost();
getPost();
await deletePost();
getPost();
await deletePost();
}
created().catch((error) => console.log(error))







