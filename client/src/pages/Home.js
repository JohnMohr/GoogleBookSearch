import React, { Component } from 'react';
import { Container } from "../components/Grid";
import Nav from "../components/Nav";
import Jumbtotron from "../components/Jumbotron"
import { Input, SubmitBtn } from "../components/Search";
import ResultList from "../components/ResultList";
import API from "../utils/API";

class Home extends Component {

    state = {
        books: [],
        search: ""
    };

    searchBooks = () => {
        API.googleBooks(this.state.search)
            .then(res => {
                console.log("res data", res.data.items)
                this.setState({
                    books: res.data.items,
                    search: ""
                })
            }).catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks();
    };
    saveGoogleBook = currentBook => {
        console.log("book:", currentBook);
        API.saveBook({
            id: currentBook.id,
            title: currentBook.title,
            authors: currentBook.authors,
            description: currentBook.description,
            image: currentBook.image,
            link: currentBook.link
        })
            .then(res => console.log("BOOK SAVED", res))
            .catch(err => console.log("THIS IS (NOT) THE WAY:", err));
    }

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                    <Jumbtotron />
                    <form>
                        <h5>Search through books</h5>
                        <Input
                            value={this.state.search}
                            onChange={this.handleInputChange}
                            name="search"
                            placeholder="e.g. The Hobbit"
                        />
                        <SubmitBtn onClick={this.handleFormSubmit} />
                    </form>

                    {this.state.books.length ? (
                        <ResultList
                            bookState={this.state.books}
                            saveGoogleBook={this.saveGoogleBook}>
                        </ResultList>
                    ) : (
                            <div>
                                <hr />
                                <p style={{ fontstyle: "italic" }}>No Results</p>
                            </div>
                        )}
                </Container>
            </div>
        )
    }
}

export default Home