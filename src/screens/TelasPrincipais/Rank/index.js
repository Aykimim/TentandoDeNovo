import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ScrollView
} from "react-native";

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

import ScreenNameHeader from "../../../Components/ScreenNameHeader";

const botaoteste = () => {
  alert("Teste");
};

function navigateToVoltar() {
  navigation.navigate("Login");
}

export default function App() {
  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.navigate("Login");
  }
  // Defina o número de rank para cada botão de curso
  const cursos = [
    { nome: "Yuji Kamada", rank: "1º" },
    { nome: "Raphael Lima", rank: "2º" },
    { nome: "Carlos Massa", rank: "3º" },
    { nome: "Igor Guimarães", rank: "4º" },
    { nome: "Robert Val", rank: "5º" },
    { nome: "eyk", rank: "6º" }
  ];
  return (
    <Container>
      <ScreenNameHeader headerName="Rank" />
      <ScrollView>
        {cursos.map((curso, index) => (
          <ButtonCurso key={index} 
          onPress={botaoteste} 
          underlayColor="#795833">
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <IconImage
                source={require("../../../Components/img/IconeUsuario.png")}
              />

              <ButtonText>{curso.rank}</ButtonText>
              <ButtonText>{curso.nome}</ButtonText>
            </View>
          </ButtonCurso>
        ))}
      </ScrollView>
    </Container>
  );
}