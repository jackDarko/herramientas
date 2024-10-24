
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Contratame = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contrátame</Text>
      

      <Image 
        source={{ uri: '../assets/Imagen de WhatsApp 2024-09-26 a las 21.27.48_28558780.jpg' }} 
        style={styles.imagen} 
        resizeMode="contain" 
      />
      
      <Text style={styles.datos}>
        Nombre: Jack Michael Aybar Feliz 
      </Text>
      
      <Text style={styles.datos}>
        Correo Electrónico: jackmichaela1@gmail.com
      </Text>
      
      <Text style={styles.datos}>
        Teléfono: 849-272-4129
      </Text>
      
      <Text style={styles.descripcion}>
        Estoy disponible para futuros proyectos. ¡No dudes en contactarme!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#333030FF',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#C62525FF', 
  },
  imagen: {
    width: 150, 
    height: 150,
    borderRadius: 30, 
    marginBottom: 20,
  },
  datos: {
    fontSize: 18,
    marginBottom: 10,
    color: '#FFFFFFFF', 
    textAlign: 'center',
  },
  descripcion: {
    fontSize: 10,
    marginTop: 20,
    textAlign: 'center',
    color: '#FFFFFFFF', 
  },
});

export default Contratame;
