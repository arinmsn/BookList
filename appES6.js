class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');

        // Create 'tr'
        const row = document.createElement('tr');
     
        // Insert columns
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">
            <img class="delete" src="https://img.icons8.com/color/24/000000/delete-sign.png">
            </a></td>
        `;
        
        list.appendChild(row);
    }

    showAlert(message, className) {
        // Create 'div' element
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));

        // Get the parent element 
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        // Inserting form (div, before 'form')
        container.insertBefore(div, form);

        // Timeout form after 3 seconds
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target) {
        if(target.className === 'delete') {
            // parentElement(td) .. then we move up ... parentElement(tr)
            target.parentElement.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Even Listener for adding a book
document.getElementById('book-form').addEventListener('submit', function(e) {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const isbn = document.getElementById('isbn').value

    // Instantiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    // Validation
    if(title === '' || author === '' || isbn === ''){
        // Error notification
        ui.showAlert('Please, ensure all fields are filled out!', 'error');
    } else {
        // Add the book to list
        ui.addBooktoList(book);

        // When adding book is scuccessful
        ui.showAlert('Book was added!', 'success');
    
        // Clear fields
        ui.clearFields();
    }

    e.preventDefault();
});

// Event Listener for deleting book
document.getElementById('book-list').addEventListener('click', function(e) {
    // Instantiate UI
    const ui = new UI();
    ui.deleteBook(e.target);

    // Notify user the book was deleted
    ui.showAlert('Book was removed!', 'success');
    e.preventDefault();
});