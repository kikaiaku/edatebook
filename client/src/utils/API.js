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
  },
  getAddress2: function(){
    console.log("check")
    axios.get('/api/addressbook3')
    .then(function (response) {console.log(response)
      console.log(response.data.map(item => Object.values(item).join(', ')))
      // let blob = new Blob([response.data], {type: 'csv'})
      FileDownload(response.data.map(item => Object.values(item).join(', ')),'test.csv');


    });
    }
    
    // getGroup: function(){
    //   return axios.get('/api/Group')
    // },
    // getContacts: function(){
    //   return axios.get('/api/CreateGroup')
    // }
    

    //       response.data.pipe(fs.createWriteStream('Test5.xlsx"'))
        // });
    // axios({
    //   method: 'get',
    //   url: 'http://bit.ly/2mTM3nY',
    //   responseType: 'stream'
    // })
    //   .then(function (response) {
    //     response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    //   });
    
    
}

    // //Updates address with new info entered by user
    // updateAddress: function(){
    //     return axios.put('/api/addaddress')
    // }
// newContact: function (){
//   return axios.get()
// }





export default API