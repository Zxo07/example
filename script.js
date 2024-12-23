

document.getElementById('liberry').addEventListener('click', searchBooks);

async function searchBooks() {
    try{
  const searchInput = document.getElementById('dname').value;

  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}`);
  const data = await response.json();

  displayBooks(data.items);

}
catch(error){
    alert(" Տվյալները չեն գտնվել")
}
function displayBooks(books) {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';

  books.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    const author = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown';
    const title = book.volumeInfo.title;
    const image = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/100';
   bookDiv.innerHTML = `
      <img src="${image}" alt="${title}">
      <div>
        <h3>${title}</h3>
        <p><strong>Հեղինակ:</strong> ${author}</p>
      </div>
    `;

    bookList.appendChild(bookDiv);
    const cank=document.querySelector(".cank")
    cank.style.display="none"

  });
}


}



