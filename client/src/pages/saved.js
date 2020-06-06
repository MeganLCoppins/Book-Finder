import React, { useState, useEffect } from "react";
import Card from "../components/Card/index";
import API from "../utils/API";

function Saved() {
  const [books, setBooks] = useState([]);

  useEffect(()=> {
    getSaved();
  }, []) 


  function getSaved() {
    API.getSaved()
      .then((res) => setBooks(res.data ))
      .catch((err) => console.log(err));
  };

  function handleDeleteBook(id) {
    API.deleteBook(id).then((res) => getSaved());
  };

    return (
      <div>
        <h1
          style={{
            background: "rgba(245, 245, 245, 0.748)",
            color: "darkslateblue",
            textAlign: "center",
            padding: "2%",
            marginTop: "6%",
            marginBottom: "0",
            fontSize: "3.5rem",
          }}
        >
          Saved Books
        </h1>
        <div
          style={{
            backgroundColor: "rgba(245, 245, 245, 0.748)",
            padding: "10%",
            paddingTop: "2%",
            marginBottom: "15%",
          }}
        >
          {books.length ? (
            <div>
              {books.map((book) => (
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
                      onClick={() => handleDeleteBook(book._id)}
                      style={{ background: "darkslateblue", color: "white" }}
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
export default Saved;