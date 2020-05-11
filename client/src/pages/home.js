import React, { Component } from "react";
import Form from "../components/Form/index";
import API from "../utils/API";

class Home extends Component {
  state = {
    books: [],
    query: "",
    message: "Search For A Book To Begin!"
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = e => {
    e.preventDefault();
      API.getBooks(this.state.query)
        .then(res => this.setState({books : res.data})
        )
        .catch(() => 
          this.setState({
            books: [],
            message: "No new books, try a different search"
          })
        );
  }

  render () {
    return(
    <div>
        <Form 
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            query={this.state.query}
        />
        <div>
          {this.state.books.length ? (
              <div>
                  {this.state.books.map(book => (
                      <strong>
                          {book.volumeInfo.title}
                      </strong>
                  ))}
              </div>
          ) : (
              <h2>No Results to Display</h2>
          )}
      </div> 
      {/* <div
        className="input-group mb-3"
        style={{
          backgroundColor: "lavender",
          padding: "10%",
          paddingTop: "3%",
          paddingBottom: "20%",
          marginBottom: "10%",
        }}
      >
        <input
          onChange={handleInputChange}
          name="query"
          value={formObj.query}
          type="text"
          className="form-control"
          placeholder="Book's Name"
          aria-label="Book Name"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            disabled={!formObj}
            onClick={handleFormSubmit}
            style={{
              backgroundColor: "lavender",
              borderColor: "purple",
              color: "purple",
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div>
          {books.length ? (
              <div>
                  {books.map(book => (
                      <strong>
                          {book.volumeInfo.title}
                      </strong>
                  ))}
              </div>
          ) : (
              <h2>No Results to Display</h2>
          )}
      </div> */}
    </div>
    );
  };
}
export default Home;
