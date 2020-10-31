const DEFAULT_IMAGE_URL =
  "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";

const transformBook = (book = {}) => {
  console.log(book);
  const { volumeInfo = {}, saleInfo = {} } = book;
  const {
    title = "",
    authors = ["Anonymous"],
    imageLinks = {},
    description = "",
    averageRating = 0,
  } = volumeInfo;

  console.log(averageRating);

  const { buyLink = "", saleability } = saleInfo;

  return {
    title,
    by: authors.join(","),
    imageUrl: imageLinks.thumbnail || DEFAULT_IMAGE_URL,
    description,
    averageRating,
    buyLink,
    availableForSale: saleability === "FOR_SALE",
  };
};

const transformBookInfo = (books) => {
  if (!books) return {};
  const { items = [] } = books;

  return items.map(transformBook);
};

export default transformBookInfo;
