import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import FeatherIcon from 'react-native-vector-icons/Feather';

import Users from './pages/listUsers/index';

import Header from './components/Header';

const Stack = createStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:true,
          cardStyle:{
            backgroundColor: '#313746'
          },
        }}
        initialRouteName="Users"
      >
        <Stack.Screen
          name="Users"
          component={Users}
          options={{
            headerLeft: () => (
              <Header/>
            ),
            headerStyle:{
              backgroundColor: '#0962a1',
              borderBottomWidth: 1,
              borderBottomColor: '#0959a1'
            },
            headerTintColor: '#FFF'
           }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}