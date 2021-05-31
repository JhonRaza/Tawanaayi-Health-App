import React, {useEffect, useState} from 'react'
import { View, Text, Image } from 'react-native';

import data from '../../assets/data/users.json';
export default function BMR(nu) {
    let n = nu;
    // const getData=()=>{
    //     fetch('./users.json'
    //     ,{
    //       headers : { 
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //        }
    //     }
    //     )
    //       .then(function(response){
    //         console.log(response)
    //         return response.json();
    //       })
    //       .then(function(myJson) {
    //         console.log(myJson);
    //         setData(myJson)
    //       })
    //       .catch(console.log("No data"));
          
    // }
    // useEffect(()=>{
    //   getData()
    // },[])
    // const [data,setData]=useState([]);
    if (data[0].usertype === 'client'){
    return <View>{n}</View>
    }
}
