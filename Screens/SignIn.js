import React from 'react'
import styles from '../assets/styles'
import { View, Text, SafeAreaView, ScrollView, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'

export default function SignIn(props) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    return (
        <ScrollView contentContainerStyle={[styles.backgroundRest]}>
        <Image source={require('../assets/Logo.png')} style={{ height: 80, width: 400, alignSelf: 'center', justifyContent: 'space-evenly', marginTop: 80, marginBottom: 30 }}></Image>
        <View style={{ width: '70%', alignSelf: 'center' }}>
            <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 30, paddingTop: 20, fontWeight: '400' }}>
                Sign In
            </Text>
            <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 20, paddingTop: 30 }}>
                Enter Email
            </Text>
            <TextInput style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                backgroundColor: '#DDDDDD', borderRadius: 10, padding: 4, width: 300
            }} placeholder="Insert your email!" />
            <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 20, paddingTop: 5 }}>
                Enter Password
            </Text>
            <TextInput style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                backgroundColor: '#DDDDDD', borderRadius: 10, padding: 4, width: 300
            }} placeholder="Insert your password!" />
            </View>
            {/* </View> */}
            <View style={{ paddingTop: 40 }}>
                <TouchableOpacity
                    onPress={() => { props.navigation.navigate('Main') }}
                    style={styles.inBlue}
                ><Text style={{  }}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10 }}>
                <TouchableOpacity style={{ flex: 0, flexDirection: 'row', alignItems: 'center', marginTop: -20 }}
                    onPress={() => {
                        props.navigation.navigate('SignUp'),
                            console.log(email),
                            console.log(password)
                    }}
                //   onPress={() =>
                //     this.props.navigation.navigate('Covid', {
                //       userName: this.state.nu,
                //       otherParam: '101'fontWeight: 'bold'fontWeight: 400, fontWeight: 400, 
                //     })}
                ><Text style={{ color: '#FFFFFF' }}>Don't have an account? Click here</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10 }}>
                <TouchableOpacity style={{ flex: 0, flexDirection: 'row', alignItems: 'center', marginTop: -20 }}
                    onPress={() => {
                        props.navigation.navigate('Forgot'),
                            console.log(email),
                            console.log(password)
                    }}
                //   onPress={() =>
                //     this.props.navigation.navigate('Covid', {
                //       userName: this.state.nu,
                //       otherParam: '101'
                //     })}
                ><Text style={{ color: '#FFFFFF' }}>Forgot Password? Click here</Text>
                </TouchableOpacity>
            </View>


        </ScrollView>
    )
}
