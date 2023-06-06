import React from 'react';

import { Login } from '../'

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name="Login"
                component={Login}
            />
        </>
    )
}