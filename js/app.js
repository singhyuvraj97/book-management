let Book = function(title,author,isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

let UI = function(){
  
}

UI.prototype.addBook = function(book){
  let tableBody = document.getElementsByTagName("tbody")[0];
  let tableRow = document.createElement("tr");
  tableRow.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  `;
  tableBody.appendChild(tableRow);
}

UI.prototype.clearInputs = function(book){
  let formInputs = document.querySelectorAll("input[type='text']");
  console.log(formInputs);
  formInputs.forEach(function(ele){
    console.log(ele);
    ele.value = "";
  })
}


let submitBtn = document.querySelector("input[type='submit']");

//event listener
submitBtn.addEventListener("click",handleData);

//event handlers
function handleData(e){
  console.log(e.target);
  let bookTitle = document.getElementById("bookTitle");
  let bookAuthor = document.getElementById("bookAuthor");
  let bookIsbn = document.getElementById("bookIsbn");


  console.log(`title of the book is ${bookTitle.value}`);
  console.log(`author of the book is ${bookAuthor.value}`);
  console.log(`isbn of the book is #${bookIsbn.value}`);

  let title = bookTitle.value;
  let author = bookAuthor.value;
  let isbn = bookIsbn.value;

  let book1 = new Book(title,author,isbn);

  console.log(book1);

  let ui = new UI();
  ui.addBook(book1);
  ui.clearInputs();

  e.preventDefault();
}

// let ui = new UI();
// ui.clearInputs();