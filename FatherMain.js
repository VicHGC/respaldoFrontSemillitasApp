import React from 'react';
import { 
    View, 
    Text, 
    ScrollView,
    TouchableOpacity, 
    Image, 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './assets/css/FatherMain_Styles'; 

// 💡 IMPORTACIÓN DE IMAGEN LOCAL: Usamos require() para la imagen local
const UserIconLocal = require('./assets/FatherMainAssets/User.png'); 

const FatherMain = () => {

    // Simulación de datos de hijos: En la aplicación real, estos vendrían de la API/DB.
    const childrenData = [
        { id: 1, name: "Lucas", avatarSource: UserIconLocal, info: "5 años | Nivel Básico" },
        { id: 2, name: "Sofía", avatarSource: UserIconLocal, info: "8 años | Nivel Intermedio" },
        { id: 3, name: "Hijo de Prueba", avatarSource: UserIconLocal, info: "3 años | Nuevo Usuario" },
    ];

    return (
        // El contenedor principal usa SafeAreaView para manejar el notch y la barra de estado
        <SafeAreaView style={styles.container}> 
            
            {/* 1. BARRA SUPERIOR (HEADER) */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Semillitas</Text>
            </View>

            {/* 2. CONTENIDO PRINCIPAL (SCROLLABLE) */}
            <ScrollView style={styles.content} contentContainerStyle={{flexGrow: 1}}>
                
                {/* Título/Botón para Añadir Hijo */}
                <Text style={styles.contentText}>
                    Añade un nuevo Hijo
                </Text>

                {childrenData.map(child => (
                    <TouchableOpacity 
                        key={child.id} 
                        style={styles.card}
                        onPress={() => console.log('Abriendo perfil de:', child.name)}
                    >
                        {/* 🎨 ESTRUCTURA FLEXBOX PARA AVATAR Y TEXTO */}
                        <View style={styles.cardContentWrapper}> 
                            
                            {/* IMAGEN DEL USUARIO (AVATAR) */}
                            <Image source={child.avatarSource} style={styles.avatarImage}/>
                            
                            {/* DATOS DEL HIJO */}
                            <View style={styles.textContainer}>
                                <Text style={styles.cardTitle}>{child.name}</Text>
                                <Text style={styles.cardSubtitle}>{child.info}</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                ))}
                
                {/* Espacio final (si es necesario para el scroll) */}
                <View style={{height: 300}}/> 
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