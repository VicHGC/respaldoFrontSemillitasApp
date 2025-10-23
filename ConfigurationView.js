import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// 📦 Iconos locales
const MenuIconLocal = require('./assets/FatherMainAssets/MenuIcon.png');
const SemillinIconLocal = require('./assets/FatherMainAssets/Semillin.png');

export default function ConfigurationView() {
    
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      
      {/* 🔹 HEADER con el botón de menú y el título */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={MenuIconLocal} style={styles.menuIcon} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Agregar Hijo</Text>

        <Image source={SemillinIconLocal} style={styles.headerRightIcon} />
      </View>

      {/* 🔹 CONTENIDO PRINCIPAL */}
      <View style={styles.content}>
        <Text style={styles.text}>Aquí podrás crear un nuevo hijo 👶</Text>
        {/* Aquí puedes agregar un formulario o botones */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#00A86B',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuIcon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerRightIcon: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
});
