import React,{useState, useEffect} from 'react';
import Login from '../components/Login';
import API from "../utils/API"

function Home(){

const [email,setEmail]=useState()
const [password,setPassword]=useState()

    function handleInputChange(e){
        let name = e.target.name

    switch(name){
        case "email":
                setEmail(e.target.value)
            break;
        case "password":
               setPassword(e.target.value)
            break;
    }

    }


    function handleSubmit(){
        let data={
            email:email,password:password
        }
        API.loginApp(data).then(response=>{
            console.log(response)
            console.log("login response")
            sessionStorage.setItem("id",response.data.id)

        })
    }
    return(
        <Login handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
      
      
    )

    }

export default Home;