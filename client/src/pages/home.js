import React, { Component } from "react";
import Form from "../components/Form/index";
import Card from "../components/Card/index";
import API from "../utils/API";

class Home extends Component {
  state = {
    books: [],
    query: "",
    message: "Search For A Book To Begin!",
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    API.getBooks(this.state.query)
      .then((res) => this.setState({ books: res.data }))
      .catch(() =>
        this.setState({
          books: [],
          message: "No new books, try a different search",
        })
      );
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "lavender",
          padding: "10%",
          paddingTop: "3%",
        }}
      >
        <Form
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          query={this.state.query}
        />
        {this.state.books.length ? (
        <div>
          {this.state.books.map(book => (
            <Card
              key={book.id}
              image={book.volumeInfo.imageLinks.thumbnail}
              title={book.volumeInfo.title}
              subtitle={book.volumeInfo.subtitle}
              description={book.volumeInfo.description}
              authors={book.volumeInfo.authors.join(", ")}
              link={book.volumeInfo.infoLink}
            />
          ))}
        </div>
        ) : (
          <h2>Search a Book to Display Results</h2>
        )}
      </div>
    );
  }
}
export default Home;
