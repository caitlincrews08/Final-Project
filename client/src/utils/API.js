import axios from "axios";

export default {
  // Gets all books
  getMemes: function () {
    return axios.get("/api/memes");
  },
  // Gets the book with the given id
  getMeme: function (id) {
    return axios.get("/api/memes/" + id);
  },
  // Deletes the book with the given id
  deleteMeme: function (id) {
    return axios.delete("/api/memes/" + id);
  },
  // Saves a book to the database
  saveMeme: function (memeData) {
    return axios.post("/api/memes", memeData);
  }
};