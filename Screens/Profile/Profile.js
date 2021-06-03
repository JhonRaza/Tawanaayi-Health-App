import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import styles from '../../assets/styles'
export default function Profile() {
  //add context to get the user details here
  const name = ''
  const bmiLogs = []
  const bmrLogs = []

  return (
      <ScrollView contentContainerStyle={{backgroundColor: '#000000',
      flex: 1,
      justifyContent: 'center',flexGrow: 1, height: '100%'}}>
        <View style={{ width: '70%', alignSelf: 'center', height: '100%' }}>
          <Image source={require('../../assets/Logo.png')} style={{ height: 80, width: 400, alignSelf: 'center', justifyContent: 'space-evenly', marginTop: 40, marginBottom: 10 }}></Image>
          <View>
            <Text style={{ marginTop: 5, color: '#FFFFFF', fontSize: 40, paddingTop: 10, fontWeight: '400', alignSelf: 'center' }}>
              name
           </Text>
           {/* here, we want to map the logs */}
          </View>
        </View>
      </ScrollView>
  )
}
