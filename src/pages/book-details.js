import { Component } from "preact";
import { connect } from "unistore/preact";
import actions from "./domain/actions";
import FullStar from "../../assets/star-full.svg";
import EmptyStar from "../../assets/star-empty.svg";

const Stars = ({ rating }) => {
  const filledStars = new Array(Math.round(rating)).fill(0);
  const emptyStars = new Array(5 - filledStars.length).fill(0);

  return (
    <div className="flex">
      {filledStars.map(() => (
        <img
          className="b--solid b--black"
          height={96}
          width={96}
          src={FullStar}
        />
      ))}
      {emptyStars.map(() => (
        <img
          className="b--solid b--black"
          height={96}
          width={96}
          src={EmptyStar}
        />
      ))}
    </div>
  );
};
class BookDetails extends Component {
  render({ book }) {
    const {
      title,
      by,
      imageUrl,
      description,
      averageRating = 0,
      buyLink,
      availableForSale,
    } = book;

    return (
      <div className="flex items-center justify-center tc h-100 pa4">
        <img
          className="w-80 shadow-4 bw2 pa2 b--washed-blue"
          src={imageUrl}
        ></img>
        <div className="flex flex-column items-center justify-center pa3">
          <h1 className="bb f1">{title}</h1>
          <p className="f2">{by}</p>
          <p className="f4">{description}</p>
          <Stars rating={averageRating} />
          {availableForSale && (
            <a
              className="bg-washed-blue black f4 pa4 no-underline"
              href={buyLink}
            >
              Buy Now
            </a>
          )}
        </div>
      </div>
    );
  }
}

const getSelectedBook = (state, params) => {
  const bookId = Number(params.bookId);
  return { book: state.books[bookId] };
};

export default connect(getSelectedBook, actions)(BookDetails);
