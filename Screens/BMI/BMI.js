import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
//import { Calculate } from './Calculate';
export class BMI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heightfeet: 0,
      heightinches: 0,
      meters: 0,
      masskgs: 0,
      BMIresult: 0,
      resultText: ""
    };
    //   componentWillMount(){
    //     this.setState({data : inputObject});
    // }
  }
  calculateBMI = () => {
    // let interimMeters = this.state.heightfeet*0.3048 + this.state.heightinches*0.0254;
    // let interimRes = this.state.masskgs/(interimMeters**2)
    //this.state.BMIresult = interim;
    this.state.meters = this.state.heightfeet + this.state.heightinches;
    let interim = this.state.masskgs / this.state.meters ** 2
    this.setState({
      BMIresult: interim.toFixed(2)
    });
    if (interim > 18 && interim < 25) {
      this.setState({ resultText: "Normal!" })
    }
    if (this.state.heightfeet === 0) {
      this.setState({ resultText: "Enter a valid number!" })
      this.setState({ BMIresult: null })
    }
  };

  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground
        // source={require("../../assets/img/Fitter - BG.png")}
        style={{ width: "100%", height: "100%", backgroundColor:"#000000" }}>

        <Text style={styles.TitleText}>BMI Calculator!</Text>
        <View style={styles.container}>


          <View style={styles.intro}>
            <TextInput
              placeholder='Feet'
              keyboardType='numeric'
              style={styles.in}
              onChangeText={
                height => {
                  this.setState({ heightfeet: height * 0.3048 })
                }
              }
            >
            </TextInput>
            <TextInput
              placeholder='Inches'
              keyboardType='numeric'
              onChangeText={
                inches => {
                  this.setState({ heightinches: inches * 0.0254 })
                }
              }
              style={styles.in}>
            </TextInput>
            <TextInput
              placeholder='Mass (KGs)'
              keyboardType='numeric'
              onChangeText={
                mass => {
                  this.setState({ masskgs: mass })
                }
              }
              style={styles.in}>
            </TextInput>
          </View>
          {/* <TouchableOpacity
                    style={styles.button}
                    title="Calculate"
                    onPress={this.handleCalculate}
                    fontFamily= "monospace"
                  onPress={this.calculateBMI}>Calculate</TouchableOpacity>  */}

          <TouchableOpacity
            style={styles.button}
            onPress={this.calculateBMI}
          >
            <Text style={styles.buttonText}>Calculate</Text>
          </TouchableOpacity>
          <Text style={styles.box}>{this.state.BMIresult}</Text>
          <Text style={[styles.box, { fontSize: 35 }]}>
            {this.state.resultText}
          </Text>


        </View>
        <View>
          {/* <Image
                  source = {require("../Fitter/assets/logo.png")}
                  style = {styles.imgstl}
                /> */}
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
    // color: '#fff'
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
    fontSize: 35,
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
  buttonText: {
    alignSelf: "center",
    padding: 30,
    fontSize: 20,
    color: "#FFCB1F",
    fontWeight: "bold"
  },
  in: {
    //flex: 1,
    //backgroundColor: '#000',
    // color: '#FFCB1F',
    // textDecorationStyle: 'solid',
    // alignItems: 'center',
    // //justifyContent: 'center',
    // justifySelf: 'center',
    // padding: 15,
    // fontSize: 20
    height: 65,
    textAlign: "center",
    width: "80%",
    fontSize: 23,
    marginTop: 34,
    color: "#FFFFFF",
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 10
    //"#FFCB1F"
  },
  TitleText: {
    color: "#FFCB1F",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 35,
    //fontFamily: "Cochin",
    paddingBottom: 15,
    paddingTop: 20,
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
  intro: {
    flexDirection: "row",
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
  imgstl: {
    width: "10%", height: "100%", alignSelf: "center",
    flex: 2,
    //color: "#FFCB1F",
    //fontSize: 35,
    //padding: 15,
    //borderRadius: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 40,
    paddingTop: 0,
    marginTop: 20,
    minWidth: "40%",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1.0,
    shadowRadius: 2,
    shadowColor: "rgba(193, 211, 251, 0.5)",
  }
});

export default BMI
