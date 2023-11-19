import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ScrollView
} from "react-native";
import { Header } from "react-native-elements";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  TextEscrita,
  Container,
  ButtonText,
  ButtonCurso, // Importe ButtonCurso do styles.js
  SendButtontext,
  IconImage,
  ButtonCursoPressed,
  ButtonTextPressed
} from "./styles";
function MyCustomLeftComponent() {
  const navigation = useNavigation();

  function navigateToVoltar() {
    navigation.reset({
      index: 0,
      routes: [{ name: "MainTab" }]
    });
  }

  return (
    <ButtonText onPress={navigateToVoltar}>
      <Icon name="arrow-left" size={20} color="#000" />
    </ButtonText>
  );
}

function MyCustomCenterComponent() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <ButtonText>Atividades</ButtonText>
    </View>
  );
}

function MyCustomRightComponent() {
  return <ButtonText></ButtonText>;
}

export default function App() {
  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.navigate("Login");
  }
  // Defina o número de rank para cada botão de curso

  return (
    <Container>
            <Header
        backgroundColor="#f0dfc8"
        leftComponent={<MyCustomLeftComponent />}
        centerComponent={<MyCustomCenterComponent />}
        rightComponent={<MyCustomRightComponent />}
      />
<ButtonText>"Teste3"</ButtonText>
    </Container>
  );
}
