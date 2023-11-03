import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
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

const botaoteste = () => {
  alert("Teste");
};

function navigateToVoltar() {
  navigation.navigate("Login");
}

function MyCustomLeftComponent() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity onPress={botaoteste}>
        <Icon name="arrow-left" size={40} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

function MyCustomCenterComponent() {
  return (
    // Personalize o componente de acordo com suas necessidades
    <ButtonText>Cursos</ButtonText>
  );
}

function MyCustomRightComponent() {
  return (
    // Personalize o componente de acordo com suas necessidades
    <ButtonText></ButtonText>
  );
}

export default function App() {
  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.navigate("Login");
  }

  return (
    <Container>
      <Header
        backgroundColor="#E16539"
        leftComponent={<MyCustomLeftComponent />}
        centerComponent={<MyCustomCenterComponent />}
        rightComponent={<MyCustomRightComponent />}
      />

      <ButtonCurso onPress={botaoteste} underlayColor="#E16539">
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconImage source={require("../../Components/img/LogoQuadrada.png")} />
        <ButtonText>Empreendedorismo</ButtonText>
        </View>
      </ButtonCurso>

      <ButtonCurso onPress={botaoteste} underlayColor="#E16539">
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <IconImage source={require("../../Components/img/LogoQuadrada.png")} />
    <ButtonText>Finanças</ButtonText>
  </View>
</ButtonCurso>

      <ButtonCurso onPress={botaoteste} underlayColor="#E16539">
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconImage source={require("../../Components/img/LogoQuadrada.png")} />
        <ButtonText>Marketing</ButtonText>
        </View>
      </ButtonCurso>

      <ButtonCurso onPress={botaoteste} underlayColor="#E16539">
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconImage source={require("../../Components/img/LogoQuadrada.png")} />
        <ButtonText>Gestão de RH</ButtonText>
        </View>
      </ButtonCurso>

      <ButtonCurso onPress={botaoteste} underlayColor="#E16539">
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconImage source={require("../../Components/img/LogoQuadrada.png")} />
        <ButtonText>Planejamento</ButtonText>
        </View>
      </ButtonCurso>
    </Container>
  );
}
