import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import {
  ChangeableButtonContainer,
  ChangeableButton,
  ChangeableButtonText,
  Container,
  Textentrada,
  CustomButton,
  ButtonText,
  ContainerPai
} from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { Header } from "react-native-elements";
function MyCustomLeftComponent() {
  const navigation = useNavigation();

  function navigateToVoltar() {
    navigation.navigate("Login");
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
      <ButtonText>Cadastro</ButtonText>
    </View>
  );
}

function MyCustomRightComponent() {
  return <ButtonText></ButtonText>;
}

export default function App() {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);

  function goToNextScreen(tela) {
    navigation.navigate(tela);
  }

  const handleText = () => {
    setIsPressed(!isPressed);
  };

  const [isSquare, setIsSquare] = useState(true);

  const handlePress = () => {
    setIsSquare((prev) => !prev);
  };

  return (
    <Container>
      <Header
        backgroundColor="#E16539"
        leftComponent={<MyCustomLeftComponent />}
        centerComponent={<MyCustomCenterComponent />}
        rightComponent={<MyCustomRightComponent />}
      />

      <Textentrada
        isPressed={isPressed}
        onPress={handleText}
        placeholder="Nome"
      />
      <Textentrada placeholder="Email" />
      <Textentrada placeholder="Celular" />
      <Textentrada placeholder="Senha" secureTextEntry={true} />
      <Textentrada placeholder="Confirma Senha" secureTextEntry={true} />

      <CustomButton onPress={() => goToNextScreen("Login")}>
        <ButtonText>cadastrar</ButtonText>
      </CustomButton>

      <ChangeableButtonContainer>
        <ChangeableButton isSquare={isSquare} onPress={handlePress}>
          <ChangeableButtonText>Clique</ChangeableButtonText>
        </ChangeableButton>
      </ChangeableButtonContainer>
    </Container>
  );
}
