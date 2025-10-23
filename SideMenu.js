// SideMenu.js
import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SideMenu = forwardRef((props, ref) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerAnim = useRef(new Animated.Value(-SCREEN_WIDTH * 0.7)).current;

  // Permite que el padre controle abrir/cerrar el menú
  useImperativeHandle(ref, () => ({
    toggleMenu: () => {
      if (menuOpen) {
        Animated.timing(drawerAnim, {
          toValue: -SCREEN_WIDTH * 0.7,
          duration: 300,
          useNativeDriver: true,
        }).start(() => setMenuOpen(false));
      } else {
        setMenuOpen(true);
        Animated.timing(drawerAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    },
  }));

  return (
    <>
      {/* Overlay para cerrar el menú */}
      {menuOpen && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.3)'
          }}
          onPress={() => ref.current.toggleMenu()}
        />
      )}

      {/* Drawer animado */}
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: SCREEN_WIDTH * 0.7,
          backgroundColor: 'white',
          padding: 20,
          transform: [{ translateX: drawerAnim }],
          shadowColor: '#000',
          shadowOpacity: 0.3,
          shadowOffset: { width: 3, height: 0 },
          shadowRadius: 5,
          elevation: 5,
        }}
      >
        <Text style={{ fontSize: 18, marginBottom: 20 }}>Opciones del menú</Text>
        <TouchableOpacity onPress={() => console.log('Opción 1')}>
          <Text style={{ marginVertical: 10 }}>Opción 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Opción 2')}>
          <Text style={{ marginVertical: 10 }}>Opción 2</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
});

export default SideMenu;
