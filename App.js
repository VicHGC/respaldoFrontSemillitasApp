// App.js
import 'react-native-gesture-handler'; // 🔹 Debe estar arriba de todo
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 🔹 Importa tus pantallas
import LogIn from './LogIn';
import Drawer from './navigation/Drawer'; // Asegúrate de tener este archivo en /navigation

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FatherMain">

        <Stack.Screen 
          name="LogIn" 
          component={LogIn} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="FatherMain" 
          component={Drawer} 
          options={{ headerShown: false }} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


