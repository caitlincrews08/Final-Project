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
  deleteMeme: function (id) {
    return axios.delete("/api/users/memes/" + id);
  },
  // Saves a meme to the database
  saveMeme: function (memeData) {
    return axios.put("/api/users/memes", memeData);
  },
  queueMemes: function () {
    return axios.get('http://memebuild.com/api/1.0/getRecentMemes?limit=100api-key=', {
      credentials: "include",
      headers: {
        'API-KEY': '1ab967b253352c7063b5669a0d4b1f',
        'Content-Type': 'application/json'
      },
  });
}

export default userController;
