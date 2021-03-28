import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, TambahKontak} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TambahKontak"
        component={TambahKontak}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default Router;
