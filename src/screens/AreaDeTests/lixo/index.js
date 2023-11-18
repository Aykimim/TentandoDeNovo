import React from "react";

import { StyleSheet, Text, ScrollView } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import ProgressBar from "react-native-progress/Bar"; // Certifique-se de instalar o pacote react-native-progress
import {
  Container,
  ButtonPerfil,
  ButtonText,
  SendButton,
  SendButtontext,
  View,
  ProgressContainer
} from "./styles";

//components
import HeaderPerfil from "../../Components/FotoPerfil";

//imagens
import coxinha from "../../Components/img/coxinha.png";

//variáveis
import nomeUsuario from "../Login/index";

export default function App() {
  const navigation = useNavigation();

  const botaoteste = () => {
    alert("Teste");
  };
  function navigateToLogin() {
    navigation.goBack();
  }
  const cursos = [
    { nome: "Empreendedorismo" },
    { nome: "Finanças" },
    { nome: "Marketing" },
    { nome: "Gestão de Rh" },
    { nome: "Planejamento" },
    { nome: "eyk" }
  ];
  return (
    <View>
      <HeaderPerfil
        source={(require = coxinha)}
        username={nomeUsuario}
      ></HeaderPerfil>

      <Container>
        <ScrollView>
          {cursos.map((curso, index) => (
            <ButtonPerfil
              key={index}
              onPress={botaoteste}
              underlayColor="#795833"
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <ButtonText>{curso.nome}</ButtonText>
                <ProgressContainer>
                  <ProgressBar progress={0.5} width={100} color={"#795833"} />
                </ProgressContainer>
              </View>
            </ButtonPerfil>
          ))}
        </ScrollView>
      </Container>
    </View>
  );
}
