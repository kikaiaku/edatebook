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
  },

    //Gets all events
    getEvents: function(){
      return axios.get('/api/events')
    },
    //Adds a new event
    addEvent: function(){
        return axios.post('/api/addevent')
    },
    //Updates an event with new info entered by user
    updateEvent: function(){
        return axios.put('/api/updateevent')
    },
    //Gets all address entries
    getAddresses: function(){
        return axios.get('/api/addresses')
    },
  
    //Updates address with new info entered by user
    updateAddress: function(){
        return axios.put('/api/addaddress')
    }


}

export default API