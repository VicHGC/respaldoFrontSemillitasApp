import React from 'react';
import { View, Text, ScrollView,TouchableOpacity, Image, StyleSheet // Añadimos StyleSheet para los estilos de los iconos
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './assets/css/FatherMain_Styles'; 
import { useNavigation } from '@react-navigation/native';

const UserIconLocal = require('./assets/FatherMainAssets/User.png'); // Icono de usuario para las tarjetas
const MenuIconLocal = require('./assets/FatherMainAssets/MenuIcon.png'); // Icono del menú
const SemillinIconLocal = require('./assets/FatherMainAssets/Semillin.png'); // Imagen de Semillín

const FatherMain = () => {

    // Simulación de datos de hijos: ¡TUS TARJETAS ESTÁN AQUÍ!
    const childrenData = [
        { id: 1, name: "Lucas", avatarSource: UserIconLocal, info: "5 años | Nivel Básico" },
        { id: 2, name: "Sofía", avatarSource: UserIconLocal, info: "8 años | Nivel Intermedio" },
        { id: 3, name: "Hijo de Prueba", avatarSource: UserIconLocal, info: "3 años | Nuevo Usuario" },
    ];

    const navigation = useNavigation();

    return (
 
        <SafeAreaView style={styles.container}> 
            
            <View style={styles.header}>
                
                <TouchableOpacity style={styles.iconWrapperLeft} onPress={() => navigation.openDrawer()}>
                    <Image 
                        source={MenuIconLocal} 
                        style={styles.menuIcon}
                    />
                </TouchableOpacity>

                <Text style={styles.headerText}>Semillitas</Text>

                <View style={styles.iconWrapperRight}>
                    <Image 
                        source={SemillinIconLocal} 
                        style={styles.semillinImage}
                    />
                </View>

            </View>

            <ScrollView style={styles.content} contentContainerStyle={{flexGrow: 1}}>
                
                <Text style={styles.contentText}>
                    Añade un nuevo Hijo
                </Text>

                {/* TARJETAS DE HIJOS:*/}
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
                
                {/* Espacio final */}
                <View style={{height: 500}}/> 
            </ScrollView>
        </SafeAreaView>
    );
};

export default FatherMain;