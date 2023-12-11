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
  ContainerQuestao,
  ButtonTextRsposta,
  ButtonTexticone
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
      <ButtonTextGrande>Questão de Completar o Texto:</ButtonTextGrande>
    </View>
  );
}

function MyCustomRightComponent() {
  return     <View
  style={{
    position: "absolute",
    flexDirection: "row",
    alignItems: "center"
  }}
>
  <Icon name="heart" size={20} color={colors.textoBranco} />
  <ButtonTexticone style={{ marginLeft: 5 }}>5</ButtonTexticone>
</View>;
}

export default function App() {
  const navigation = useNavigation();
  const respostaCorreta1 = "Reutilização";
  const respostaCorreta2 = "Reciclagem";
  const respostaErrada1 = "Lixo";
  const respostaErrada2 = "Descarte";
  const respostaErrada3 = "Sustentável";
  const opcoes = [
    respostaCorreta1,
    respostaCorreta2,
    respostaErrada1,
    respostaErrada2,
    respostaErrada3
  ];
  const [respostaSelecionada, setRespostaSelecionada] = useState(
    Array(opcoes.length).fill(null)
  );

  const verificarResposta = (opcao) => {
    const indexPrimeiroEspacoVazio = respostaSelecionada.indexOf(null);

    if (indexPrimeiroEspacoVazio !== -1) {
      const novaResposta = [...respostaSelecionada];
      novaResposta[indexPrimeiroEspacoVazio] = opcao;
      setRespostaSelecionada(novaResposta);
    }
  };

  const prosseguir = () => {
    if (
      respostaSelecionada[0] === respostaCorreta1 &&
      respostaSelecionada[1] === respostaCorreta2
    ) {
      // alert("Resposta correta!");
      navigateToPerguntaCerta();
    } else {
      alert("Resposta incorreta. Tente novamente.");
      // Resposta incorreta, resetar os campos
      setRespostaSelecionada(Array(opcoes.length).fill(null));
    }
  };

  const navigateToPerguntaCerta = () => {
    navigation.navigate("PerguntaTres");
  };

  return (
    <Container>
      <View>
        <Header
          backgroundColor={colors.primaria}
          leftComponent={<MyCustomLeftComponent />}
          centerComponent={<MyCustomCenterComponent />}
          rightComponent={<MyCustomRightComponent />}
        />

        <View style={{ padding: 20 }}>
          <ButtonTextPergunta style={{ textAlign: "center" }}>
            A economia circular visa promover a{" "}
            <View style={{ flexDirection: "row" }}>
              <ButtonTextRsposta
                style={{
                  backgroundColor: respostaSelecionada[0]
                    ? colors.primaria
                    : colors.fundo,
                  width: 150,
                  height: 25,
                  padding: 0,
                  margin: 0
                }}
              >
                {respostaSelecionada[0] || "__________"}
              </ButtonTextRsposta>
              <ButtonTextPergunta> é </ButtonTextPergunta>
              <ButtonTextRsposta
                style={{
                  backgroundColor: respostaSelecionada[1]
                    ? colors.primaria
                    : colors.fundo,
                  width: 150,
                  height: 25,
                  padding: 0,
                  margin: 0
                }}
              >
                {respostaSelecionada[1] || "__________"}
              </ButtonTextRsposta>
            </View>
            reduzindo o desperdício e minimizando o impacto ambiental.{" "}
          </ButtonTextPergunta>

          <ContainerPerguntas>
            {opcoes.map((opcao, index) => (
              <ButtonCurso
                key={index}
                onPress={() => verificarResposta(opcao)}
                style={{
                  backgroundColor:
                  verificarResposta === "opcao"
                      ? colors.primaria
                      : colors.secundaria
                }}
              >
                <ButtonText>{opcao}</ButtonText>
              </ButtonCurso>
            ))}
          </ContainerPerguntas>
          <ButtonConfirmar onPress={prosseguir}>
            <ButtonTextConfirmar>Prosseguir</ButtonTextConfirmar>
          </ButtonConfirmar>
        </View>
      </View>
    </Container>
  );
}
