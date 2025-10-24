// SideMenu.js
import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { sideMenuStyles, MENU_WIDTH } from './assets/css/SideMenu_Styles';

const SideMenu = forwardRef((props, ref) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerAnim = useRef(new Animated.Value(-MENU_WIDTH)).current;

  useImperativeHandle(ref, () => ({
    toggleMenu: () => {
      if (menuOpen) {
        Animated.timing(drawerAnim, {
          toValue: -MENU_WIDTH,
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
      {menuOpen && (
        <TouchableOpacity
          style={sideMenuStyles.overlay}
          onPress={() => ref.current.toggleMenu()}
        />
      )}

      <Animated.View
        style={[
          sideMenuStyles.container,
          { transform: [{ translateX: drawerAnim }] },
        ]}
      >
        <Text style={sideMenuStyles.title}>Opciones del menú</Text>

        <TouchableOpacity style={sideMenuStyles.option} onPress={() => console.log('Opción 1')}>
          <Text style={sideMenuStyles.optionText}>Opción 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={sideMenuStyles.option} onPress={() => console.log('Opción 2')}>
          <Text style={sideMenuStyles.optionText}>Opción 2</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
});

export default SideMenu;
