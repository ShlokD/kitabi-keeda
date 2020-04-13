import { Component } from "preact";
import { useState } from "preact/hooks";
import { connect } from "unistore/preact";
import actions from "./domain/actions";

const useInput = () => {
  const [text, setText] = useState("");
  const onEnterText = (ev) => setText(ev.target.value);
  return { text, onEnterText };
};

const SearchBar = ({ handleSubmit }) => {
  const { text: searchText, onEnterText } = useInput();

  return (
    <input
      className={`b b--transparent br-pill pa3 ma2 animate-opacity w-80 search-bar moon-gray`}
      data-test="search-input"
      placeholder="Search for titles, authors, topics..."
      value={searchText}
      onInput={onEnterText}
      onKeyUp={(ev) => {
        if (ev.keyCode === 13) {
          handleSubmit(searchText);
        }
      }}
    ></input>
  );
};

const FeaturedImage = () => (
  <img
    className="w-100 w-80-ns pa2 shadow-4"
    data-test="featured-image"
    src="https://images.unsplash.com/photo-1568047571827-8c46fe611345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
  />
);

class BooksList extends Component {
  render({ books }) {
    return (
      <div className="flex flex-wrap w-80">
        {books.map(({ title, by, imageUrl }) => {
          return (
            <div
              data-test="book-list-item"
              className="flex flex-column pa2 w-33"
            >
              <img className="h-50" src={imageUrl} />
              <div>
                <p className="b f4">{title}</p>
                <p className="f5">By:{by}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

class Home extends Component {
  render({ books = [], fetchBooks }) {
    return (
      <div className="flex flex-column h-100 items-center pa3">
        <h1 data-test="page-title" className="f2 tc ma2">
          KITABI KEEDA
        </h1>
        <FeaturedImage />
        <SearchBar handleSubmit={fetchBooks} />
        <BooksList books={books} />
      </div>
    );
  }
}

export default connect("books", actions)(Home);
