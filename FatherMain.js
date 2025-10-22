import React from 'react';
import { 
    View, 
    Text, 
    ScrollView,
    TouchableOpacity, 
    Image, 
    StyleSheet // Añadimos StyleSheet para los estilos de los iconos
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './assets/css/FatherMain_Styles'; 

// 💡 IMPORTACIÓN DE IMÁGENES LOCALES
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

    return (
        <SafeAreaView style={styles.container}> 
            
            {/* 1. BARRA SUPERIOR (HEADER) con los dos iconos */}
            <View style={styles.header}>
                
                {/* 1A. BOTÓN DE MENÚ (Izquierda) */}
                <TouchableOpacity style={localStyles.iconWrapperLeft} onPress={() => console.log('Botón Menú presionado')}>
                    <Image 
                        source={MenuIconLocal} 
                        style={localStyles.menuIcon}
                    />
                </TouchableOpacity>

                {/* 1B. TÍTULO CENTRAL */}
                <Text style={styles.headerText}>Semillitas</Text>

                {/* 1C. IMAGEN DE SEMILLÍN (Derecha) */}
                <View style={localStyles.iconWrapperRight}>
                    <Image 
                        source={SemillinIconLocal} 
                        style={localStyles.semillinImage}
                    />
                </View>

            </View>

            {/* 2. CONTENIDO PRINCIPAL (SCROLLABLE) */}
            <ScrollView style={styles.content} contentContainerStyle={{flexGrow: 1}}>
                
                {/* Título/Botón para Añadir Hijo */}
                <Text style={styles.contentText}>
                    Añade un nuevo Hijo
                </Text>

                {/* 💡 TARJETAS DE HIJOS: ¡ESTE CÓDIGO PERMANECE INTACTO! */}
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

            {/* 3. BARRA INFERIOR (FOOTER) */}
            <View style={styles.footer}> 
                <View style={styles.footerNavContainer}>
                    <Text style={styles.footerText}></Text>
                </View>
            </View>

        </SafeAreaView>
    );
};

export default FatherMain;

// Estilos necesarios para posicionar los iconos en el Header
const localStyles = StyleSheet.create({
    iconWrapperLeft: {
        position: 'absolute',
        left: 10,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        zIndex: 10, 
    },
    menuIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        tintColor: '#FFFFFF',
    },
    iconWrapperRight: {
        position: 'absolute',
        right: 10,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        zIndex: 10,
    },
    semillinImage: {
        width: 40,
        height: 40,
        borderRadius: 20, 
        resizeMode: 'cover',
    },
});