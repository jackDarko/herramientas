import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const Edad = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);

  const predictAge = async () => {
    try {
      const response = await axios.get(`https://api.agify.io/?name=${name}`);
      setAge(response.data.age);
    } catch (error) {
      console.error(error);
    }
  };

  const getAgeCategory = () => {
    if (age < 18) return 'joven';
    if (age >= 18 && age < 60) return 'adulto';
    return 'anciano';
  };

  const getAgeImage = () => {
    if (age < 18) return 'https://example.com/young.png'; // Cambia a la URL real de la imagen
    if (age >= 18 && age < 60) return 'https://example.com/adult.png'; // Cambia a la URL real de la imagen
    return 'https://example.com/elderly.png'; // Cambia a la URL real de la imagen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prediccion de edad</Text>
      <Text style={styles.label}>Ingrese su nombre:</Text>
      <TextInput 
        style={styles.input} 
        value={name} 
        onChangeText={setName} 
        placeholder="Type your name"
      />
      <Button title="Predict Age" onPress={predictAge} color="#1976d2" />
      {age !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>La prediccion de edad es: {age}</Text>
          <Text style={styles.categoryText}>Category: {getAgeCategory()}</Text>
          <Image source={{ uri: getAgeImage() }} style={styles.image} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
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
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
  },
  categoryText: {
    fontSize: 16,
    color: '#555',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default Edad;
