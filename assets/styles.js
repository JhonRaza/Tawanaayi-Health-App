import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    background:{
        backgroundColor: '#000000',
        flex: 1,
        justifyContent: 'space-between'
    },
    backgroundRest:{
        backgroundColor: '#000000',
        flex: 1,
    },
    backgroundLogIn:{
      backgroundColor: '#000000',
      flex: 1,
      justifyContent: 'space-evenly'
  },
    inYellow: {
        backgroundColor: "#fff700",
        borderRadius: 360,
        alignItems: "center",
        fontFamily: "Open Sans",
        fontSize: 16,
        padding: 10,
        width: 200,
        marginBottom: 45,
        flex: 1, flexDirection: 'column', alignSelf: 'center', paddingTop: 10,
      },
      inBlue: {
        flex: 0,
        backgroundColor: "#73E6FD",
        borderRadius: 360,
        alignItems: "center",
        fontFamily: "Open Sans",
        fontSize: 16,
        padding: 10,
        width: 200,
        marginBottom: 45,
        flex: 1, flexDirection: 'column', alignSelf: 'center', paddingTop: 10,

      },
})

export default styles