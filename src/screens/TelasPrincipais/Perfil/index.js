import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { 
  Container,
  View,
  PerfilText,
  Text
} from "./styles";

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

  const userName = "Nome Usuário";
  const userEmail = "usuário@gmail.com";
  const userPhone = "28 999425652";
  const userPlan = "Básico";

  return (
    <View>
      <ScreenNameHeader headerName="Perfil" />
      <HeaderPerfil
        source={(require = coxinha)}
        username={nomeUsuario}
      ></HeaderPerfil>
      <Container>
        <PerfilText>Nome: {userName}</PerfilText>
        <PerfilText>E-mail: {userEmail}</PerfilText>
        <PerfilText>Celular: {userPhone}</PerfilText>
        <PerfilText>Plano: {userPlan}</PerfilText>
      </Container>
    </View>
  );
}
