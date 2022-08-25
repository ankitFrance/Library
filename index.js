console.log("hello")

//Constructor
function Book (name, author, type){
    this.name=name;
    this.author=author;
    this.type=type;
}

//Display constructor
function Display(){

}

//Add methods to display prototypes
Display.prototype.add = function(book){
    tableBody = document.getElementById("tableBody")
    let uiString = ` <tr>
                         <td>${book.name}</td>
                         <td>${book.author}</td>
                         <td>${book.type}</td>
                     </tr>`;
    tableBody.innerHTML +=uiString;
}
Display.prototype.clear = function(){
    let libraryForm = document.getElementById("libraryForm")
    libraryForm.reset();
}

Display.prototype.validate = function(book){
    if (book.name.length<3 && book.author.length<3){
         return false
    }
    else{
           return true;
    }
}

Display.prototype.show = function(status, messages, alerts){
   let message = document.getElementById("message");
   message.innerHTML = `<div class="alert ${alerts} alert-dismissible fade show" role="alert">
   <strong> ${status} </strong>: ${messages}
   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
 </div>`

 setTimeout(() => {
    message.innerHTML=''
 }, 3000);

}




//Add submit event listener to form
let libraryForm = document.getElementById("libraryForm")
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e){
    e.preventDefault();
    let name = document.getElementById("bookName").value;
    let author= document.getElementById("author").value;
    let fiction = document.getElementById("fiction");
    let programming= document.getElementById("programming");
    let cooking= document.getElementById("cooking");
    let type;

    if (fiction.checked){
        type= fiction.value
    }

    else if (programming.checked){
        type= programming.value
    }

    else if (cooking.checked){
        type= cooking.value
    }
let book = new Book (name, author, type);
console.log(book);

let display= new Display();
if (display.validate(book)){
    display.add(book);
    display.clear();
    display.show('Success', 'Data added', 'alert-success')
}
else {
    display.show('Error', `Sorry you can't enter the data. The length of author and book name must be greater than 3`, 'alert-danger')
}

}
