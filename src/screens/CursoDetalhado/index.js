import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Container, SendButton, SendButtontext } from "./styles";

export default function App() {
  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.navigate("Login");
  }
  return (
    <Container>
      <View>
        <Text>Hello world!</Text>
      </View>

      <SendButton onPress={navigateToLogin}>
        <SendButtontext>login</SendButtontext>
      </SendButton>
    </Container>
  );
}