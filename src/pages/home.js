import { Component } from "preact";
import { connect } from "unistore/preact";
import actions from "./domain/actions"

class Home extends Component {
    render({ books }) {
        return <p>{books.length}</p>
    }
}



export default connect('books', actions)(Home);
