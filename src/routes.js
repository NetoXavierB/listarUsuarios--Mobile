import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import FeatherIcon from 'react-native-vector-icons/Feather';

import Users from './pages/listUsers';

// import Header from './components/Header';

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
        //   options={{
        //     headerShown:true,
        //     headerTransparent: true,
        //     // headerTitle: () => <Header/>,
        //    }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}