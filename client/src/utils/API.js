import axios from "axios";

const API = {
  // Saves a book to the database
  signUp: function(userInfo) {
    console.log(userInfo)
    return axios.post("/api/signup", userInfo);
  },

  addAddress: function(userInfo) {
    console.log(userInfo)
    return axios.post("/api/addressbook", userInfo);
  },

    //Gets all events
    // getEvents: function(){
    //   return axios.get('/api/events')
    // },
    // //Adds a new event
    addEvent: function(userInfo){
      console.log(userInfo)

        return axios.post('/api/calendar', userInfo)
    },
    // //Updates an event with new info entered by user
    // updateEvent: function(){
    //     return axios.put('/api/updateevent')
    // },
    // //Gets all address entries
    getAddress: function(){
        return axios.get('/api/addressbook')
    }
  
    // //Updates address with new info entered by user
    // updateAddress: function(){
    //     return axios.put('/api/addaddress')
    // }


}

export default API