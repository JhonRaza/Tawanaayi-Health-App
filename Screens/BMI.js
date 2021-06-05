import React from 'react'
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from '../assets/styles'


const BMI = () => {
    const [heightfeet, setFeet] = React.useState(0);
    const [heightinches, setInches] = React.useState(0);
    const [heightM, setMeters] = React.useState(heightfeet + heightinches)
    const [mass, setMass] = React.useState(0);
    const [time, setTime] = React.useState('') //set the timestamp for the calculation
    //const [bmi, setBMI] = React.useState(mass/(heightM**2))
    return (
        <ScrollView contentContainerStyle={[styles.backgroundRest]}>
            <View style={{ width: '70%', alignSelf: 'center' }}>
                <Image source={require('../assets/Logo.png')} style={{ height: 80, width: 400, alignSelf: 'center', justifyContent: 'space-evenly', paddingTop: -40, marginBottom: 30 }}></Image>
                <View style={{ paddingBottom: 200 }}>
                    <Text style={{ marginTop: 10, color: '#FFCB1F', fontSize: 40, paddingTop: 20, fontWeight: '400', alignSelf: 'center' }}>
                        BMI Calculator
           </Text>
                    <View style={{ flex: 0, flexDirection: 'row' }}>
                        <TextInput
                            placeholder='Feet'
                            keyboardType='numeric'
                            style={styles.in}
                            onChangeText={
                                height => {
                                    setFeet(height * 0.3048)
                                }
                            }
                        >
                        </TextInput>
                        <TextInput
                            placeholder='Inches'
                            keyboardType='numeric'
                            onChangeText={
                                inches => {
                                    setInches(inches * 0.0254)
                                }
                            }
                            style={styles.in}>
                        </TextInput>
                        <TextInput
                            placeholder='Mass (KGs)'
                            keyboardType='numeric'
                            onChangeText={
                                mass => {
                                    setMass(mass)
                                }
                            }
                            style={styles.in}>
                        </TextInput>
                    </View><View style={{ paddingTop: 40 }}>
                        <TouchableOpacity
                            // onPress = {} calculate the BMI value and set the time and save into the DB
                            style={styles.inYellow}
                        ><Text style={{  }}>Calculate</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

                {/* <Text style={{ marginTop: 10, color: '#FFCB1F', fontSize: 40, paddingTop: 20, fontWeight: '400', alignSelf: 'center' }}>
               {(bmi !== NaN) ? (bmi.toString()) : null}fontWeight: 'bold'
           </Text> */}
            </View>
        </ScrollView>
    )
}

export default BMI
