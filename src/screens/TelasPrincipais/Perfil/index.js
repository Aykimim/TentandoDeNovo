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
import { colors } from "../../../Components/Theme";
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

  function navigateToAmigo() {
    alert("Você é amigo dele(a)");
  }

  const userName = "Adam Levi";
  const userEmail = "AdamLevi@gmail.com";
  const userPhone = "28 999425652";
  const userPlan = "Básico";

  const Pessoas = [

    { nome: "Eykimim Aniceto", rank: "6º" },
    { nome: "Alicia Mendes", rank: "7º" },
    { nome: "Lucas Oliveira", rank: "8º" },
    { nome: "Isabella Rocha", rank: "9º" },
    { nome: "Felipe Silva", rank: "10º" },
    { nome: "Gabriela Santos", rank: "11º" },
    { nome: "Diego Pereira", rank: "12º" },
    { nome: "Juliana Costa", rank: "13º" },
    { nome: "Thiago Souza", rank: "14º" },
    { nome: "Larissa Lima", rank: "15º" },
    { nome: "Anderson Oliveira", rank: "16º" }
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

          <Title>Meus Amigos</Title>
        <Container>

            {Pessoas.map((curso, index) => (
              <ButtonCurso
                key={index}
                onPress={() => navigateToAmigo()}
                underlayColor={colors.primaria}
              >
                <ViewButao style={{ flexDirection: "row", alignItems: "center" }}>
                  <IconImage source={require("../../../Components/img/IconeUsuario.png")} />
                  <ButtonText>{curso.nome}</ButtonText>
                </ViewButao>
              </ButtonCurso>
            ))} 
        </Container>
      </ScroolView>
    </View>
  );
}