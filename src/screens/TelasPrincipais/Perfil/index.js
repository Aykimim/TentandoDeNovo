import React from "react";

import { StyleSheet, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Container, SendButton, SendButtontext, View } from "./styles";

//components
import HeaderPerfil from "../../../Components/FotoPerfil";
import ScreenNameHeader from "../../../Components/ScreenNameHeader";

//imagens
import coxinha from "../../../Components/img/coxinha.png";

//variáveis
import nomeUsuario from "../../Entrada/Login/index";

export default function App() {
  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.goBack();
  }

  return (
    <View>
      <ScreenNameHeader headerName="Perfil" />
      <HeaderPerfil
        source={(require = coxinha)}
        username={nomeUsuario}
      ></HeaderPerfil>

      <Container></Container>
    </View>
  );
}
