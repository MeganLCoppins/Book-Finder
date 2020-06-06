import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron/index";
import Form from "../components/Form/index";
import Card from "../components/Card/index";
import API from "../utils/API";

function Home() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  function handleInputChange(e) {
    const { value } = e.target;

    setQuery(value);
  }

  function getBooks() {
    API.getBooks(query)
      .then((res) => setBooks(res.data))
      .catch(() => setBooks([]));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    getBooks();
  }

  function handleSaveBook(id) {
    const book = books.find((book) => book.id === id);
    API.saveBook({
      googleId: book.id,
      image: book.volumeInfo.imageLinks.thumbnail,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      description: book.volumeInfo.description,
      authors: book.volumeInfo.authors,
      link: book.volumeInfo.infoLink,
    }).then(() => getBooks());
  }

  return (
    <div>
      <Jumbotron />
      <div
        style={{
          backgroundColor: "rgba(245, 245, 245, 0.748)",
          padding: "10%",
          paddingTop: "3%",
          marginBottom: "60%",
        }}
      >
        <Form
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
          query={query}
        />
        {books.length ? (
          <div>
            {books.map((book) => (
              <Card
                key={book.id}
                image={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                subtitle={book.volumeInfo.subtitle}
                description={book.volumeInfo.description}
                authors={book.volumeInfo.authors.join(", ")}
                link={book.volumeInfo.infoLink}
                Button={() => (
                  <button
                    onClick={() => handleSaveBook(book.id)}
                    style={{ background: "darkslateblue", color: "white" }}
                  >
                    Save Book
                  </button>
                )}
              />
            ))}
          </div>
        ) : (
          <h2 style={{ textAlign: "center", color: "darkslateblue" }}>
            Search For a Book to Display Results
          </h2>
        )}
      </div>
    </div>
  );
}
export default Home;
