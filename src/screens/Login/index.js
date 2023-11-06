import React, { useState } from "react";
import { View, Image, TouchableWithoutFeedback } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import Icon from "react-native-vector-icons/FontAwesome";


import {
  CustomButton,
  TouchableOpacity,
  Text,
  Container,
  Textbotao,
  SendButton,
  CampoNome,
  Textentrada,
  SendButtontext,
  SendButtontextEsqueciSenha,
  SendButtontextBorda,
  TextEscrita
} from "./styles";

// import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [nomeUser, setNomeUser] = useState("");
  const [senha, setSenha] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigation = useNavigation();

  // const handleEsqueciSenha = () => {
  //   // Implemente a lógica para recuperação de senha aqui
  //   alert("Enviamos instruções para redefinir sua senha para o seu e-mail.");
  // };
  function navigateToEsqueciSenha() {
    navigation.navigate("Esquecisenha");
  }

  function navigateToHome() {
    navigation.reset({
      routes: [{ name: "MainTab" }]
    });
  }

  function navigateToPerguntas() {
    navigation.navigate("Perguntas");
  }

  function handleAula() {
    navigation.reset({
      routes: [{ name: "BotonTab" }]
    });
  }
  const handleLoginWithGoogle = () => {
    // Adicione a lógica de login com o Google aqui
    alert("Login com o Google");
  };

  const handleLoginWithFacebook = () => {
    // Adicione a lógica de login com o Facebook aqui
    alert("Login com o Facebook");
  };

  const handleLogin = () => {
    // autenticação (nome e senha)
    if (nomeUser === "" && senha === "") {
      setLoggedIn(true);
    } else {
      alert("Credenciais incorretas. Tente novamente.");
    }
  };

  // const menunavi = () => {
  //   "../screens/menu";
  // };

  const handleLogout = () => {
    setLoggedIn(false);
    setNomeUser("");
    setSenha("");
  };
  return (
    <Container>
      {loggedIn ? (
        <>
          <Image
            source={require("../../Components/img/LogoQuadrada.png")} // Substitua pelo caminho da sua imagem
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />

          <Textbotao>Bem-vindo, {nomeUser}!</Textbotao>
          <SendButton onPress={handleLogout}>
            <SendButtontext>Logout</SendButtontext>
          </SendButton>

          <SendButton onPress={navigateToHome}>
            <SendButtontext>Entrar</SendButtontext>
          </SendButton>

          <SendButton onPress={navigateToPerguntas}>
            <SendButtontext>Perguntas</SendButtontext>
          </SendButton>
        </>
      ) : (
        <>
          <Image
            source={require("../../Components/img/LogoQuadrada.png")} // Substitua pelo caminho da sua imagem
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          
          <Textentrada
            placeholder="Email:"
            placeholderTextColor={"#fff"}
            value={nomeUser}
            onChangeText={(text) => setNomeUser(text)}
          />

          <Textentrada
            placeholder="Senha:"
            placeholderTextColor={"#fff"}
            secureTextEntry={true}
            value={senha}
            onChangeText={(text) => setSenha(text)}
          />
          <SendButton onPress={navigateToEsqueciSenha}>
            <SendButtontextEsqueciSenha>Esqueci a senha.</SendButtontextEsqueciSenha>
          </SendButton>
          <SendButton onPress={handleLogin}>
            <SendButtontextBorda>Entrar</SendButtontextBorda>
          </SendButton>

          <Text
            style={{ textAlign: "center", marginTop: 10, marginBottom: 10 }}
          >
            Ou continue com:
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableWithoutFeedback onPress={handleLoginWithGoogle}>
              <Image
                source={require("../../Components/img/google-icon.png")} // Substitua pelo caminho do ícone do Google
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 10,
                  borderRadius: 50
                }}
              />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={handleLoginWithFacebook}>
              <Image
                source={require("../../Components/img/facebook-icon.png")} // Substitua pelo caminho do ícone do Facebook
                style={{ width: 40, height: 40, borderRadius: 50 }}
              />
            </TouchableWithoutFeedback>
          </View>

          <SendButton onPress={handleAula}>
            <SendButtontext>Aula</SendButtontext>
          </SendButton>

          <TextEscrita style={{ flex: 0 }}>
            Ao se inscrever, você concorda com nossos Termos e Política de
            Privacidade Você pode excluir sua conta em suasconfigurações{" "}
          </TextEscrita>
        </>
      )}
    </Container>
  );
}
