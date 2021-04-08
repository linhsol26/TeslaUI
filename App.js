import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarItem from './components/carItems'
export default function App() {
  return (
    <View style={styles.container}>
      <CarItem 
        name={"Model 3"} 
        tagLine={"Order Online For"} 
        image={require("./assets/images/Model3.jpeg")}
        tagLineCTA={"Touchless Delivery"}/>
    <StatusBar style="auto"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
