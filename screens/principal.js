import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const Principal = ({ navigation }) => {
  const handleButtonPress = () => {
    // Navegar a otra página o realizar alguna acción
    navigation.navigate('contactame'); // Ejemplo: navegar a la pantalla de noticias
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: '../assets/images/fondo.png' }} // Cambia la URL por la de tu imagen
        style={styles.image}
      />
      <Text style={styles.title}>Bienvenido a Mi Aplicación</Text>
      <Button title="Para contratarme" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Principal;
