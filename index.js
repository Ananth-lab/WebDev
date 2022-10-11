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

var items = document.getElementsByClassName('list-group-item')
items[1].textContent = "Hello 2";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "yellow";
for(let i = 0; i <items.length; i++){
    items[i].style.fontWeight = "bold"
}
items[2].style.backgroundColor = "green"