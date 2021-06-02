import React from 'react'
import styles from '../assets/styles'
import { View, Text, SafeAreaView, ScrollView, ImageBackground, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

export default function ForgotPassword(props) {
    return (
        <ScrollView contentContainerStyle={[styles.backgroundRest]}>
            <Image source={require('../assets/Logo.png')} style={{ height: 80, width: 400, alignSelf: 'center', marginTop: -30 }}></Image>
            <View style={{ width: '70%', alignSelf: 'center' }}>
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 30, paddingTop: 20, fontWeight: '400' }}>
                    Change Password
                    </Text>
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 20, paddingTop: 30 }}>
                    Enter Email
                    </Text>
                <TextInput style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    placeholderTextColor: 'gray', backgroundColor: '#DDDDDD', borderRadius: 10, padding: 4, width: 300
                }} placeholder="Insert your email!" />
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 20, paddingTop: 5 }}>
                    Enter New Password
                    </Text>
                <TextInput style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    placeholderTextColor: 'gray', backgroundColor: '#DDDDDD', borderRadius: 10, padding: 4, width: 300
                }} placeholder="Insert your password!" />
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 20, paddingTop: 5 }}>
                    Re-Enter New Password
                    </Text>
                <TextInput style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    placeholderTextColor: 'gray', backgroundColor: '#DDDDDD', borderRadius: 10, padding: 4, width: 300
                }} placeholder="Insert your password again!" />
                <View style={{paddingTop: 40}}>
                <TouchableOpacity
                    onPress={()=>{props.navigation.navigate('SignIn')}}
                    style={styles.inYellow}
                ><Text style={{ fontWeight: 'bold' }}>Change Password</Text>
                </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
