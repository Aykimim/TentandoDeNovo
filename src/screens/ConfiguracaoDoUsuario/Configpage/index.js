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
      routes: [{ name: 'MainTab' }],
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
      <IconImage source={require("../../../Components/img/IconeUsuario.png")} />
      <ButtonText>Adam Levi</ButtonText>
    </View>
  );
}

function MyCustomRightComponent() {
  return <ButtonText></ButtonText>;
}

export default function App() {
  const navigation = useNavigation();



  // Adicione funções específicas para cada botão
  function editarNome() {
    alert("Lógica para editar nome");
  }

  function editarFotoPerfil() {
    alert("Lógica para editar foto de perfil");
  }

  function alterarSenha() {
    alert("Lógica para alterar senha");
  }

  function navigateToSair() {
    navigation.navigate("Login");
  }

  return (
    <Container>
      <Header
        backgroundColor="#303030"
        leftComponent={<MyCustomLeftComponent />}
        centerComponent={<MyCustomCenterComponent />}
        rightComponent={<MyCustomRightComponent />}
      />

      <ScrollView>
        <ButtonCurso key="1" onPress={editarNome} underlayColor="#e16539">
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>Editar Nome</ButtonText>
          </View>
        </ButtonCurso>

        <ButtonCurso key="2" onPress={editarFotoPerfil} underlayColor="#e16539">
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>Editar Foto de Perfil</ButtonText>
          </View>
        </ButtonCurso>

        <ButtonCurso key="3" onPress={alterarSenha} underlayColor="#e16539">
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>Alterar Senha</ButtonText>
          </View>
        </ButtonCurso>

        <ButtonCurso key="5" onPress={navigateToSair} underlayColor="#e16539">
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>Sair</ButtonText>
          </View>
        </ButtonCurso>
      </ScrollView>
    </Container>
  );
}
