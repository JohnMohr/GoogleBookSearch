import React, { Component } from 'react';
import SavedItem from "../SavedItem";

class SavedList extends Component {

    render() {
        console.log("Props", this.props.bookState)
        return (
            this.props.bookState.map((book) => (
                <SavedItem
                key={book._id}
                id={book._id}
                title={book.title}
                link={book.link}
                authors={book.authors && book.authors.length > 1 ? book.authors.join(", ") : book.authors}
                image={book.image ? book.image : "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"}
                description={book.description}
                deleteGoogleBook={this.props.deleteGoogleBook}
                />
            ))
        )
    }
}

export default SavedList;