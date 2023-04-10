# Book-Search-App
Project Name: Book Search App
Author: Dixon Mogaka

Description
This project is a JavaScript program that uses the Google Books API to search for books based on user input and display the results on the web page. It also allows users to click on a book to display its details.

The program begins by selecting several HTML elements using the getElementById method, which selects an element with the given ID attribute from the HTML document. These elements are:

searchInput: an input element where users can type their search query
bookList: an unordered list element where search results will be displayed
bookTitle, bookAuthor, bookPublisher, bookPublishedDate, bookDescription, bookReviews, and bookCover: various elements where book details will be displayed when a user clicks on a book from the search results
The program also sets a constant API_URL to the URL of the Google Books API.

The searchBooks function is called when the user submits a search query. It takes a query parameter, which is the user's search query. The function constructs a URL for the API request by concatenating the API_URL constant with the user's query using string interpolation. It then uses the fetch function to make a GET request to the API with the constructed URL.

When the API response is received, the function first clears the bookList element by setting its innerHTML property to an empty string. It then iterates over each book item in the response data using a forEach method. For each item, the function creates a new list item element (<li>), a link element (<a>), and an image element (<img>). It sets the link element's href attribute to "#", which makes it behave as a clickable link without navigating to a different page. It also adds an event listener to the link element that calls the displayBookDetails function with the current book item when clicked.

If the current book item has an image link, the function sets the src attribute of the image element to the book's thumbnail image link. Otherwise, it sets it to a placeholder image. The function then appends the image element to the link element, and the link element to the list item element. Finally, it appends the list item element to the bookList element to display the book in the search results.

The displayBookDetails function is called when a user clicks on a book from the search results. It takes a bookData parameter, which is an object representing the book's data from the API response. The function sets the text content of the bookTitle, bookAuthor, bookPublisher, bookPublishedDate, and bookDescription elements to the corresponding data from the bookData object. If the book has an image link, it sets the src attribute of the bookCover element to the book's thumbnail image link. Otherwise, it sets it to a placeholder image. The function also sets the text content of the bookReviews element to the book's average rating and number of reviews, if available, or to a message indicating that no reviews are available.

Finally, the program adds an event listener to the HTML form element using the querySelector method, which selects the first element in the document that matches a CSS selector. The event listener listens for the submit event, which is triggered when the user submits the search form. When the event is triggered, the listener prevents the default form submission behavior, gets the user's search query from the searchInput element, calls the searchBooks function with the query, and resets the form input to an empty string using the reset method of the event target.

Project Setup Instructions:
    1. Open a terminal or command prompt on your local machine.
    2. Navigate to the directory where you want to clone the repository using the "cd" command.
    3. Type "git clone https://github.com/DixonMch/Book-Search-App.git" to clone the repository to your local machine.
    4. Once the repository is cloned, navigate to the project directory of the project using "cd phase-1-final-project" command.
    5. Open the "index.html" file in a web browser to view the Book Search App.
    6. To search for a book, enter a keyword in the search box and click the "Search" button.


Live Site
You can view the live site here, https://dixonmch.github.io/Book-Search-App/.

Copyright and License
This project is licensed under the Dixon License. You are free to use, modify, and distribute the code as long as you include the original copyright and license information.
