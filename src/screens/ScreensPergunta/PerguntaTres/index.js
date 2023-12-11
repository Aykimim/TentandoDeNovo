import React, { useState } from "react";
import {
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import { Header } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../../Components/Theme";
import {
  Container,
  ButtonText,
  ButtonTextGrande,
  ButtonCurso,
  IconImage,
  ButtonTextPergunta,
  ContainerPerguntas,
  ButtonTextTitulo,
  ButtonConfirmar,
  ButtonTextConfirmar,
  ContainerQuestao,
  ButtonModal,
  ButtonTexticone,
  ButtonTextSubTitulo
} from "./styles";
import EggWithSpot from "../../../Components/EggWithSpot";
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
  return (
    <View
      style={{
        position: "absolute",
        flexDirection: "row",
        alignItems: "center"
      }}
    >
      <Icon name="heart" size={20} color={colors.textoBranco} />
      <ButtonTexticone style={{ marginLeft: 5 }}>5</ButtonTexticone>
    </View>
  );
}

export default function App() {
  const navigation = useNavigation();
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  function Material() {
    // navigation.navigate("Cursos");
    navigation.reset({
      index: 0,
      routes: [{ name: "MainTab" }] //,screen
    });
  }
  function botaoteste(curso) {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

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
          O empreendedorismo sustentável busca não apenas o sucesso financeiro a
          curto prazo, mas também a criação de valor a longo prazo para a
          sociedade e o meio ambiente. Entre as estratégias inovadoras
          destacadas, qual delas envolve a transição de um modelo linear para
          uma abordagem mais sustentável, promovendo a reutilização e reciclagem
          para reduzir o desperdício e minimizar o impacto ambiental?
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
            a) Economia Circular.
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
            b) Tecnologias Verdes.
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
            c) Modelos de Negócios Sustentáveis.
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
            d) Inovação Social.
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
            e) Educação e Conscientização.
          </ButtonText>
        </ContainerPerguntas>

        <ButtonConfirmar
          onPress={() => botaoteste()}
          underlayColor={colors.secundaria}
          disabled={!respostaSelecionada}
        >
          <ButtonTextConfirmar>Prosseguir</ButtonTextConfirmar>
        </ButtonConfirmar>
      </ContainerQuestao>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        {/* <TouchableWithoutFeedback
          onPress={() => setModalVisible(!modalVisible)}
        > */}
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ButtonTextTitulo>Parabéns</ButtonTextTitulo>
            <ButtonTextTitulo>Você acertou todas as questões</ButtonTextTitulo>
            <ButtonModal
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                Material(); // Chama a função Material
                setModalVisible(!modalVisible); // Fecha o modal
              }}
            >
              <ButtonTextTitulo style={styles.textStyle}>
                Finalizar
              </ButtonTextTitulo>
            </ButtonModal>
          </View>
        </View>
        {/* </TouchableWithoutFeedback> */}
      </Modal>
    </Container>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.fundo,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },

  buttonClose: {
    backgroundColor: colors.primaria
  },
  textStyle: {
    color: colors.textoBranco,
    fontWeight: "bold",
    textAlign: "center"
  }
});
