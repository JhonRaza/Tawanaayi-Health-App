import React, { Component, useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
import axios from 'axios';
var cors = require('cors');


export default function Covid(props) {
    const [food, setFood] = useState('');
    const [covidData, setCovidData] = useState('');
    const [emailData, setEmailData] = useState('');
    const [dataPresent, setPresent] = useState(false);
    const req = async () => {
        axios.get('https://randomuser.me/api')
            .then((response) => {
                console.log(response);
                setCovidData(response.data.results[0].name.last)
                setEmailData(response.data.results[0].email)
                setPresent(true);
            }
            )
            .catch(err => {
                console.log(err);
            })
    }
    const options = {
        method: 'GET',
        url: 'https://calorieninjas.p.rapidapi.com/v1/nutrition',
        params: { query: food },
        headers: {
            'x-rapidapi-key': '3cd3e22e78mshc40806521e446e1p1a2e53jsn851300ffa051',
            'x-rapidapi-host': 'calorieninjas.p.rapidapi.com'
        }
    };

    const calories = async () => {
        axios.request(options).then(function (response) {
            console.log(response.data);
            console.log(response.data.items[0].protein_g);
            response.data.items.forEach(element => {
                console.log(element);
            });
        }).catch(function (error) {
            console.error(error);
        });
    }

    // constructor(props) {
    //     super(props);
    // }
    // render() {
    const { navigation } = props;
    const user_name = props.route.params.userName;

    return (
        <ImageBackground
            source={require("../../assets/img/Fitter - BG.png")}
            style={{ width: "100%", height: "100%" }}>
            <Text style={styles.TitleText}></Text>

            <View style={styles.container}>
                <View style={styles.intro}>
                    <TouchableOpacity
                        onPress={() => {
                            req();
                            calories();
                        }}
                        style={styles.in}>
                        <Text>
                            RANDOM LAST NAME</Text>
                    </TouchableOpacity>
                    <TextInput onChangeText={foo => {
                        setFood(foo);
                    }} style={{ 'color': '#ffffff' }}>

                    </TextInput>
                </View>

                {dataPresent ? (
                    <View style={styles.intro}><Text style={styles.button, styles.box}>
                        Last Name: {covidData}</Text>
                        <Text style={styles.button, styles.box}>
                            Email address: {emailData}
                            {"\n"}
                        </Text>
                        <Text style={styles.button, styles.box}>
                            THIS IS THE PROPS WALA NAME: {user_name}
                        </Text></View>) : null
                }

            </View>
        </ImageBackground>
    )
    // }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    intro: {
        flexDirection: "column",
        alignSelf: 'center',
        // backgroundColor: "#FFFFFF",
        // borderRadius: 10,
        // paddingVertical: 40,
        // paddingTop: 20,
        // marginTop: 20,
        minWidth: "60%",
        // shadowOffset: { width: 0, height: 5 },
        // shadowOpacity: 1.0,
        // shadowRadius: 2,
        // shadowColor: "rgba(193, 211, 251, 0.5)",
        //elevation: 5,
    },
    in: {
        flex: 0,
        //backgroundColor: '#000',
        // color: '#FFCB1F',
        // textDecorationStyle: 'solid',
        // alignItems: 'center',
        // //justifyContent: 'center',
        // justifySelf: 'center',
        // padding: 15,
        // fontSize: 20
        // flexDirection: 'column',
        // height: 65,
        // textAlign: "center",
        // width: "80%",
        // fontSize: 23,
        // marginTop: 34,
        // color: "#FFFFFF",
        // marginRight: 5,
        // marginLeft: 5,
        // marginBottom: 10,
        // marginTop: 50,
        //"#FFCB1F"
        backgroundColor: "#fff700",
        //defaultTextColor: "hsl(0, 0%, 0%)",
        borderRadius: 360,
        alignItems: "center",
        //disabled: false,
        //disabledBackground: "#f3f3f3",
        //disabledTextColor: "#AAAAAA",
        //font: false,
        fontFamily: "Open Sans",
        fontSize: 16,
        // hoverBackground: "#0077FF",
        // hoverTextColor: "#ffffff",
        // onMouseEnter: undefined,
        // onMouseLeave: undefined,
        padding: 10,
        // pressedBackgroun: "#0088FF",
        // pressedTextColor: "#ffffff",
        // shadow: false,
        // variant: "Default",
        // whileHoverScale: 1.1,
        // whileTapScale: 0.95,
    },
    box: {
        //flex: 1,
        //backgroundColor: '#000',
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding: 15,
        // color: "#FFCB1F"
        alignSelf: "center",
        color: "#FFCB1F",
        fontSize: 15,
        padding: 15
    },
    button: {
        //flex: 1,
        //backgroundColor: '#000',
        // color: "#FFCB1F",
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding: 15,
        //backgroundColor: "#10100F"

    },
    TitleText: {
        color: "#FFCB1F",
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 35,
        //fontFamily: "Cochin",
        paddingBottom: 15,
        paddingTop: 20,
        marginBottom: 150
        // backgroundColor: "#FFFFFF",
        // borderRadius: 10,
        // paddingHorizontal: 30,
        // paddingVertical: 40,
        // minWidth: "80%",
        // shadowOffset: { width: 0, height: 5 },
        // shadowOpacity: 1.0,
        // shadowRadius: 2,
        // shadowColor: "rgba(193, 211, 251, 0.5)",
        // elevation: 5,
    },
});

// export default Covid
