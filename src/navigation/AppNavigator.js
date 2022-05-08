import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Result from '../screens/Result';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="result" component={Result} />
    </Stack.Navigator>
  );
};
