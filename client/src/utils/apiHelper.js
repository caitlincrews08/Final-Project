import axios from 'axios';

const userController = {
  getUser: function () {
    return axios.get(`/api/users/me`);
  },
  // Gets all memes
  getMemes: function () {
    return axios.get("/api/users/memes");
  },
  // Gets the meme with the given id
  getMeme: function (id) {
    return axios.get("/api/users/memes/" + id);
  },
  // Deletes the meme with the given id
  deleteMeme: function (memeData) {
    return axios.delete("/api/users/memes/", memeData);
  },
  // Saves a meme to the database
  saveMeme: function (memeData) {
    return axios.put("/api/users/memes", memeData);
  },
  queueMemes: function (res) {
    return fetch('https://reddit-meme-api.herokuapp.com/20', res);
  }
}

export default userController;
