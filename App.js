import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    
      <View style={styles.container}>
        <View style={styles.rectanguloRed}></View>
        <View style={styles.rectanguloRed2}></View>
        <View style={styles.rectanguloGreen}></View>
        <View style={styles.rectanguloGreen2}></View>
        <View style={styles.cuadroBlue}></View>
        <View style={styles.cuadroBlue2}></View>
        <View style={styles.cuadroBlue3}></View>
        <View style={styles.cuadroBlue4}></View>
        <View style={styles.cuadroYellow}></View>
        <View style={styles.cuadroYellow2}></View>
        <View style={styles.cuadroYellow3}></View>
        <View style={styles.cuadroYellow4}></View>
        <View style={styles.cuadroRed}></View>
        <View style={styles.cuadroRed2}></View>
        <View style={styles.cuadroRed3}></View>
        <View style={styles.cuadroRed4}></View>
        <View style={styles.cuadroGreen}></View>
        <View style={styles.cuadroGreen2}></View>
        <View style={styles.cuadroGreen3}></View>
        <View style={styles.cuadroGreen4}></View>
        <View style={styles.cuadroMorado}>
          <View
            style={{
              width: 120,
              height: 120,
              backgroundColor: '#F3811C',
              borderRadius: 60,
              borderStartWidth: 60,
              borderLeftColor: '#F0A30A',
              elevation: 100, 
            }}>
            <View
              style={{
                width: 80,
                height: 80,
                backgroundColor: 'blue',
                borderRadius: 60,
                elevation: 100,
                right: 40,
                top: 20,
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: 'white',
                  borderRadius: 60,
                  elevation: 100,
                  top: 15,
                  left: 15,
                }}
              />
            </View>
          </View>
        </View>
      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    margin: "6%",
  },
  parrafo: {
    elevation: 99,
    fontSize: 13,
    color: "blue",
    fontWeight: "bold",
    marginTop: 110,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: "#20232a",
    textAlign: "left",
  },

  rectanguloRed: {
    width: 320,
    height: 30,
    backgroundColor: "red",
    elevation: 98,
  },
  rectanguloRed2: {
    width: 320,
    height: 30,
    backgroundColor: "red",
    position: "absolute",
    marginTop: 290,
    elevation: 98, 
  },
  rectanguloGreen: {
    width: 30,
    height: 290,
    backgroundColor: "green",
    elevation: 98, 
  },
  rectanguloGreen2: {
    width: 30,
    height: 290,
    backgroundColor: "green",
    position: "absolute",
    marginTop: 30,
    marginLeft: 290,
    elevation: 98, 
  },
  cuadroBlue: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    position: "absolute",
    elevation: 99, 
  },
  cuadroBlue2: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    position: "absolute",
    marginLeft: 270,
    elevation: 99, 
  },
  cuadroBlue3: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    position: "absolute",
    marginLeft: 270,
    marginTop: 270,
    elevation: 99, 
  },
  cuadroBlue4: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    position: "absolute",
    marginTop: 270,
    elevation: 99, 
  },
  cuadroYellow: {
    width: 50,
    height: 50,
    backgroundColor: "yellow",
    position: "absolute",
    elevation: 97, 
    marginLeft: 25,
    marginTop: 25,
  },
  cuadroYellow2: {
    width: 50,
    height: 50,
    backgroundColor: "yellow",
    position: "absolute",
    elevation: 97, 
    marginLeft: 245,
    marginTop: 25,
  },
  cuadroYellow3: {
    width: 50,
    height: 50,
    backgroundColor: "yellow",
    position: "absolute",
    elevation: 97, 
    marginLeft: 245,
    marginTop: 250,
  },
  cuadroYellow4: {
    width: 50,
    height: 50,
    backgroundColor: "yellow",
    position: "absolute",
    elevation: 97, 
    marginLeft: 25,
    marginTop: 250,
  },
  cuadroRed: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    position: "absolute",
    marginLeft: 50,
    marginTop: 50,
    elevation: 96, 
  },
  cuadroRed2: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    position: "absolute",
    marginLeft: 220,
    marginTop: 50,
    elevation: 96, 
  },
  cuadroRed3: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    position: "absolute",
    marginLeft: 50,
    marginTop: 220,
    elevation: 96, 
  },
  cuadroRed4: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    position: "absolute",
    marginLeft: 220,
    marginTop: 220,
    elevation: 96, 
  },
  cuadroGreen: {
    width: 50,
    height: 50,
    backgroundColor: "green",
    position: "absolute",
    marginLeft: 75,
    marginTop: 75,
    elevation: 95, 
  },
  cuadroGreen2: {
    width: 50,
    height: 50,
    backgroundColor: "green",
    position: "absolute",
    marginLeft: 195,
    marginTop: 75,
    elevation: 95, 
  },
  cuadroGreen3: {
    width: 50,
    height: 50,
    backgroundColor: "green",
    position: "absolute",
    marginLeft: 195,
    marginTop: 195,
    elevation: 95, 
  },
  cuadroGreen4: {
    width: 50,
    height: 50,
    backgroundColor: "green",
    position: "absolute",
    marginLeft: 75,
    marginTop: 195,
    elevation: 95, 
  },
  cuadroMorado: {
    width: 120,
    height: 120,
    backgroundColor: "purple",
    position: "absolute",
    marginLeft: 100,
    marginTop: 100,
    elevation: 95,
  },
});
