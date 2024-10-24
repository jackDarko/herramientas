import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';



import genero from '../screens/genero';
import pais from '../screens/pais';
import edad from '../screens/edad';
import clima from '../screens/clima';
import noticias from '../screens/noticias';
import Contactame from '../screens/Contactame';
import principal from "../screens/principal"



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    
    <Drawer.Navigator initialRouteName="principal">
      <Drawer.Screen name="principal" component={principal} />
      <Drawer.Screen name="genero" component={genero} />
      <Drawer.Screen name="edad" component={edad} />
      <Drawer.Screen name="pais" component={pais} />
      <Drawer.Screen name="clima" component={clima} />
      <Drawer.Screen name="noticias" component={noticias} />
      <Drawer.Screen name="contactame" component={Contactame} />
    </Drawer.Navigator>
  );
}




const styles = StyleSheet.create({
  container: {
    color: "#C70000FF" ,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
