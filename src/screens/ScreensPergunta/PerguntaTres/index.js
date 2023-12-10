import React, { useState } from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../../Components/Theme";
import { Alert } from "react-native";
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
  caixaDestino,
  caixaOpcao
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
      Questão de Ligar os Pontos
      </ButtonTextGrande>
    </View>
  );
}

function MyCustomRightComponent() {
  return <ButtonText></ButtonText>;
}

export default function App() {
  const navigation = useNavigation();
  

  function navigateToPerguntaCerta() {
    navigation.navigate("PerguntaDois");
  }
  const correspondencias = ["Tecnologias Verdes", "Inovação Social", "Educação e Conscientização"];
  const [correspondenciaSelecionada, setCorrespondenciaSelecionada] = useState(Array(correspondencias.length).fill(null));

  const verificarResposta = (opcao, index) => {
    const novaCorrespondencia = [...correspondenciaSelecionada];
    novaCorrespondencia[index] = opcao;
    setCorrespondenciaSelecionada(novaCorrespondencia);

    // Verificar se todas as correspondências foram feitas
    if (!novaCorrespondencia.includes(null)) {
      validarRespostas(novaCorrespondencia);
    }
  };

  const validarRespostas = (respostas) => {
    const respostasCorretas = ["Tecnologias Verdes", "Inovação Social", "Educação e Conscientização"];
    
    // Verificar se as respostas são corretas
    if (JSON.stringify(respostas) === JSON.stringify(respostasCorretas)) {
      Alert.alert("Respostas corretas!", "Parabéns!");
    } else {
      Alert.alert("Respostas incorretas!", "Tente novamente.");
      // Reiniciar as respostas
      setCorrespondenciaSelecionada(Array(correspondencias.length).fill(null));
    }
  };

  return (
    <Container>
      <Header
        backgroundColor={colors.primaria}
        leftComponent={<MyCustomLeftComponent />}
        centerComponent={<MyCustomCenterComponent />}
        rightComponent={<MyCustomRightComponent />}
      />
      <View style={{ padding: 20 }}>
        {correspondencias.map((correspondencia, index) => (
          <caixaDestino key={index} >
            <Text style={{ fontSize: 18 }}>{correspondencia}</Text>
            <caixaOpcao
             
              onPress={() => verificarResposta(correspondencia, index)}
              disabled={correspondenciaSelecionada[index] !== null}
            >
              <Text>{correspondenciaSelecionada[index] || "Arraste aqui"}</Text>
            </caixaOpcao>
          </caixaDestino>
        ))}
        <View style={{ marginTop: 20 }}>
          {opcoes.map((opcao, opcaoIndex) => (
            <caixaOpcao
              key={opcaoIndex}
              
              onPress={() => verificarResposta(opcao, correspondenciaSelecionada.indexOf(null))}
              disabled={correspondenciaSelecionada.includes(opcao)}
            >
              <Text>{opcao}</Text>
            </caixaOpcao>
          ))}
        </View>
      </View>
      </Container>
  );
}

