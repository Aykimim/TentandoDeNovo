import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ScrollView
} from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors, darkTheme, blueTheme } from "../../../Components/Theme"; // Importe também o tema escuro

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

  function goBack() {
    navigation.goBack();
  }

  return (
    <ButtonText onPress={goBack}>
      <Icon name="arrow-left" size={20} color={colors.branco} />
    </ButtonText>
  );
}

function MyCustomCenterComponent() {
  return (
    <View
      style={{
        flexDirection: "space-between",
        alignItems: "center",
        padding: "2%"
      }}
    >
      <IconImage source={require("../../../Components/img/IconeUsuario.png")} />
      <Text>Adam Levi</Text>
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

  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    // setIsDarkMode((prevMode) => !prevMode);
  }

return (
  <Container>
    <Header
      leftComponent={<MyCustomLeftComponent />}
      centerComponent={<MyCustomCenterComponent />}
      rightComponent={<MyCustomRightComponent />}
      // Move backgroundColor inside the Header component
      backgroundColor={isDarkMode ? darkTheme.colors.primaria : colors.primaria}
    />
    <ScrollView>
      <ButtonCurso
        key="0"
        onPress={toggleDarkMode}
        underlayColor={colors.primaria}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>

          <Icon name="adjust" size={20} color={colors.branco} />
          <ButtonText>Tema</ButtonText>
        </View>
      </ButtonCurso>

        <ButtonCurso
          key="2"
          onPress={editarFotoPerfil}
          underlayColor={colors.primaria}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>Editar Foto de Perfil</ButtonText>
          </View>
        </ButtonCurso>

        <ButtonCurso
          key="3"
          onPress={alterarSenha}
          underlayColor={colors.primaria}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>Alterar Senha</ButtonText>
          </View>
        </ButtonCurso>

        <ButtonCurso
          key="5"
          onPress={navigateToSair}
          underlayColor={colors.primaria}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>Sair</ButtonText>
          </View>
        </ButtonCurso>
      </ScrollView>
    </Container>
  );
}
