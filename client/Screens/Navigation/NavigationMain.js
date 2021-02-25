import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {View} from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome'
import {Icon} from 'native-base'
import { Ionicons } from '@expo/vector-icons'

//Stacks
import HomeNavigator from './HomeNavigator'

const Tab = createBottomTabNavigator();

const NavigationMain = () =>{

    return(
        <Tab.Navigator 
        initialRouteName='Home'
        tabBarOptions={{
            // keyboardHidesTabBar=true,
            // showLabel=false,
            activeTintColor: 'red',
          inactiveTintColor: 'black',
        }}
        
        >
            <Tab.Screen
            name="Home"
            component={HomeNavigator}
            options={{
                tabBarIcon:({color}) =>(
                    <Ionicons
                    name='home'
                    style={{position:'relative'}}
                    color={color}
                    size={45}
                    />
                )
            }}
            />
            <Tab.Screen
            name='Calendar'
            component={HomeNavigator}
            options={{
                tabBarIcon:({color}) =>(
                    <Ionicons
                    name='calendar'
                    color={color}
                    size={45}
                    />
                )
            }}
            />

<Tab.Screen
            name='Stats'
            component={HomeNavigator}
            options={{
                tabBarIcon:({color}) =>(
                    <Ionicons
                    name='analytics'
                    color={color}
                    size={45}
                    />
                )
            }}
            />

<Tab.Screen
            name='Chat'
            component={HomeNavigator}
            options={{
                tabBarIcon:({color}) =>(
                    <Ionicons
                    name='md-chatbubbles'
                    color={color}
                    size={45}
                    />
                )
            }}
            />
        </Tab.Navigator>
    )
}

export default NavigationMain;