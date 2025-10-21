import { StyleSheet } from 'react-native';

export const COLORS = {
    PRIMARY: '#00C8B3',         
    ACCENT_YELLOW: '#FFD700',   
    WHITE: '#FFFFFF',           
    TEXT: '#ffffffff',            
    CARD_BACKGROUND: '#72024bff',
    BORDER_GRAY: '#c0c0c0ff',     
};

// Definición de los estilos de la vista principal
export const styles = StyleSheet.create({
    // 1. Contenedor principal que se extiende por toda la pantalla
    container: {
        flex: 1,
        backgroundColor: COLORS.ACCENT_YELLOW, 
    },
    
    header: {
        height: 50, 
        backgroundColor: COLORS.PRIMARY, 
        justifyContent: 'flex-end', 
        alignItems: 'center',
        paddingBottom: 10,
    },
    headerText: {
        color: COLORS.WHITE,
        fontSize: 20,
        fontWeight: 'bold',
    },
    
    content: {
        flex: 1, 
        backgroundColor: COLORS.ACCENT_YELLOW, 
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    contentText: {
        fontSize: 18,
        color: COLORS.TEXT,
        marginBottom: 10,
        textAlign: 'center',
    },

    card: {
        backgroundColor: COLORS.CARD_BACKGROUND,
        borderRadius: 8,
        padding: 16,     
        marginBottom: 30, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 }, 
        shadowOpacity: 0.6,         
        shadowRadius: 10,           
        elevation: 20, 
    },

    // 💡 NUEVOS ESTILOS PARA LA ALINEACIÓN DEL AVATAR Y TEXTO
    cardContentWrapper: {
        flexDirection: 'row', // Alinea la imagen y el texto horizontalmente
        alignItems: 'center', // Centra verticalmente los elementos
    },
    
    avatarImage: {
        width: 60,            
        height: 60,
        borderRadius: 30,     // Para hacerlo circular (mitad de 60)
        marginRight: 15,      // Espacio entre la imagen y el texto
        borderWidth: 2,       
        borderColor: COLORS.BORDER_GRAY, 
    },
    
    textContainer: {
        flex: 1, 
        justifyContent: 'center',
    },
    
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.TEXT,
    },
    
    cardSubtitle: {
        fontSize: 14,
        color: COLORS.TEXT,
        opacity: 0.7, 
    },
    
    // 5. Estilo de la barra inferior
    footer: {
        height: 60, 
        backgroundColor: COLORS.PRIMARY, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        color: COLORS.WHITE,
        fontSize: 14,
    },
    footerNavContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        width: '100%' 
    }
});