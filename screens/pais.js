import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Linking, StyleSheet } from 'react-native';
import axios from 'axios';

const Pais = () => {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);

  const fetchUniversities = async () => {
    try {
      const response = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
      setUniversities(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter Country (in English):</Text>
      <TextInput 
        style={styles.input} 
        value={country} 
        onChangeText={setCountry} 
        placeholder="e.g. Canada"
      />
      <Button title="Get Universities" onPress={fetchUniversities} color="#007BFF" />
      <FlatList
        data={universities}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.universityItem}>
            <Text style={styles.universityName}>{item.name}</Text>
            <Text style={styles.domain}>{item.domains[0]}</Text>
            <Button 
              title="Visit Website" 
              onPress={() => Linking.openURL(item.web_pages[0])} 
              color="#28A745" 
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  universityItem: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  universityName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  domain: {
    color: 'gray',
    marginBottom: 5,
  },
});

export default Pais;
