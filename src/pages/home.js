import { Component } from "preact";
import { connect } from "unistore/preact";
import actions from "./domain/actions";
import MagnifyingGlass from "../../assets/magnifying-glass.svg";
import FeaturedImageCarousel from "../../assets/books.jpg";

const SearchBar = () => (
  <div
    data-test="search-bar"
    className="flex justify-center items-center moon-gray w-100"
  >
    <img
      data-test="search-icon"
      className="ma2"
      alt="Search for Books"
      src={MagnifyingGlass}
    />
    <h1 data-test="page-title" className="f3 tc ma2">
      KITABI KEEDA
    </h1>
  </div>
);
const FeaturedImage = () => (
  <img data-test="featured-image" src={FeaturedImage} />
);
const SearchText = () => <div>Search For Books To Get Started</div>;
const BooksList = () => <div>List of books here</div>;

class Home extends Component {
  render({ books }) {
    return (
      <div className="flex flex-column h-100 pa4 items-center">
        <SearchBar />
        <FeaturedImage />
        <SearchText />
        <BooksList />
      </div>
    );
  }
}

export default connect("books", actions)(Home);
