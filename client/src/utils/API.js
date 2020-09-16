import axios from "axios";

const API = {
  // Saves a book to the database
  signUp: function(userInfo) {
    console.log(userInfo)
    return axios.post("/api/signup", userInfo);
  },
  addAddress: function(userInfo) {
    console.log(userInfo)
    return axios.post("/api/AddressBook", userInfo);
  }

}

export default API