import axios from "axios";

export default {
    getBooks: function(query) {
        return axios.get("/api/google", { params: { query: "title:" + query } });
    },
    getSaved: function() {
        return axios.get("/api/books/");
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
}