import axios from "axios";

export default {
    getBooks: function() {
        return axios.get("/api/books");
    },
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    deleteBook: function(id) {
        return axios.post("/api/books/" + id);
    }
}