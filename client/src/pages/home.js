import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/index";
import Form from "../components/Form/index";
import Card from "../components/Card/index";
import API from "../utils/API";

class Home extends Component {
  state = {
    books: [],
    query: "",
  };


  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  getBooks = () => {
    API.getBooks(this.state.query)
      .then(res => 
        this.setState({ books: res.data }))
      .catch(() =>
        this.setState({
          books: []
        })
      );
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.getBooks()
  };

  handleSaveBook = (id) => {
    const book = this.state.books.find(book => book.id === id);
    API.saveBook({
      googleId: book.id,
      image: book.volumeInfo.imageLinks.thumbnail,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      description: book.volumeInfo.description,
      authors: book.volumeInfo.authors,
      link: book.volumeInfo.infoLink
    }).then(() => this.getBooks());
  };

  render() {
    return (
      <div
      >
        <Jumbotron />
        <div
        style={{
          backgroundColor: "steelblue",
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
              Button = { () => (
                <button
                onClick={() => this.handleSaveBook(book.id)}
                style={{background: "steelblue", color:"white"}}
                >
                  Save Book
                </button>
              )}
            />
          ))}
        </div>
        ) : (
          <h2 style={{textAlign: "center", color: "white"}}>Search For a Book to Display Results</h2>
        )}
        </div>
      </div>
    );
  }
}
export default Home;
