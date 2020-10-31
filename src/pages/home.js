import { Component } from "preact";
import { useState } from "preact/hooks";
import { Link } from "preact-router/match";

import { connect } from "unistore/preact";
import actions from "./domain/actions";

const LOADING = "LOADING";
const READY = "READY";

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

const BooksList = ({ books }) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {books.map(({ title, by, imageUrl }, index) => {
        return (
          <Link
            data-test="book-list-item"
            href={`/book/${index}`}
            className="flex flex-row pa2 no-underline black max-w-33 shadow-4 bg-white ma2"
          >
            <img className="h-100" src={imageUrl} />
            <div className="flex flex-column mv4 pa4-ns tc">
              <p className="b f3 ma0">{title}</p>
              <p className="f5">By:{by}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

const PaginationButtons = ({
  showNextButton,
  showPreviousButton,
  stepSize,
  handlePagination,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center mv4">
      {showPreviousButton && (
        <button
          className="b--none bg-washed-blue pv3 ph5 shadow-3 mh2 f3 mv2 mv0-ns"
          data-test="prev-page-button"
          onClick={() => handlePagination(-stepSize)}
        >
          Previous
        </button>
      )}
      {showNextButton && (
        <button
          className="b--none bg-washed-blue shadow-3 pv3 ph5 mh2 f3 mv2 mv0-ns"
          data-test="next-page-button"
          onClick={() => handlePagination(stepSize)}
        >
          Next
        </button>
      )}
    </div>
  );
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchIndex: 0,
      page: 0,
      UIState: "READY",
    };

    this.stepSize = 10;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePagination = this.handlePagination.bind(this);
  }

  handleSubmit(searchTerm) {
    this.setState({ searchTerm, searchIndex: 0, page: 0, uiState: LOADING });
    this.props
      .fetchBooks({ searchTerm, searchIndex: this.state.searchIndex })
      .then(() => this.setState({ uiState: READY }));
  }

  handlePagination(increment) {
    const { searchTerm, searchIndex } = this.state;
    const newSearchIndex = searchIndex + increment;
    this.setState({
      searchIndex: newSearchIndex,
      page: newSearchIndex / this.stepSize,
      uiState: LOADING,
    });
    window.scrollTo(0, 0);
    this.props
      .fetchBooks({ searchTerm, searchIndex: newSearchIndex })
      .then(() => this.setState({ uiState: "READY" }));
  }

  render({ books = [] }) {
    return (
      <div className="flex flex-column h-100 items-center pa3">
        <h1 data-test="page-title" className="f2 tc ma2">
          KITABI KEEDA
        </h1>
        <SearchBar handleSubmit={this.handleSubmit} />
        <div
          className={`spinner ${
            this.state.uiState === "LOADING" ? "db" : "dn"
          }`}
        ></div>
        <div className={`${this.state.uiState === READY ? "o-100" : "o-60"}`}>
          <BooksList books={books} />
          <PaginationButtons
            stepSize={this.stepSize}
            showNextButton={books.length > 0}
            showPreviousButton={this.state.page > 0}
            handlePagination={this.handlePagination}
          />
        </div>
      </div>
    );
  }
}

export default connect("books", actions)(Home);
