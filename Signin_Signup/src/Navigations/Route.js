import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainStack from '../Navigations/MainStack';
import AuthStack from '../Navigations/AuthStack';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();


export default function Routes() {
const userData = useSelector((state)=>state.login)

console.log("user data", userData)

    return (
        <NavigationContainer>
            <Stack.Navigator>
            {!!userData && userData?.token ? MainStack(Stack)
                    : AuthStack(Stack)
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}