import React, { useState, useEffect } from 'react'; 
import { View, Text, Image, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { TextInput as PaperInput, Button as PaperButton } from 'react-native-paper'; 
import { styles } from './assets/css/LogIn_Styles';
import SemillinImage from './assets/LogInAssets/Semillin.png'; 
import axios from 'axios';

// 🔹 Dependencias para login con Google
import * as WebBrowser from 'expo-web-browser';
import { useAuthRequest, makeRedirectUri } from 'expo-auth-session';

// Cierra la sesión del navegador cuando regresa a la app
WebBrowser.maybeCompleteAuthSession();

// 🔹 Endpoint de tu backend local
const API_URL = 'http://192.168.100.32:3000/crear/nuevoUsuario/';
const BACKEND_URL = 'https://cb61dae31616.ngrok-free.app';// <-- backend para login con Google

// 🔹 Rutas para autenticación con Google (Passport)
const discovery = {
  authorizationEndpoint: `${BACKEND_URL}/api/auth/google`,
};
const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const sendLogIn = async () => {
    try {
      const userData = { email, password };
      const response = await axios.post(API_URL, userData);

      console.log('Respuesta del servidor:', response.data);
      Alert.alert('¡Usuario creado con éxito!', response.data.message);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      Alert.alert('Error', 'Hubo un error al crear la cuenta.');
    }
  };


  const [request, response, promptAsync] = useAuthRequest(
    {
      redirectUri: makeRedirectUri({
        useProxy: true, // Necesario para Expo Go
      }),
    },
    discovery
  );

  // Manejo del resultado de autenticación
  useEffect(() => {
    if (response?.type === 'success') {
      Alert.alert('Éxito', 'Has iniciado sesión correctamente con Google.');
      // Aquí puedes hacer una petición al backend para obtener datos del usuario:
      // fetch(`${BACKEND_URL}/auth/user`)
    } else if (response?.type === 'error') {
      Alert.alert('Error', 'No se pudo iniciar sesión con Google.');
    }
  }, [response]);


  console.log("Redirect URI:", makeRedirectUri({ useProxy: true }));


  return (
    <KeyboardAvoidingView 
      style={styles.fullScreen}
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Semillitas</Text>
        <Image source={SemillinImage} style={styles.logo} resizeMode="contain" />
        <Text style={styles.textoCreaCuenta}>Crea una cuenta</Text>
        <Text style={styles.textoIngresa}>Ingresa tu correo Electrónico</Text>
        <Text style={[styles.textoIngresa, { marginBottom: 10 }]}>
          para registrarte en esta aplicación
        </Text>       

        <PaperInput
          label="Correo Electrónico"
          mode="outlined"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.inputPaper}
          value={email}
          onChangeText={setEmail}
        />

        <PaperInput
          label="Contraseña"
          mode="outlined"
          secureTextEntry
          style={styles.inputPaper}
          value={password}
          onChangeText={setPassword}
        />

        <PaperButton 
          mode="contained"
          style={styles.LogInButton}
          labelStyle={styles.loginButtonText}
          onPress={sendLogIn}
        >
          Iniciar Sesión
        </PaperButton>

        <PaperButton 
          mode="text" 
          style={styles.QrButton}
          labelStyle={styles.QrButtonText}
        >
          Escanear Código QR
        </PaperButton>

        {/* SEPARADOR */}
        <View style={styles.separatorContainer}>
          <View style={styles.line} />
          <Text style={styles.separatorText}>O</Text>
          <View style={styles.line} />
        </View>

        {/* 🔹 BOTÓN GOOGLE */}
        <PaperButton 
          mode="text" 
          icon="google"
          style={styles.GoogleSignButton}
          labelStyle={styles.GoogleSignText}
          disabled={!request}
          onPress={() => promptAsync({ useProxy: true })}
        >
          Continuar con Google
        </PaperButton>

        <PaperButton 
          mode="text" 
          icon="apple"
          style={styles.AppleSignButton}
          labelStyle={styles.AppleSignText}
        >
          Continuar con Apple
        </PaperButton>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LogIn;
