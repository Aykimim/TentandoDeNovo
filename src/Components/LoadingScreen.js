// LoadingScreen.js
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    // Simula um carregamento assíncrono
    const fakeLoading = setTimeout(() => {
      // Navega para a próxima tela após o carregamento
      navigation.replace('Main'); // Substitua 'Main' pelo nome da sua tela principal
    }, 3000);

    return () => clearTimeout(fakeLoading);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;
