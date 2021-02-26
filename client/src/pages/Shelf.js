import React, { Component } from 'react';
import { Container } from "../components/Grid";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SavedList from "../components/SavedList";

class Shelf extends Component {

    state = {

        savedBooks: []
    }
    componentDidMount = () => {
        this.getBooks()
    }

    deleteGoogleBook = currentBook => {
        API.deleteBook(currentBook.id)
            .then(res => {
                console.log("deleted:", res);
                this.getBooks();
            })
            .catch(err => {
                console.log("Error:", err);
            })
    }

    getBooks = () => {
        API.getBooks()
            .then(res => {
                this.setState({
                    savedBooks: res.data
                })
                console.log("res:", res)
            })
            .catch(err => {
                console.log("Error:", err);
            })
    }

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                    <Jumbotron />
                    {this.state.savedBooks.length ? (
                        <SavedList
                            bookState={this.state.savedBooks}
                            deleteGoogleBook={this.deleteGoogleBook}
                        >
                        </SavedList>
                    ) : (
                            <h5>No Results</h5>
        
                        )}
        
                </Container>
            </div>
        )
        }
         


}


export default Shelf;