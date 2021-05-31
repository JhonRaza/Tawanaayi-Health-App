import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import  Home  from '../Screens/Home/Home'
import Profile from '../Screens/Profile/Profile'
const Tab = createMaterialBottomTabNavigator();


export class Main extends Component {
    render() {
        return (
            <Tab.Navigator initialRouteName="Home" labeled={false}>
                <Tab.Screen name="Home" component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ), headerShown: false
                    }} />
                <Tab.Screen name="Profile" component={Profile} navigation={this.props.navigation}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="user" color={color} size={26} />
                        ),
                        headerShown: false
                    }} />
            </Tab.Navigator>
        )
    }
}

export default Main
