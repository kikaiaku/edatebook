import axios from "axios";

export default {
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
    //Adds a new address entry
    addAddress: function(){
        return axios.post('/api/addaddress')
    },
    //Updates address with new info entered by user
    updateAddress: function(){
        return axios.put('/api/addaddress')
    }
};



