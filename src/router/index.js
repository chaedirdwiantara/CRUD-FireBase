import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, TambahKontak, DetailKontak, EditKontak} from '../pages';

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
        options={({headerShown: true}, {title: 'Tambah Kontak'})}
      />
      <Stack.Screen
        name="DetailKontak"
        component={DetailKontak}
        options={({headerShown: true}, {title: 'Detail Kontak'})}
      />
      <Stack.Screen
        name="EditKontak"
        component={EditKontak}
        options={({headerShown: true}, {title: 'Edit Kontak'})}
      />
    </Stack.Navigator>
  );
};

export default Router;
