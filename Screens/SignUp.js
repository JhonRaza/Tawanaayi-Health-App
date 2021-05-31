import React from 'react'
import styles from '../assets/styles'
import { View, Text, SafeAreaView, ScrollView, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'

export default function SignUp(props) {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    return (
        <ScrollView contentContainerStyle={[styles.backgroundRest]}>
            <Image source={require('../assets/Logo.png')} style={{ height: 80, width: 400, alignSelf: 'center', marginTop: 70 }}></Image>
            <View style={{ flex: 0, flexDirection: 'row', alignItems: 'center', alignContent: 'center',justifyContent:'center', marginBottom: -20, paddingTop: 40 }}>
                <Text style={{color: '#FFFFFF', fontSize: 25,  fontWeight: 400}}>
                    Sign Up
                </Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 100 }}>
                <View style={{ flex: 0, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#FFFFFF' }}>Full Name</Text>
                    <TextInput style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        placeholderTextColor: 'gray', backgroundColor: '#DDDDDD', borderRadius: 10, padding: 4, marginLeft: 20, width: 200
                    }} placeholder="Insert your text!" onChangeText={text => setName(text)} />
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10 }}>
                <View style={{ flex: 0, flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                    <Text style={{ color: '#FFFFFF' }}>Email</Text>
                    <TextInput style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        placeholderTextColor: 'gray', backgroundColor: '#DDDDDD', borderRadius: 10, padding: 4, marginLeft: 20, width: 200
                    }} placeholder="Insert your text!" onChangeText={text => setEmail(text)} />
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10, marginLeft: -3 }}>
                <View style={{ flex: 0, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#FFFFFF' }}>Password</Text>
                    <TextInput style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        placeholderTextColor: 'gray', backgroundColor: '#DDDDDD', borderRadius: 10, padding: 4, marginLeft: 20, width: 200
                    }} placeholder="Insert your text!" onChangeText={text => setPassword(text)} secureTextEntry={true}/>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10, marginLeft: -22 }}>
                <View style={{ flex: 0, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#FFFFFF' }}>Date of Birth</Text>
                    <TextInput style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        placeholderTextColor: 'gray', backgroundColor: '#DDDDDD', borderRadius: 10, padding: 4, marginLeft: 20, width: 200
                    }} placeholder="Insert your text!" />
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10, marginLeft: 3 }}>
                <View style={{ flex: 0, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#FFFFFF' }}>Gender</Text>
                    <TextInput style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        placeholderTextColor: 'gray', backgroundColor: '#DDDDDD', borderRadius: 10, padding: 4, marginLeft: 20, width: 200
                    }} placeholder="Insert your text!" />
                </View>
            </View>
            <View style={styles.intro}>
            <TouchableOpacity 
            //   onPress={() =>
            //     this.props.navigation.navigate('Covid', {
            //       userName: this.state.nu,
            //       otherParam: '101'
            //     })}
               style={styles.inYellow}
            ><Text style={{fontWeight: 'bold'}}>Create Account</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10 }}>
            <TouchableOpacity style={{ flex: 0, flexDirection: 'row', alignItems: 'center', marginTop: -20 }}
            onPress ={()=>{
                props.navigation.navigate('SignIn'),
                console.log(name),
                console.log(email),
                console.log(password)
            }}
            //   onPress={() =>
            //     this.props.navigation.navigate('Covid', {
            //       userName: this.state.nu,
            //       otherParam: '101'
            //     })}
            ><Text style={{fontWeight: 400, color: '#FFFFFF'}}>Already have an account? Click here</Text>
            </TouchableOpacity>
          </View>



        </ScrollView>
    )
}
