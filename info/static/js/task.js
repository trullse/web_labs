const books = new Map();

function addBook() {
    const author = document.getElementById('authorInput').value;
    const title = document.getElementById('titleInput').value;
    const year = document.getElementById('yearInput').value;

    books.set(title, {'author': author, 'year': year});

    document.getElementById('authorInput').value = '';
    document.getElementById('titleInput').value = '';
    document.getElementById('yearInput').value = '';

    updateTable();
}

function updateTable() {
    const tableBody = document.getElementById('bookTableBody');

    tableBody.innerHTML = '';

    for (let book of books) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${book[1].author}</td><td>${book[0]}</td><td>${book[1].year}</td>`;
        tableBody.appendChild(row);
    }
}

function searchBooks() {
    const authorToSearch = document.getElementById('authorSearchInput').value;
    const foundBooks = new Map();

    for (let book of books) {
        if (book[1].author.toLowerCase() === authorToSearch.toLowerCase() && book[1].year >= 1960) {
            foundBooks.set(book[0], book[1]);
        }
    }

    updateSearchResultsTable(foundBooks);
}

function updateSearchResultsTable(searchResults) {
    const tableBody = document.getElementById('authorBooksTableBody');

    tableBody.innerHTML = '';

    for (let book of searchResults) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${book[1].author}</td><td>${book[0]}</td><td>${book[1].year}</td>`;
        tableBody.appendChild(row);
    }
}