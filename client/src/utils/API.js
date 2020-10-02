import axios from "axios";
import FileDownload from "js-file-download";

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
  addAddressGroup: function(userInfo) {
    console.log(userInfo)
    return axios.post("/api/AddAddressGroup", userInfo);
  },
  
    // //Adds a new event
    addEvent: function(userInfo){
      console.log(userInfo)
      console.log("at the add event function")

        axios.post('/api/calendar', userInfo)
    },
    // //Updates an event with new info entered by user
    // updateEvent: function(){
    //     return axios.put('/api/updateevent')
    // },
    // //Gets all address entries
    getAddress: function(){
        return axios.get('/api/addressbook')
    },

    getSingleAddress: function(userInfo){
      console.log(userInfo)
      return axios.get('/api/EditContact'+userInfo.id)
  },

    getEvent: function(){
      return axios.get('/api/Calendar')
    },

    deleteAddress: function(userInfo){
      console.log(userInfo)
      console.log("Address Delete")
      return axios.delete('/api/addressbook/'+userInfo.id, userInfo)
  },
  deleteEvent: function(userInfo){
    console.log(userInfo)
    console.log("Event Delete")
    return axios.delete('/api/event/'+userInfo.id, userInfo)
},
  getAddress2: function(){
    console.log("check")
    axios.get('/api/addressbook3')
    .then(function (response) {console.log(response)
      function combineData(item){
        var addressLine = Object.values(item).join(',')
        addressLine =  '\n \t' + addressLine 
        return addressLine
      }
      const addressArray = response.data.map(combineData)
    

      // let blob = new Blob([response.data], {type: 'csv'})
      FileDownload(addressArray,'AddressList.csv');


    });
    },

    editAddress: function(userInfo) {
      console.log(userInfo)
      console.log("check")
      axios.put("/api/EditContact"+userInfo.id, userInfo);
    },
    editEvent: function(userInfo) {
      console.log(userInfo)
      console.log("Id "+userInfo.id)
      console.log("check")
      axios.put("/api/EditEvent"+userInfo.id, userInfo);
    }
    
    
}



export default API