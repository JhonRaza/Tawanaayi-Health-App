import axios from 'axios';
import React from 'react'
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Main } from '../Main'
import AuthContext from '../../components/context'


async function postData(url, data) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  const logInAPI = async function(url, data){
    axios.post(url, data)
    .then(data => {
      console.log(data)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  
//   postData('http://192.168.90.1:3000/login', { "email":"j3@gmail.com", "password":"123456"})
//     .then(data => {
//       console.log(data); // JSON data parsed by `data.json()` call
//     });


// const log = async ()=>{
//     try{
//         let response = fetch('http://192.168.90.1:3000/login',
//         {
//             method: "POST",
//             Headers:{
//                 'Content-Type': 'application/json',
//             },
//             body : JSON.stringify({
//                 "email":"j3@gmail.com",
//                 "password":"123456"
//             })
//         })
//         console.log(response)
//         let json = await (await response).json()
//         console.log(json)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
export default function signInScreen(props) {
  const navigation = useNavigation();
  //props.ac used here
    return (
        <Button onPress={()=>{props.ac, logInAPI('http://192.168.90.1:3000/login', { "email":"j3@gmail.com", "password":"123456"})
          ,
          props.navigation.navigate('Main', {"email":"j3@gmail.com", "password":"123456"})}}>

        </Button>
    )
}
