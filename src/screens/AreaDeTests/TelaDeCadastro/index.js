import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import {
  ChangeableButtonContainer,
  ChangeableButton,
  ChangeableButtonText,
  Container,
  Textentrada,
  CustomButton,
  ButtonText
} from "./styles";

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
