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

// let list = document.querySelectorAll(".list-group-item");

// list[1].style.backgroundColor = "green";
// list[2].style.display = "none";

// list[1].style.color = "green"

// let odd = document.querySelectorAll("li:nth-Child(odd)");
// let even = document.querySelectorAll("li:nth-child(even");
// for(let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = "green"
//     even[i].style.backgroundColor ="grey"
// }

//TRAVERSING NODE


let itemList = document.querySelector("#items");
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = "gray";
// console.log(itemList.parentNode.parentNode)
// console.log(itemList.parentNode.parentNode.parentNode)

//parent element
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = "grey"

//lastElementChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.style.color = "red"

//LastChild
// console.log(itemList.lastChild)

//firstelementchild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.style.color= "red"

//firstChild
//console.log(itemList.firstChild)

//nextsibling
//console.log(itemList.nextSibling)

//nextElementSibling
// console.log(itemList.nextElementSibling);
// itemList.nextElementSibling.style.color ="red"

//previousSibling
// console.log(itemList.previousSibling.previousSibling)
// itemList.previousSibling.previousSibling.style.color = "red"

//previousElementSibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = "red";

//createElement
// let newDiv = document.createElement("div");
// newDiv.className= "Hi";
// newDiv.id = "hello";
// newDiv.setAttribute("title","Boom");
// let newDivText = document.createTextNode("Hello I am new to this");
// newDiv.appendChild(newDivText)
// console.log(newDiv)
// //inserting to DOM

// let container = document.querySelector(".container");
// let heading = document.querySelector("#header-title")
// newDiv.style.fontSize ="35px";
// container.insertBefore(newDiv,heading)

