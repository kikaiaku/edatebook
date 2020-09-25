import axios from "axios";

const API = {
  // Saves a book to the database
  signUp: function(userInfo) {
    console.log(userInfo)
    return axios.post("/api/signup", userInfo);
  },
loginApp:function(userInfo){
  console.log(userInfo)
  console.log("this is the user info on the login app")
  return axios.post("/api/login",userInfo)
  
},
  addAddress: function(userInfo) {
    console.log(userInfo)
    return axios.post("/api/AddContact", userInfo);
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
    },

    getEvent: function(){
      return axios.get('/api/Calendar')
    },

    deleteAddress: function(userInfo){
      console.log(userInfo)
      console.log("Address Delete")
      return axios.delete('/api/addressbook/'+userInfo.id, userInfo)
  }
  
    // //Updates address with new info entered by user
    // updateAddress: function(){
    //     return axios.put('/api/addaddress')
    // }


}

export default API