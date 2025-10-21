// App.js (o archivo de Navegación principal)
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa tus pantallas
import LogIn from './LogIn';
import FatherMain from './FatherMain';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
    //     <Stack.Screen 
    //       name="Login" 
    //       component={LogIn} 
    //       options={{ headerShown: false }} // Ocultar la barra de navegación en el Login
    //     />     
        
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="FatherMain">
        <Stack.Screen 
          name="FatherMain" 
          component={FatherMain} 
          options={{ headerShown: false }} // Ocultar la barra de navegación en el Login
        />     
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator; 