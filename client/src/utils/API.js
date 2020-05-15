import axios from "axios";

export default {
  getBooks: function (q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  getSaved: function () {
    return axios.get("/api/books/");
  },
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
};