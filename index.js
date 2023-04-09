const searchInput = document.getElementById("search-input");
const bookList = document.getElementById("book-list");
const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");
const bookPublisher = document.getElementById("book-publisher");
const bookPublishedDate = document.getElementById("book-published-date");
const bookDescription = document.getElementById("book-description");
const bookReviews = document.getElementById("book-reviews");
const bookCover = document.getElementById("book-cover");

const API_URL = "https://www.googleapis.com/books/v1/volumes";

// Search for books by keyword
function searchBooks(query) {
  const url = `${API_URL}?q=${query}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      bookList.innerHTML = "";
      data.items.forEach((item) => {
        const book = document.createElement("li");
        const bookLink = document.createElement("a");
        const bookImage = document.createElement("img");

        bookLink.href = "#";
        bookLink.addEventListener("click", () => {
          displayBookDetails(item);
        });

        if (item.volumeInfo.imageLinks) {
          bookImage.src = item.volumeInfo.imageLinks.thumbnail;
        } else {
          bookImage.src = "https://via.placeholder.com/128x192.png?text=No+Cover";
        }

        bookLink.appendChild(bookImage);
        book.appendChild(bookLink);
        bookList.appendChild(book);
      });
    })
    .catch((error) => console.log(error));
}