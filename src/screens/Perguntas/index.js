import React, { useState } from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

import {
  TouchableOpacity,
  Text,
  Container,
  Textbotao,
  SendButton,
  CampoNome,
  Textentrada,
  SendButtontext,
  TextEscrita
} from "./styles";

// import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [nomeUser, setNomeUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedIn3, setLoggedIn3] = useState(false);
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate("Home");
  }
  function navigateToSair() {
    navigation.navigate("Login");
  }

  const handlePergunta1 = () => {
    // autenticação (nome e senha)
    if (nomeUser === "Coxinha") {
      setLoggedIn(true);
    } else {
      alert("Resposta incorreta. Tente novamente.");
    }
  };
  const handlePergunta2 = () => {
    // autenticação (nome e senha)
    if (nomeUser === "Coxinha") {
      setLoggedIn(true);
    } else {
      alert("Resposta incorreta. Tente novamente.");
    }
  };
  const handlePergunta3 = () => {
    // autenticação (nome e senha)
    if (nomeUser === "Coxinha") {
      setLoggedIn3(true);
    } else {
      alert("Resposta incorreta. Tente novamente.");
    }
  };
  const handleLogout = () => {
    setLoggedIn(false);
    setLoggedIn3(false);
    setNomeUser("");
  };
  return (
    <Container>
      {loggedIn ? (
        <>
          <Textbotao>Pergunta Numero 2, {nomeUser}!</Textbotao>

          <TextEscrita style={{ flex: 0 }}>lalallalal ____ </TextEscrita>
          <Textentrada
            placeholder="Resposta"
            placeholderTextColor={"#fff"}
            value={nomeUser}
            onChangeText={(text) => setNomeUser(text)}
          />

          <SendButton onPress={handlePergunta2}>
            <SendButtontext>Entrar</SendButtontext>
          </SendButton>

          <SendButton onPress={navigateToSair}>
            <SendButtontext>Sair.</SendButtontext>
          </SendButton>
        </>
      ) : loggedIn3 ? (
        <>
          <Textbotao>Pergunta Numero 3, {nomeUser}!</Textbotao>

          <TextEscrita style={{ flex: 0 }}>aaaaaaaaa ____ </TextEscrita>
          <Textentrada
            placeholder="Resposta"
            placeholderTextColor={"#fff"}
            value={nomeUser}
            onChangeText={(text) => setNomeUser(text)}
          />

          <SendButton onPress={handlePergunta3}>
            <SendButtontext>Entrar</SendButtontext>
          </SendButton>

          <SendButton onPress={navigateToSair}>
            <SendButtontext>Sair.</SendButtontext>
          </SendButton>
        </>
      ) : (
        <>
          <Textbotao>Pergunta 1</Textbotao>
          <TextEscrita style={{ flex: 0 }}>
            Batatinha quando nasce se derrama pelo ____{" "}
          </TextEscrita>
          <Textentrada
            placeholder="Resposta"
            placeholderTextColor={"#fff"}
            value={nomeUser}
            onChangeText={(text) => setNomeUser(text)}
          />

          <SendButton onPress={handlePergunta1}>
            <SendButtontext>Entrar</SendButtontext>
          </SendButton>

          <SendButton onPress={navigateToSair}>
            <SendButtontext>Sair.</SendButtontext>
          </SendButton>
        </>
      )}
    </Container>
  );
}
