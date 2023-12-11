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
import Svg, { Circle, Path, Line } from "react-native-svg";
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
    navigation.navigate("TelaVideo");
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

            <Svg
             
              width="102"
              height="102"
              viewBox="0 0 102 102"
              fill="none"
            >
              <Path
                d="M3 1H49.7987C50.9033 1 51.7987 1.89543 51.7987 3V19.3908H99C100.105 19.3908 101 20.2862 101 21.3908V35C101 36.1046 100.105 37 99 37H83.7476V88C83.7476 89.1046 82.8522 90 81.7476 90H64.0224C62.9178 90 62.0224 89.1046 62.0224 88V37H48.0479C46.9434 37 46.0479 36.1046 46.0479 35V21.3908C46.0479 20.2862 46.9434 19.3908 48.0479 19.3908H3C1.89543 19.3908 1 18.4954 1 17.3908V3C1 1.89543 1.89543 1 3 1Z"
                fill={colors.primaria}
              />
              <Path
                d="M3 42H49.7987C50.9033 42 51.7987 42.8954 51.7987 44V59C51.7987 60.1046 50.9033 61 49.7987 61H34.5H15.0575V77.1609C15.0575 78.2655 15.9529 79.1609 17.0575 79.1609H49.7987C50.9033 79.1609 51.7987 80.0564 51.7987 81.1609V99C51.7987 100.105 50.9033 101 49.7987 101H3C1.89543 101 1 100.105 1 99V61V44C1 42.8954 1.89543 42 3 42Z"
                fill={colors.primaria}
              />
              <Path
                d="M51.7987 19.3908V3C51.7987 1.89543 50.9033 1 49.7987 1H3C1.89543 1 1 1.89543 1 3V17.3908C1 18.4954 1.89543 19.3908 3 19.3908H51.7987ZM51.7987 19.3908H99C100.105 19.3908 101 20.2862 101 21.3908V35C101 36.1046 100.105 37 99 37H83.7476M51.7987 19.3908H48.0479C46.9434 19.3908 46.0479 20.2862 46.0479 21.3908V35C46.0479 36.1046 46.9434 37 48.0479 37H62.0224M1 61V44C1 42.8954 1.89543 42 3 42H49.7987C50.9033 42 51.7987 42.8954 51.7987 44V59C51.7987 60.1046 50.9033 61 49.7987 61H34.5H15.0575M1 61V99C1 100.105 1.89543 101 3 101H49.7987C50.9033 101 51.7987 100.105 51.7987 99V81.1609C51.7987 80.0563 50.9033 79.1609 49.7987 79.1609H17.0575C15.9529 79.1609 15.0575 78.2655 15.0575 77.1609V61M1 61H15.0575M62.0224 37V88C62.0224 89.1046 62.9178 90 64.0224 90H81.7476C82.8522 90 83.7476 89.1046 83.7476 88V37M62.0224 37H83.7476"
                stroke={colors.primaria}
              />
            </Svg>
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
