// CreateSon.js
import React, { useRef} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './assets/css/CreateSon_Styles';
import { TextInput as PaperInput, Button as PaperButton, Checkbox } from 'react-native-paper'; 
import SideMenu from './SideMenu'; // ✅ Importamos el nuevo menú lateral
import { useState } from 'react';

// 📦 Iconos locales
const MenuIconLocal = require('./assets/FatherMainAssets/MenuIcon.png');
const SemillinIconLocal = require('./assets/FatherMainAssets/Semillin.png');

export default function CreateSon() {
  const menuRef = useRef(); // ✅ Referencia para controlar el menú


  const [checkedEsp, setCheckedEsp] = useState(false);
  const [checkedMat, setCheckedMat] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => menuRef.current.toggleMenu()}>
          <Image source={MenuIconLocal} style={styles.menuIcon} />
        </TouchableOpacity>

        <Text style={styles.headerText}>Agregar Hijo</Text>

        <Image source={SemillinIconLocal} style={styles.semillinImage} />
      </View>

      <View style={styles.content}>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Nombre:</Text>
          <PaperInput
            mode="outlined"
            placeholder="Escribe el nombre"
            style={styles.inputPaper}
            outlineColor="#b38900ff"
            activeOutlineColor="#b38900ff"
            
          />
        </View>

        <View style={styles.modulesContainer}>
          <Text style={styles.modulesTitle}>Módulos a Aprender</Text>

          <View style={styles.checkboxRow}>
            <Text style={styles.checkboxLabel}>Español</Text>
            <Checkbox
              status={checkedEsp ? 'checked' : 'unchecked'}
              onPress={() => setCheckedEsp(!checkedEsp)}
              color="#ffffffff"
            />
          </View>

          <View style={styles.checkboxRow}>
            <Text style={styles.checkboxLabel}>Matemáticas</Text>
            <Checkbox
              status={checkedMat ? 'checked' : 'unchecked'}
              onPress={() => setCheckedMat(!checkedMat)}
              color="#ffffffff"
            />
          </View>
        </View>

        <PaperButton
          mode="contained"
          onPress={() => console.log("Hijo agregado")}
          style={styles.addButton}
          labelStyle={styles.addButtonText}
        >
          Agregar
      </PaperButton>

      </View>

      {/* 🔹 MENÚ LATERAL */}
      <SideMenu ref={menuRef} />
    </SafeAreaView>
  );
}