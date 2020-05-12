import React, { Component } from "react";
import Card from "../components/Card/index";
import API from "../utils/API";

class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getBook()
      .then((res) => this.setState({ books: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1
          style={{
            background: "rgb(198, 224, 247)",
            color: "darkslateblue",
            textAlign: "center",
            padding: "6%",
            marginTop: "8%",
            marginBottom: "0",
            fontSize: "3.5rem",
          }}
        >
          Saved Books
        </h1>
        <div
          style={{
            backgroundColor: "steelblue",
            padding: "10%",
            paddingTop: "3%",
          }}
        >
          {this.state.books.length ? (
            <div>
              {this.state.books.map((book) => (
                <Card
                  key={book._id}
                  image={book.image}
                  title={book.title}
                  subtitle={book.subtitle}
                  description={book.description}
                  authors={book.authors.join(", ")}
                  link={book.link}
                  Button={() => (
                    <button
                      onClick={() => this.handleDeleteBook(book._id)}
                      style={{ background: "steelblue", color: "white" }}
                    >
                      Remove Book
                    </button>
                  )}
                />
              ))}
            </div>
          ) : (
            <h2 style={{ textAlign: "center", color: "white" }}>
              No Saved Books
            </h2>
          )}
        </div>
      </div>
    );
  }
}
export default Saved;
