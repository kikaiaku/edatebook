import axios from "axios";
import FileDownload from "js-file-download";

const API = {
  // Function used to Sign up a user
  signUp: function (userInfo) {
    return axios.post("/api/signup", userInfo);
  },

  // Function used when a user log in
  loginApp: function (userInfo) {
    return axios.post("/api/login", userInfo)
  },

// START ADDRESS BOOK FUNCTIONS

  // function to add contact to the address book
  addAddress: function (userInfo) {
    console.log(userInfo)
    return axios.post("/api/AddContact", userInfo);
  },

    // Function to retrieve all contacts for the Address Book
    getAddress: function () {
      return axios.get('/api/addressbook')
    },

       // Function to retrieve all contacts for the Address Book
       getAddress2: function () {
        return axios.get('/api/getContacts')
      },

    // Retrieves a single contact to use for the edit function
    getSingleAddress: function (userInfo) {
      return axios.get('/api/EditContact' + userInfo.id)
    },

    // Function to edit a contact in the Address Book
    editAddress: function (userInfo) {
      console.log(userInfo)
      console.log("check")
      axios.put("/api/EditContact" + userInfo.id, userInfo);
    },

    // Function to delete a contact from the Address book
    deleteAddress: function (userInfo) {
      console.log("Address Delete")
      return axios.delete('/api/addressbook/' + userInfo.id, userInfo)
    },

    // Function to export your address book to a csv file
    exportAddressBook: function () {
      axios.get('/api/addressbook3')
        .then(function (response) {
          console.log(response)
          function combineData(item) {
            var addressLine = Object.values(item).join(',')
            addressLine = '\n \t' + addressLine
            return addressLine
          }
          const addressArray = response.data.map(combineData)
          FileDownload(addressArray, 'AddressList.csv');
        });
    },

    // getGroups: function() {
    //   axios.get
    // }


    // END ADDRESS BOOK FUNCTIONS

  // function to add a new group
  addAddressGroup: function (userInfo) {
    console.log(userInfo)
    return axios.post("/api/AddAddressGroup", userInfo);
  },


  // START CALENDAR FUNCTIONS

  // Function to add an event to the calendar
  addEvent: function (userInfo) {
    axios.post('/api/calendar', userInfo)
  },

  // Function to retrieve all events for the calendar
  getEvent: function () {
    return axios.get('/api/Calendar')
  },

// Function to delete an event from the Calendar
  deleteEvent: function (userInfo) {
    console.log(userInfo)
    console.log("Event Delete")
    return axios.delete('/api/event/' + userInfo.id, userInfo)
  },

// Function to edit an event in the Calendar
  editEvent: function (userInfo) {
    console.log(userInfo)
    console.log("Id " + userInfo.id)
    console.log("check")
    axios.put("/api/EditEvent" + userInfo.id, userInfo);
  },

// END CALENDAR FUNCTIONS


createGroupName: function (userInfo) {
  console.log(userInfo)
  return axios.post("/api/CreateGroupName", userInfo);
},


addGroup: function (userInfo) {
  console.log(userInfo)
  // const groupArray = userInfo.map('firstName','lastName', 'middleInitial','address','city','state','zipCode','phone','email','birthday','comments','userId',1)
  
  return axios.post("/api/CreateGroup", userInfo);
},
// context.developerState.filteredUsers.map(({ login, name, picture, phone, email, dob }) => {

getGroupCount: function () {
  return axios.get('/api/getGroupcount')
},

getGroups: function () {
  return axios.get('/api/getGroup')
},

deleteGroup: function (userInfo) {
  console.log(userInfo)
  console.log("Group Delete")
  return axios.delete('/api/groupName/' + userInfo.id,userInfo)
},

getGroupAddress: function (userInfo) {
  console.log(userInfo)
  return axios.get('/api/addressbookgroup/'+ userInfo.GroupNameId)
},

// Function to export your address book to a csv file
exportGroup: function (userInfo) {
  axios.get('/api/exportgroup/'+ userInfo.GroupNameId)
    .then(function (response) {
      console.log(response)
      function combineData(item) {
        var addressLine = Object.values(item).join(',')
        addressLine = '\n \t' + addressLine
        return addressLine
      }
      const groupArray = response.data.map(combineData)
      FileDownload(groupArray, 'AddressList.csv');
    });
},

deleteAddressGroup: function (userInfo) {
  console.log("Address Delete")
  return axios.delete('/api/addressbookgroupdelete/' + userInfo.id, userInfo)
}


}



export default API