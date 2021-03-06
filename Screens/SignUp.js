import React, { useState } from 'react'
import styles from '../assets/styles'
import { View, Text, SafeAreaView, ScrollView, ImageBackground, Image, TextInput, TouchableOpacity, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
export default function SignUp(props) {


    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [gender, setGender] = React.useState('Male')
    const [date, setDate] = useState('');
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        setShow(Platform.OS === 'ios');
        if (mode == 'date') {
            const currentDate = selectedValue || new Date();
            setDate(currentDate);
            setShow(Platform.OS !== 'ios'); // to show time
        }
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    const checkTextInput = () => {
        if (name === '') {
            alert('Please Enter Name');
            return;
        }
        //Check for the Email TextInput
        else if (email === '') {
            alert('Please Enter Email');
            return;
        }
        else if (password === '') {
            alert('Please Enter Password');
            return;
        }
        else if (gender === '') {
            alert('Please Enter Gender');
            return;
        }
        else if (!date.match(/\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/)) {
            alert('Please Enter Date of Birth');
            return;
        }
        //Checked Successfully
        //Do whatever you want
        else {
            props.navigation.navigate('SignIn'),
            console.log(name),
            console.log(email),
            console.log(password),
            console.log(gender),
            console.log(date)

        }
    };
    return (
        <ScrollView contentContainerStyle={[styles.backgroundRest]}>
            <Image source={require('../assets/Logo.png')} style={{ height: 80, width: 400, alignSelf: 'center', justifyContent: 'space-evenly', marginTop: 40, marginBottom: 30 }}></Image>
            <View style={{ width: '70%', alignSelf: 'center', marginTop: -40 }}>
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 30, paddingTop: 20, fontWeight: '400' }}>
                    Sign Up
                </Text>
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 20, paddingTop: 30 }}>
                    Enter Full Name
                </Text>
                <TextInput style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    backgroundColor: '#DDDDDD', borderRadius: 10, padding: 4, width: 300
                }} placeholder="Insert your full name!" onChangeText={(text) => { setName(text) }} />
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 20, paddingTop: 5 }}>
                    Enter Email
                </Text>
                <TextInput style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    backgroundColor: '#DDDDDD', borderRadius: 10, padding: 4, width: 300
                }} placeholder="Insert your email!" onChangeText={(text) => { setEmail(text) }} />
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 20, paddingTop: 5 }}>
                    Enter Password
                </Text>
                <TextInput style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    backgroundColor: '#DDDDDD', borderRadius: 10, padding: 4, width: 300
                }} placeholder="Insert your password!" secureTextEntry={true} onChangeText={(text) => { setPassword(text) }} />
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 20, paddingTop: 5 }}>
                    Gender
                </Text>
                <Picker
                    selectedValue={gender}
                    style={{ height: 50, width: 150, borderRadius: 15, color: '#000000' }}
                    onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                    itemStyle={{ backgroundColor: "#3265AB", fontFamily: "Poppins", fontSize: 19 }}
                >
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
                    <Picker.Item label="Other" value="Other" />
                </Picker>
                <Text style={{ marginTop: 10, color: '#FFFFFF', fontSize: 20, paddingTop: 5 }}>
                    Date of Birth
                </Text>
                <TextInput style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    backgroundColor: '#DDDDDD', borderRadius: 10, padding: 4, width: 300
                }} placeholder="Insert your Date of Birth: YYYY-MM-DD" onChangeText={(text) => { setDate(text) }} />
            </View>
            <View style={{ paddingTop: 40 }}>
                <TouchableOpacity
                    onPress={checkTextInput}
                    style={styles.inYellow}
                ><Text style={{  }}>Create account</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', paddingTop: 10 }}>
                <TouchableOpacity style={{ flex: 0, flexDirection: 'row', alignItems: 'center', marginTop: -20 }}
                    onPress={() => {
                        props.navigation.navigate('SignIn')
                    }}
                //   onPress={() =>
                //     this.props.navigation.navigate('Covid', {
                //       userName: this.state.nu,fontWeight: 'bold'fontWeight: 400, 
                //       otherParam: '101'
                //     })}
                ><Text style={{ color: '#FFFFFF' }}>Already have an account? Click here</Text>
                </TouchableOpacity>
            </View>



        </ScrollView>
    )
}
