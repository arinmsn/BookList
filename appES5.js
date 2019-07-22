// Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor
function UI() {}

// book is the object
UI.prototype.addBooktoList = function(book){
    const list = document.getElementById('book-list');

    // Create 'tr'
    const row = document.createElement('tr');
 
    // Insert columns
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">
        <img src="https://img.icons8.com/color/24/000000/delete-sign.png">
        </a></td>
    `
    list.appendChild(row);
}

// Clear Fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}


// Even Listeners
document.getElementById('book-form').addEventListener('submit', function(e) {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const isbn = document.getElementById('isbn').value

    // Instantiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    // Add the book to list
    ui.addBooktoList(book);
    
    // Clear fields
    ui.clearFields();

    e.preventDefault();
});