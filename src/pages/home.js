import { Component } from "preact";
import { connect } from "unistore/preact";
import actions from "./domain/actions";

const SearchBar = () => {
  return (
    <input
      className={`b b--transparent br-pill pa3 ma2 animate-opacity w-80 search-bar moon-gray`}
      data-test="search-input"
      placeholder="Search for titles, authors, topics..."
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

const BooksList = () => <div>List of books here</div>;

class Home extends Component {
  render({ books }) {
    return (
      <div className="flex flex-column h-100 items-center pa3">
        <h1 data-test="page-title" className="f2 tc ma2">
          KITABI KEEDA
        </h1>
        <FeaturedImage />
        <SearchBar />
        <BooksList />
      </div>
    );
  }
}

export default connect("books", actions)(Home);
