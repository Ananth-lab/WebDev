//EXAMINING THE DOCUMENT OBJECT

// console.dir(document)

// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// console.log(document.doctype)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// console.log(document.links)
// console.log(document.images)


//SELECTORS

//getelementbyid

// const headerTitle = document.getElementById("header-title");
// headerTitle.innerText  = "Title Manipulated";
// headerTitle.style.borderBottom = "solid 5px #000";


//getelementbyclassname

// var items = document.getElementsByClassName('list-group-item')
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";
// for(let i = 0; i <items.length; i++){
//     items[i].style.fontWeight = "bold"
// }
// items[2].style.backgroundColor = "green"


//getElementByTagName

// var li = document.getElementsByTagName('li')
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";
// for(let i = 0; i <li.length; i++){
//     li[i].style.fontWeight = "bold"
// }
// li[2].style.backgroundColor = "green"

// var li = document.getElementsByTagName('li')
// li[4].textContent = "Bye";
// let li1 = document.getElementsByClassName("item5");
// li1[0].style.backgroundColor = "blue"

let list = document.querySelectorAll(".list-group-item");

// list[1].style.backgroundColor = "green";
// list[2].style.display = "none";

list[1].style.color = "green"

let odd = document.querySelectorAll("li:nth-Child(odd)");
let even = document.querySelectorAll("li:nth-child(even");
for(let i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = "green"
    even[i].style.backgroundColor ="grey"
}