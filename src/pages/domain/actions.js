import transformBooksInfo from "./book-info";

const getBooksAPI = ({ searchTerm, searchIndex }) =>
  `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${searchIndex}`;

const actions = (store) => {
  async function fetchBooks(_, { searchTerm, searchIndex }) {
    const response = await fetch(getBooksAPI({ searchTerm, searchIndex }));
    const booksData = await response.json();
    store.setState({ books: transformBooksInfo(booksData) });
  }

  const setSelectedBook = (index) => {
    store.setState({ selectedBook: index });
  };

  return {
    fetchBooks,
    setSelectedBook,
  };
};

export default actions;
