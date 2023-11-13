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
const Custumizavel = () => {
  alert("Acho que nao Presisa desse botao");
};
function navigateToVoltar() {
  navigation.navigate("Login");
}

function MyCustomLeftComponent() {
  return <ButtonText></ButtonText>;
}

function MyCustomCenterComponent() {
  return (
    // Personalize o componente de acordo com suas necessidades

    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <IconImage source={require("../../Components/img/IconeUsuario.png")} />
      
      <ButtonText>Adam Levi</ButtonText>
    </View>
    
  );
}

function MyCustomRightComponent() {
  return (
    // Personalize o componente de acordo com suas necessidades
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity onPress={Custumizavel}>
        <Icon name="gear" size={40} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.navigate("Login");
  }
  // Defina o número de rank para cada botão de curso
  const cursos = [
    { nome: "Editar Nome" },
    { nome: "Editar Foto de Perfil" },
    { nome: "Alterar Senha" },
    { nome: "Trocar de Conta" },
    { nome: "Sair" }
  ];
  return (
    <Container>
      <Header
        backgroundColor="#303030"
        leftComponent={<MyCustomLeftComponent />}
        centerComponent={<MyCustomCenterComponent />}
        rightComponent={<MyCustomRightComponent />}
      />
      <ScrollView>
        {cursos.map((curso, index) => (
          <ButtonCurso key={index} onPress={botaoteste} underlayColor="#e16539">
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <ButtonText>{curso.nome}</ButtonText>
            </View>
          </ButtonCurso>
        ))}
      </ScrollView>
    </Container>
  );
}
