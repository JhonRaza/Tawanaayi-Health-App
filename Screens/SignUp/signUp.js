import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import React from 'react'
import { Button, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


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


export default function signUpScreen(props) {
  const signUpAPI = async function(url, data){
    axios.post(url, data)
    .then(data => {
      console.log(data)
      create(true)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [dob, setdob] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [created, create] = React.useState(false);
  const {navigation} = useNavigation();
    return (
      <View>
      <TextInput onChangeText = {n => {
        setName(n);
      }}placeholder="name"></TextInput>
      <TextInput onChangeText = {e => {
        setEmail(e);
      }}placeholder="email"></TextInput>
      <TextInput secureTextEntry={true} onChangeText = {p => {
        setPassword(p);
      }} placeholder="password"/>
      <TextInput onChangeText = {d => {
        setdob(d);
      }}placeholder="date of birth"></TextInput>
      <TextInput onChangeText = {g => {
        setGender(g);
      }} placeholder="gender"></TextInput>
        <Button onPress={()=>{signUpAPI('http://192.168.90.1:3000/register', { "name":name,"email":email, "password":password, "dob":dob, "gender": gender})
         if (created){alert("Create user")}}}>

        </Button>
        </View>
    )
}
