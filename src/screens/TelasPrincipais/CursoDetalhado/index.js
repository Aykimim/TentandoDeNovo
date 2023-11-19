import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView, TouchableOpacity, View, Image } from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  TextEscrita,
  Container,
  ButtonText,
  ButtonCurso,
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
      <Icon name="arrow-left" size={20} color="#fff" />
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

  function navigateToPerguntas() {
    navigation.navigate("Login");
  }

  function navigateToPerguntasUm() {
    navigation.navigate("PerguntaUm");
  }
  function navigateToPerguntasDois() {
    navigation.navigate("PerguntaDois");
  }
  function navigateToPerguntasTres() {
    navigation.navigate("PerguntaTres");
  }
 

  return (
    <Container>
      <Header
        backgroundColor="#E16539"
        leftComponent={<MyCustomLeftComponent />}
        centerComponent={<MyCustomCenterComponent />}
        rightComponent={<MyCustomRightComponent />}
      />

      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          margin: 20,
          overflow: "hidden"
        }}
      >
        <Image
          source={require("../../../Components/img/LogoQuadrada.png")} // Substitua pelo caminho da sua imagem
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      <ScrollView>
<ButtonCurso key="1" onPress={() => navigateToPerguntasUm()} underlayColor="#e16539">
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <ButtonText>Básico grátis</ButtonText>
  </View>
</ButtonCurso>

<ButtonCurso key="2" onPress={() => navigateToPerguntasDois()} underlayColor="#e16539">
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <ButtonText>Intermediário - pago</ButtonText>
  </View>
</ButtonCurso>

<ButtonCurso key="3" onPress={() => navigateToPerguntasTres()} underlayColor="#e16539">
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <ButtonText>Avançado - pago</ButtonText>
  </View>
</ButtonCurso>

</ScrollView>
    </Container>
  );
}
