import React from "react";
import {
  
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ScrollView
} from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../../Components/Theme";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  Text,
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

  function goBack(){
    navigation.goBack()
  }

  return (
    <ButtonText onPress={goBack}>
      <Icon name="arrow-left" size={20} color={colors.branco} />
    </ButtonText>
  );
}

function MyCustomCenterComponent() {
  return (
    <View style={{ flexDirection: "space-between", alignItems: "center", padding: "2%", }}>
      <IconImage source={require("../../../Components/img/IconeUsuario.png")} />
      <Text>Adam Levi</Text>
    </View>
  );
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
        backgroundColor={colors.primaria}
        leftComponent={<MyCustomLeftComponent />}
        centerComponent={<MyCustomCenterComponent />}
      />

      <ScrollView>
        <ButtonCurso key="1" onPress={editarNome} underlayColor={colors.primaria}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>Editar Nome</ButtonText>
          </View>
        </ButtonCurso>

        <ButtonCurso key="2" onPress={editarFotoPerfil} underlayColor={colors.primaria}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>Editar Foto de Perfil</ButtonText>
          </View>
        </ButtonCurso>

        <ButtonCurso key="3" onPress={alterarSenha} underlayColor={colors.primaria}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>Alterar Senha</ButtonText>
          </View>
        </ButtonCurso>

        <ButtonCurso key="5" onPress={navigateToSair} underlayColor={colors.primaria}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>Sair</ButtonText>
          </View>
        </ButtonCurso>
      </ScrollView>
    </Container>
  );
}
