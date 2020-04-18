const DEFAULT_IMAGE_URL =
  "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";

const transformBook = (book = {}) => {
  const { volumeInfo = {} } = book;
  const { title = "", authors = ["Anonymous"], imageLinks = {} } = volumeInfo;
  return {
    title,
    by: authors.join(","),
    imageUrl: imageLinks.thumbnail || DEFAULT_IMAGE_URL,
  };
};

const transformBookInfo = (books) => {
  if (!books) return {};
  const { items = [] } = books;

  return items.map(transformBook);
};

export default transformBookInfo;
