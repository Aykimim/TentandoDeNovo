import React, { useState } from "react";
import { View, Image, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../Components/Theme";
import {
  Text,
  Container,
  SendButton,
  Textentrada,
  SendButtontextEsqueciSenha,
  SendButtontextBorda,
  TextEscrita,
  SendButtonEntrar,
  SendButtontextInscrever,
  SendButtontextPadrão,
  TextEscrita2,
  Container2
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

  const navigateToHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "MainTab" }]
    });
  };

  function navigateTelaCadastro() {
    navigation.navigate("TelaDeCadastro");
  }
  function navigateTest() {
    navigation.navigate("Test");
  }

  function navigateTest2() {
    navigation.navigate("Fatori");
  }
  function navigateToPerguntas() {
    navigation.navigate("Perguntas");
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
    // Simule uma autenticação bem-sucedida
    // Substitua esta lógica pela sua lógica de autenticação real
    if (nomeUser === "" && senha === "") {
      setLoggedIn(true);
      navigateToHome();
    } else {
      alert("Credenciais incorretas. Tente novamente.");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setNomeUser("");
    setSenha("");
  };
  return (
    <Container>
      {loggedIn ? (
        <>
          {/* <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              margin: 20,
              overflow: "hidden"
              
            }}
          >
            <Image
              source={require("../../../Components/img/LogoQuadrada.png")} // Substitua pelo caminho da sua imagem
              style={{ width: "100%", height: "100%" }}
            />
          </View>

          <Textbotao>Bem-vindo, {nomeUser}!</Textbotao>
          <SendButton onPress={handleLogout}>
            <SendButtontext>Logout</SendButtontext>
          </SendButton>

          <SendButton onPress={navigateToHome}>
            <SendButtontext>Entrar</SendButtontext>
          </SendButton>
          <SendButton onPress={navigateTest}>
            <SendButtontext>Test</SendButtontext>
          </SendButton>
          <SendButton onPress={navigateToPerguntas}>
            <SendButtontext>Perguntas</SendButtontext>
          </SendButton> */}
        </>
      ) : (
        <>
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              margin: 20,
              overflow: "hidden"
            }}
          >
            <Image
              source={require("../../../Components/img/LogoQuadrada.png")} // Substitua pelo caminho da sua imagem
              style={{ width: "100%", height: "100%" }}
            />
          </View>

          <Textentrada
            placeholder="Email:"
            placeholderTextColor={colors.textoPreto}
            value={nomeUser}
            onChangeText={(text) => setNomeUser(text)}
          />

          <Textentrada
            placeholder="Senha:"
            placeholderTextColor={colors.textoPreto}
            secureTextEntry={true}
            value={senha}
            onChangeText={(text) => setSenha(text)}
          />
          <SendButton onPress={navigateToEsqueciSenha}>
            <SendButtontextEsqueciSenha>
              Esqueci a senha.
            </SendButtontextEsqueciSenha>
          </SendButton>


          <SendButton onPress={navigateTest}>
            <SendButtontextEsqueciSenha>
            navigateTest
            </SendButtontextEsqueciSenha>
          </SendButton>
          <SendButton onPress={navigateTest2}>
            <SendButtontextEsqueciSenha>
            navigateTest2
            </SendButtontextEsqueciSenha>
          </SendButton>





          <SendButtontextBorda onPress={handleLogin}>
            <SendButtonEntrar>Entrar</SendButtonEntrar>
          </SendButtontextBorda>

          <Text
            style={{ textAlign: "center", marginTop: 10, marginBottom: 10 }}
          >
            Ou continue com:
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableWithoutFeedback onPress={handleLoginWithGoogle}>
              <Image
                source={require("../../../Components/img/google-icon.png")} // Substitua pelo caminho do ícone do Google
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 10,
                  borderRadius: 50
                }}
              />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={handleLoginWithFacebook}>
              <Image
                source={require("../../../Components/img/facebook-icon.png")} // Substitua pelo caminho do ícone do Facebook
                style={{ width: 50, height: 50, borderRadius: 80 }}
              />
            </TouchableWithoutFeedback>
          </View>

          <Container2>
            <SendButtontextPadrão>Não tem uma conta?</SendButtontextPadrão>
            <TextEscrita2 onPress={navigateTelaCadastro}>
              <SendButtontextInscrever>Inscreva-se</SendButtontextInscrever>
            </TextEscrita2>
          </Container2>

          {/* <SendButton onPress={handleAula}>
            <SendButtontext>Aula</SendButtontext>
          </SendButton> */}

          <TextEscrita style={{ flex: 0 }}>
            Ao se inscrever, você concorda com nossos Termos e Política de
            Privacidade Você pode excluir sua conta em suasconfigurações{" "}
          </TextEscrita>
        </>
      )}
    </Container>
  );
}
