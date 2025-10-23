// App.js
import 'react-native-gesture-handler'; // 🔹 Debe estar arriba de todo
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

// 🔹 Importa tus pantallas
import LogIn from './LogIn';
import FatherMain from './FatherMain';
import CreateSon from './CreateSon';

const Stack = createNativeStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        'NuevaFuente': require('./assets/fonts/Kids Bus.otf')
    });

    if (!fontsLoaded) return null; // Espera a que las fuentes carguen

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="FatherMain" screenOptions={{ headerShown: false }}>

                <Stack.Screen 
                    name="LogIn" 
                    component={LogIn} 
                />

                <Stack.Screen 
                    name="FatherMain" 
                    component={FatherMain} 
                />

                <Stack.Screen 
                    name="CreateSon" 
                    component={CreateSon} 
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
