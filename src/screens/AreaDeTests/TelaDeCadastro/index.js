import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Textentrada,
  CustomButton,
  ButtonText
} from './styles';

export default function App() {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);

  function goToNextScreen(tela) {
    navigation.navigate(tela);
  }

  const handleText = () => {
    setIsPressed(!isPressed);
  }

  return (
    <Container>
      <Textentrada
        isPressed={isPressed}
        onPress={handleText} // Certifique-se de que isso seja tratado corretamente
        placeholder='Nome'
      />
                <Textentrada
                    placeholder='Email'
                >
                </Textentrada>

                <Textentrada
                    placeholder='Celular'
                >
                </Textentrada>

                <Textentrada
                    placeholder='Senha'
                    secureTextEntry = {true}
                >
                </Textentrada>
                <Textentrada
                    placeholder='Confirma Senha'
                    secureTextEntry = {true}
                >
                </Textentrada>

                <CustomButton onPress={()=>{goToNextScreen('Login')}}>
                    <ButtonText>cadastrar</ButtonText>
                </CustomButton>
        </Container>
    );
}