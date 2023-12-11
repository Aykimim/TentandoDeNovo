import React, { useState, useEffect } from "react";
import { View, Text, Button, ActivityIndicator, StyleSheet } from "react-native";
import { colors } from "../Components/Theme";
const RodaCarregamento = () => {
  


  return (
    <View style={styles.container}>
 

      
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color={colors.textoPreto} />
        </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
 margin:10,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
});


export default RodaCarregamento;