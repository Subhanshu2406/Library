const addBook = document.querySelector('.addBook');
const dialogBox = document.querySelector('.dialogBox');
const form = document.querySelector('form');


addBook.addEventListener("click", (e) => {
    dialogBox.showModal();
});

form.addEventListener("submit", (e)  => {
    e.preventDefault();
console.log("Form submitted");
    const titlename = document.querySelector('.titleinput').value;
    const authorname = document.querySelector('.authorinput').value;
    const read = document.querySelector('.checkboxinput').checked;

    createBook(titlename,authorname,read);

    form.reset();
    dialogBox.close();
})

function createBook(titlename,authorname,isRead){
    const newBook = document.createElement("div"); 
    const author = document.createElement("div");
    const title = document.createElement("div");
    const readBox = document.createElement("input");

    newBook.classList.add("book"); 

    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(readBox);
    document.querySelector(".mainContainer").appendChild(newBook);

    readBox.type = "checkbox";
    readBox.checked = isRead;
    readBox.disabled = true;

    title.textContent = `Title : ${titlename}`;
    author.textContent = `Author : ${authorname}`;

}
