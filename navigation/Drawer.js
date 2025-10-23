import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import FatherMain from '../FatherMain';

const Drawer = createDrawerNavigator();

function ConfiguracionScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla de Configuración</Text>
    </View>
  );
}

export default function DrawerFunction() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false, // usamos tu propio header en FatherMain
        drawerActiveTintColor: '#4CAF50',
        drawerLabelStyle: { fontSize: 16 },
      }}
    >
      <Drawer.Screen name="Inicio" component={FatherMain} />
      <Drawer.Screen name="Configuración" component={ConfiguracionScreen} /> 
    </Drawer.Navigator>
  );
}
