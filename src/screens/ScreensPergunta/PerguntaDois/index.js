import React, { useState } from "react";
import { View, TouchableOpacity, Text, Button } from "react-native";
import { Header } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../../Components/Theme";
import {
  Container,
  ButtonText,
  ButtonTextGrande,
  ButtonCurso,
  ButtonTextPergunta,
  ContainerPerguntas,
  ButtonTextTitulo,
  ButtonConfirmar,
  ButtonTextConfirmar,
  ContainerQuestao
} from "./styles";

function MyCustomLeftComponent() {
  const navigation = useNavigation();

  function navigateToVoltar() {
    navigation.reset({
      index: 0,
      routes: [{ name: "MainTab" }]
    });
  }

  return (
    <ButtonTextTitulo onPress={navigateToVoltar}>
      <Icon name="arrow-left" size={20} color={colors.branco} />
    </ButtonTextTitulo>
  );
}

function MyCustomCenterComponent() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <ButtonTextGrande numberOfLines={1}>
        Questão de Múltipla Escolha:
      </ButtonTextGrande>
    </View>
  );
}

function MyCustomRightComponent() {
  return <ButtonText></ButtonText>;
}

export default function App() {
  const navigation = useNavigation();
  const respostaCorreta = "reutilização e reciclagem";
  const opcoes = ["sustentabilidade e redução", "custos e reutilização", "reutilização e reciclagem", "inovaçãoe e  reciclagem"];
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [mostrarBotao, setMostrarBotao] = useState(false);

  const verificarResposta = (opcao) => {
    setRespostaSelecionada(opcao);
    setMostrarBotao(true);
  };

  const prosseguir = () => {
    if (respostaSelecionada === respostaCorreta) {
      alert("Resposta correta!");
      // Adicione lógica adicional para lidar com a resposta correta
      navigateToPerguntaCerta();
    } else {
      alert("Resposta incorreta. Tente novamente.");
    }
    // Adicione qualquer lógica adicional necessária antes de prosseguir
  };



  
  function navigateToPerguntaCerta() {
    navigation.navigate("PerguntaTres");
  }

  

  return (
    <Container>
      <Header
        backgroundColor={colors.primaria}
        leftComponent={<MyCustomLeftComponent />}
        centerComponent={<MyCustomCenterComponent />}
        rightComponent={<MyCustomRightComponent />}
      />
      <ContainerQuestao>
      <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 20 }}>
        A economia circular visa promover a {respostaSelecionada || "__________"} e a {respostaSelecionada || "____________"}, reduzindo o desperdício e minimizando o impacto ambiental.
      </Text>
      {opcoes.map((opcao, index) => (
        <ButtonCurso
          key={index}
          style={{
            backgroundColor: respostaSelecionada === opcao ? colors.primaria : colors.fundo,
          }}
          onPress={() => verificarResposta(opcao)}
        >
          <Text>{opcao}</Text>
        </ButtonCurso>
      ))}
      {mostrarBotao && (
       
<ButtonConfirmar
         
title="Prosseguir"
          onPress={prosseguir}

          underlayColor={colors.secundaria}
      
        >
          <ButtonTextConfirmar>Prosseguir</ButtonTextConfirmar>
        </ButtonConfirmar>

      )}
    </View>


        
    
      </ContainerQuestao>
    </Container>
  );
}

{/* <ContainerQuestao>
<View style={{ flex: 1, padding: 20 }}>
  <ButtonTextTitulo >
    A economia circular visa promover a{" "}
    {respostaSelecionada || "__________"} e a{" "}
    {respostaSelecionada || "____________"}, reduzindo o desperdício e
    minimizando o impacto ambiental.
  </ButtonTextTitulo>
  {opcoes.map((opcao, index) => (
    <TouchableOpacity
      key={index}
      style={{
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        alignItems: "center",
        backgroundColor:
          respostaSelecionada === opcao ? "yellow" : "white"
      }}
      onPress={() => verificarResposta(opcao)}
    >
      <Text>{opcao}</Text>
    </TouchableOpacity>
  ))}
  {mostrarBotao && (
    <ButtonConfirmar
      title="Prosseguir"
      onPress={prosseguir}
      underlayColor={colors.secundaria}
    >
      <ButtonTextConfirmar>Prosseguir</ButtonTextConfirmar>
    </ButtonConfirmar>
  )}
</View>
</ContainerQuestao> */}