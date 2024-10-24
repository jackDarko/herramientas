import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const Genero = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState(null);

  const predictGender = async () => {
    if (!name) {
      alert('Por favor, ingresa un nombre.');
      return;
    }
    try {
      const response = await axios.get(`https://api.genderize.io/?name=${name}`);
      setGender(response.data.gender);
    } catch (error) {
      console.error(error);
      alert('Error al predecir el género. Intenta de nuevo.');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: gender === 'male' ? '#e3f2fd' : '#fce4ec' }]}>
      <Text style={styles.title}>Predicción de Género</Text>
      <Text style={styles.label}>Ingrese su nombre:</Text>
      <TextInput 
        style={styles.input} 
        value={name} 
        onChangeText={setName} 
        placeholder="Nombre"
        autoCapitalize="words" // Capitaliza la primera letra
      />
      <Button title="Predecir" onPress={predictGender} color="#1976d2" />
      {gender && <Text style={styles.result}>Su predicción es: {gender}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
  },
});

export default Genero;
