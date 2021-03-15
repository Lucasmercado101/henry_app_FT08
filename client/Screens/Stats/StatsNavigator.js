import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Stats from './Stats'
import DrawerHome from '../../Navigators_test/Components/DrawerHome'

import store from '../../Redux/store';
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../../Redux/Actions/userActions";
import Auxilio from './Auxilio'

const Stack = createStackNavigator()

const MyStack = () => {
    let student = useSelector((store) => store.userInfo.usuario);
    if (student.githubToken) {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name='Stats'
                    component={Stats}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        )

    } else {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name='Auxilio'
                    component={Auxilio}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        )
    }


}

export default function StatsNavigator() {
    return <MyStack />
}

