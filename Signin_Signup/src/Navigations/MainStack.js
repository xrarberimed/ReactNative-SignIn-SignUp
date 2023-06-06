import React from 'react';

import  Home  from '../Screens/Home/Home';
import Profile from '../Screens/Profile/Profile';
import TabRoutes from './TabRoutes';

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name="Home"
                component={TabRoutes}
            />
        </>
    )
}