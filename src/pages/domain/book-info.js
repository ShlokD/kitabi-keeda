const transformBook = (book = {}) => {
  const { volumeInfo = {} } = book;
  return {
    title: volumeInfo.title,
    by: volumeInfo.authors.join(","),
    imageUrl: volumeInfo.imageLinks.thumbnail,
  };
};

const transformBookInfo = (books) => {
  if (!books) return {};
  const { items = [] } = books;

  return items.map(transformBook);
};

export default transformBookInfo;
