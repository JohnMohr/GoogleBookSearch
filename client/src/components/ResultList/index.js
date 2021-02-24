import React, { Component } from 'react';
import ResultItem from "../ResultItem";

class ResultList extends Component {

    render(){
        console.log("props", this.props.bookState)
        return(
            this.props.bookState.map((book)=>{
                <ResultItem
                key={book.id}
                id={book.id}
                title={book.volumeInfo.title}
                link={book.voilumeInfo.previewLink}
                authors={book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(", ") : book.volumeInfo.authors}
                image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"}
                description={book.volumeInfo.description}
                saveGoogleBook={this.props.saveGoogleBook}
                />
            })
        )
    }
}

export default ResultList;