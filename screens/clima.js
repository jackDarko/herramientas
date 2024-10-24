import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const Clima = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = 'sn2fri7285myv56z1332qvj4cwrjznr0a1d5ahej';
  const lat = 18.7357; // Latitud de la República Dominicana
  const lon = -70.1627; // Longitud de la República Dominicana

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.meteosource.com/v1/point?lat=${lat}&lon=${lon}&key=${apiKey}`);
        setWeather(response.data);
      } catch (error) {
        setError('Error fetching weather data');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <Text>Cargando clima...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clima Actual</Text>
      <Text>Temperatura: {weather?.current?.temperature} °C</Text>
      <Text>Condición: {weather?.current?.weather[0]?.description}</Text>
      <Button title="Actualizar" onPress={() => fetchWeather()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Clima;
