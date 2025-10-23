import React, { useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './assets/css/FatherMain_Styles';
import SideMenu from './SideMenu';

const UserIconLocal = require('./assets/FatherMainAssets/User.png');
const MenuIconLocal = require('./assets/FatherMainAssets/MenuIcon.png');
const SemillinIconLocal = require('./assets/FatherMainAssets/Semillin.png');

const FatherMain = () => {
  const menuRef = useRef();

  const childrenData = [
    { id: 1, name: "Lucas", avatarSource: UserIconLocal, info: "5 años | Nivel Básico" },
    { id: 2, name: "Sofía", avatarSource: UserIconLocal, info: "8 años | Nivel Intermedio" },
    { id: 3, name: "Hijo de Prueba", avatarSource: UserIconLocal, info: "3 años | Nuevo Usuario" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => menuRef.current.toggleMenu()} style={styles.iconWrapperLeft}>
          <Image source={MenuIconLocal} style={styles.menuIcon} />
        </TouchableOpacity>

        <Text style={styles.headerText}>Semillitas</Text>

        <View style={styles.iconWrapperRight}>
          <Image source={SemillinIconLocal} style={styles.semillinImage} />
        </View>
      </View>

      {/* Contenido principal */}
      <ScrollView style={styles.content} contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={styles.contentText}>Añade un nuevo Hijo</Text>

        {childrenData.map(child => (
          <TouchableOpacity
            key={child.id}
            style={styles.card}
            onPress={() => console.log('Abriendo perfil de:', child.name)}
          >
            <View style={styles.cardContentWrapper}>
              <Image source={child.avatarSource} style={styles.avatarImage}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>{child.name}</Text>
                <Text style={styles.cardSubtitle}>{child.info}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        <View style={{ height: 500 }} />
      </ScrollView>

      {/* Menú lateral */}
      <SideMenu ref={menuRef} />
    </SafeAreaView>
  );
};

export default FatherMain;
