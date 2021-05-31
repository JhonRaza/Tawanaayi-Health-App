import React, { Component } from 'react'
import axios from 'axios';
import { View, Text } from 'react-native';


const profileAPI = async function(url, data){
    axios.post(url, data)
    .then(data => {
      console.log(data)
    })
    .catch(err=>{
      console.log(err)
    })
  }
export class Profile extends Component {
    render() {
        return (
            // <div>
            //     {/* {profileAPI('http://192.168.90.1:3000/profile')} */}
            // </div>
            <View>
              <Text>
                UFUEFDIni
              </Text>
            </View>
        )
    }
}

export default Profile
