const axios = require("axios");
const db = require("../models");

// define methods for googleController
module.exports = {
    // findAll searches google books API and only returns book that haven't been saved already
    findAll: function(req, res) {
        const { query: params } = req;
        axios
          .get("https://www.googleapis.com/books/v1/volumes?q=", { params }
          )
          .then(results =>
            results.data.items.filter(
              result =>
                result.volumeInfo.title &&
                result.volumeInfo.infoLink &&
                result.volumeInfo.authors &&
                result.volumeInfo.description &&
                result.volumeInfo.imageLinks &&
                result.volumeInfo.imageLinks.thumbnail
            )
          )
          .then(apiBooks =>
            db.Book.find().then(dbBooks =>
              apiBooks.filter(apiBook =>
                dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
              )
            )
          )
          .then(books => res.json(books))
          .catch(err => res.status(422).json(err));
      }
};