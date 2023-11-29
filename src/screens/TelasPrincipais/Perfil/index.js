import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { 
  Container,
  View,
  PerfilText,
  Title,
  ButtonCurso,
  IconImage,
  ButtonText
} from "./styles";

//components
import HeaderPerfil from "../../../Components/FotoPerfil";
import ScreenNameHeader from "../../../Components/ScreenNameHeader";

//imagens
import coxinha from "../../../Components/img/coxinha.png";

//variáveis
import nomeUsuario from "../../Entrada/Login/index";
import { ScrollView } from "react-native-gesture-handler";


export default function App() {
  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.goBack();
  }

  function navigateToCursoDetalhado() {
    navigation.navigate("CursoDetalhado");
  }

  const userName = "Nome Usuário";
  const userEmail = "usuário@gmail.com";
  const userPhone = "28 999425652";
  const userPlan = "Básico";

  const cursos = [ 
    { nome: "Empreendedorismo" },
    { nome: "Finanças" },
    { nome: "Marketing" },
    { nome: "Gestão de RH" },
    { nome: "Planejamento" },
    { nome: "eyk" }
  ];

  

  return (
    <View>
        <ScreenNameHeader headerName="Perfil" />
        <HeaderPerfil
          source={(require = coxinha)}
          username={nomeUsuario}
        ></HeaderPerfil>
        <Container>
          <Title>Informações</Title>
          <PerfilText>Nome: {userName}</PerfilText>
          <PerfilText>E-mail: {userEmail}</PerfilText>
          <PerfilText>Celular: {userPhone}</PerfilText>
          <PerfilText>Plano: {userPlan}</PerfilText>
        </Container>
 
        <Container>
          <Title>Status de cursos</Title>
          <ScrollView>
            {cursos.map((curso, index) => (
              <ButtonCurso
                key={index}
                onPress={() => navigateToCursoDetalhado()} 
                underlayColor="#E16539"
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <IconImage
                    source={"../../../Components/img/LogoQuadrada.png"}
                  />
                  <ButtonText>{curso.nome}</ButtonText>
                </View>
              </ButtonCurso>
            ))}
          </ScrollView>
        </Container>
    </View>
  );
}