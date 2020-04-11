import { Component } from "preact";
import { connect } from "unistore/preact";
import actions from "./domain/actions";

class BookDetails extends Component {
  render() {
    return <p>Book Details</p>;
  }
}

export default connect("selectedBook", actions)(BookDetails);
