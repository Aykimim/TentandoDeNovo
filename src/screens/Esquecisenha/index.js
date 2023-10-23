import React, { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Container, SendButton, SendButtontext, StyledInput,TextEscrita,CustomButton } from "./styles";

export default function App() {
  const navigation = useNavigation();

  const handleEsqueciSenha = () => {
    // Implemente a lógica para recuperação de senha aqui
    alert("Enviamos instruções para redefinir sua senha para o seu e-mail.");
  };

  function navigateToVoltar() {
    navigation.navigate("Login");
  }

  const [email,setEmail] = useState('');
    const [emailInput,setEmailInput] = useState('');

    async function handleSetEmail(email){
        setEmail(email);
    }

  return (
    <Container>
      <StatusBar />
      {/* <Text>{email}</Text> */}

      <TextEscrita style={{ flex: 0 }}>
        Recuperação de senha{" "} 
        {/* Email de recuperação enviado com sucesso.{" "} */}
      </TextEscrita>

      <TextEscrita style={{ flex: 0 }}>
        Para recuperar a sua senha, informe seu endereço de email que nós
        enviaremos um link para a alteração da senha.{" "}
      </TextEscrita>
      <StyledInput
        keyboardType="email-address"
        onChangeText={(t) => setEmailInput(t)}
        placeholder="insira um email"
      />
            {/* <CustomButton onPress={()=> handleSetEmail(emailInput)}>
                <SendButtontext>Set</SendButtontext>
            </CustomButton> */}

      <SendButton onPress={handleEsqueciSenha} >
        <SendButtontext>Enviar</SendButtontext>
      </SendButton>

      <SendButton onPress={navigateToVoltar} >
        <SendButtontext>Voltar</SendButtontext>
      </SendButton>

    </Container>
  );
}
