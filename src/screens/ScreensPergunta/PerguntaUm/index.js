import React, { useState } from "react";
import { View } from "react-native";
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
      <ButtonTextGrande numberOfLines={1}>Fundamentos</ButtonTextGrande>
    </View>
  );
}

function MyCustomRightComponent() {
  return <ButtonText></ButtonText>;
}

export default function App() {
  const navigation = useNavigation();
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);

  function navigateToPerguntaCerta() {
    navigation.navigate("PerguntaDois");
  }

  const PerguntaCerta = () => {
    // Simule uma verificação de resposta correta
    // Substitua esta lógica pela sua verificação real
    if (respostaSelecionada === "correta") {
      navigateToPerguntaCerta();
    } else {
      alert("Resposta incorreta. Tente novamente.");
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
<ContainerQuestao>
      <ButtonTextPergunta>
        Sobre a impressão do dinheiro, qual alternativa está correta?
      </ButtonTextPergunta>
      <ContainerPerguntas>
        <ButtonText
          onPress={() => setRespostaSelecionada("correta")}
          style={{
            backgroundColor:
              respostaSelecionada === "correta"
                ? colors.primaria
                : colors.secundaria
          }}
        >
          Podemos imprimir dinheiro à vontade, vários países adotam essa técnica
          para sair de crises e aumentar a economia do país."
        </ButtonText>

        <ButtonText
          onPress={() => setRespostaSelecionada("incorreta1")}
          style={{
            backgroundColor:
              respostaSelecionada === "incorreta1"
                ? colors.primaria
                : colors.secundaria
          }}
        >
          O Brasil não imprime dinheiro pois não há papel e impressoras
          suficientes para tal ação."
        </ButtonText>

        <ButtonText
          onPress={() => setRespostaSelecionada("incorreta2")}
          style={{
            backgroundColor:
              respostaSelecionada === "incorreta2"
                ? colors.primaria
                : colors.secundaria
          }}
        >
          Países comunistas não imprimem dinheiro, diferente dos países
          capitalistas."
        </ButtonText>

        <ButtonText
          onPress={() => setRespostaSelecionada("incorreta3")}
          style={{
            backgroundColor:
              respostaSelecionada === "incorreta3"
                ? colors.primaria
                : colors.secundaria
          }}
        >
          Dinheiros impressos são doados para moradores de rua e pessoas em
          extrema miséria."
        </ButtonText>

        <ButtonText
          onPress={() => setRespostaSelecionada("incorreta4")}
          style={{
            backgroundColor:
              respostaSelecionada === "incorreta4"
                ? colors.primaria
                : colors.secundaria
          }}
        >
          Não pode imprimir dinheiro porque isso resultaria em diversos
          problemas. Exemplo: A inflação dispararia."
        </ButtonText>
      </ContainerPerguntas>

      <ButtonConfirmar
        onPress={() => PerguntaCerta()}
        underlayColor={colors.secundaria}
        disabled={!respostaSelecionada}
      >
        <ButtonTextConfirmar>Prosseguir</ButtonTextConfirmar>
      </ButtonConfirmar>
      </ContainerQuestao>
    </Container>
  );
}
