import transformBooksInfo from "./book-info";

const getBooksAPI = (searchTerm) =>
  `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

const actions = (store) => {
  async function fetchBooks(_, searchTerm) {
    const response = await fetch(getBooksAPI(searchTerm));
    const booksData = await response.json();
    store.setState({ books: transformBooksInfo(booksData) });
  }

  return {
    fetchBooks,
  };
};

export default actions;
