let userChoice="";
let booklist=document.getElementById("book-list");
let buttons=document.getElementById("done");
let items=document.getElementById("bookname");
let booksearch=document.getElementById("search-book");
let bookSearch=document.getElementById("book-search");
let searchButton=document.getElementById("search");
let searchList=[];
buttons.addEventListener("click",()=>{
    userChoice=items.value;
    addBook();
});

searchButton.addEventListener("click",()=>{
    searchBook();
})

const addBook=()=>{
    searchList.push(userChoice);
    console.log(searchList);
    booklist.innerHTML+=`<li>${userChoice}</li>`
};

const searchBook=()=>{
    let sear=searchList.filter((val)=>{
        return val===bookSearch.value;
    });

    searched.innerHTML = '';
    sear.forEach(book => {
        let li = document.createElement('li');
        li.className = 'nn';
        li.textContent = book;
        });

        searched.appendChild(li);
        searched.appendChild(remBtn);
    };




