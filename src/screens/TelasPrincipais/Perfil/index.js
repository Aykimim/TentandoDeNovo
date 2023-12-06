import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  Container,
  View,
  PerfilText,
  Title,
  ButtonCurso,
  IconImage,
  ButtonText,
  ScroolView,
  ViewButao
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

  function navigateToCursoDetalhado() {
    navigation.navigate("CursoDetalhado");
  }

  const userName = "Adam Levi";
  const userEmail = "AdamLevi@gmail.com";
  const userPhone = "28 999425652";
  const userPlan = "Básico";

  const cursos = [
    { nome: "Empreendedorismo" },
    { nome: "Finanças" },
    { nome: "Marketing" },
    { nome: "Gestão de RH" },
    { nome: "Planejamento" },
    { nome: "Carreira" }
  ];

  return (
    <View>
      
      <HeaderPerfil source={coxinha} username={nomeUsuario}></HeaderPerfil>
      <ScroolView>
        <Title>Informações</Title>
        <Container>
          <PerfilText>Nome: {userName}</PerfilText>
          <PerfilText>E-mail: {userEmail}</PerfilText>
          <PerfilText>Celular: {userPhone}</PerfilText>
          <PerfilText>Plano: {userPlan}</PerfilText>
        </Container>

          <Title>Meus cursos</Title>
        <Container>

            {cursos.map((curso, index) => (
              <ButtonCurso
                key={index}
                onPress={() => navigateToCursoDetalhado()}
                underlayColor="#FFC61A"
              >
                <ViewButao style={{ flexDirection: "row", alignItems: "center" }}>
                  <IconImage source={require("../../../Components/img/LogoQuadrada.png")} />
                  <ButtonText>{curso.nome}</ButtonText>
                </ViewButao>
              </ButtonCurso>
            ))} 
        </Container>
      </ScroolView>
    </View>
  );
}