import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import FatherMain from '../FatherMain';
import CreateSon from '../CreateSon';

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
        headerShown: false, 
        drawerActiveTintColor: '#ffffffff',
        drawerInactiveTintColor: '#ffffffff',
        drawerStyle: {
          width: 240, 
        },
        drawerLabelStyle: { 
          fontSize: 18, 
          fontFamily: 'NuevaFuente', 
        },
        drawerContentStyle: { 
          backgroundColor: '#00C8B3', // Un color de ejemplo (rojo muy claro)
        },
      }}
    >
      <Drawer.Screen name="createson" component={CreateSon}/>
      <Drawer.Screen name="Inicio" component={FatherMain} />
      <Drawer.Screen name="Configuración" component={ConfiguracionScreen} /> 
    </Drawer.Navigator>
  );
}
