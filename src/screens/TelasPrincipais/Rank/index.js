import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  StyleSheet,
  TouchableHighlight,
  TouchableWithoutFeedback
} from "react-native";
import { colors } from "../../../Components/Theme";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

import {
  Container,
  ButtonText,
  ButtonCurso,
  IconImage,
  ButtonCursoTudo,
  ButtonCursoRankNun,
  ScrollViewTudo,
  ButtonModal,
  ButtonTextTitulo,
  ButtonTextSubTitulo
} from "./styles";

import ScreenNameHeader from "../../../Components/ScreenNameHeader";

export default function App() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCurso, setSelectedCurso] = useState(null);

  function botaoteste(curso) {
    setSelectedCurso(curso);
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  function navigateToLogin() {
    navigation.navigate("Login");
  }

  const Pessoas = [
    { nome: "Yuji Kamada", rank: "1º" },
    { nome: "Raphael Lima", rank: "2º" },
    { nome: "Carlos Massa", rank: "3º" },
    { nome: "Igor Guimarães", rank: "4º" },
    { nome: "Robert Val", rank: "5º" },
    { nome: "Eykimim Aniceto", rank: "6º" },
    { nome: "Alicia Mendes", rank: "7º" },
    { nome: "Lucas Oliveira", rank: "8º" },
    { nome: "Isabella Rocha", rank: "9º" },
    { nome: "Felipe Silva", rank: "10º" },
    { nome: "Gabriela Santos", rank: "11º" },
    { nome: "Diego Pereira", rank: "12º" },
    { nome: "Juliana Costa", rank: "13º" },
    { nome: "Thiago Souza", rank: "14º" },
    { nome: "Larissa Lima", rank: "15º" },
    { nome: "Anderson Oliveira", rank: "16º" }
  ];
  return (
    <Container>
      <ScreenNameHeader headerName="Rank" />
      <ScrollViewTudo justifyContent={"spaceBetween"}>
        {Pessoas.map((curso, index) => (
          <ButtonCursoTudo key={index}>
            <ButtonCursoRankNun>
              <ButtonText>{curso.rank}</ButtonText>
            </ButtonCursoRankNun>
            <ButtonCurso
              onPress={() => botaoteste(curso)}
              underlayColor={colors.primaria}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <IconImage
                  source={require("../../../Components/img/IconeUsuario.png")}
                />
                <ButtonText>{curso.nome}</ButtonText>
              </View>
            </ButtonCurso>
          </ButtonCursoTudo>
        ))}
      </ScrollViewTudo>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <IconImage
                source={require("../../../Components/img/IconeUsuario.png")}
              />
              <ButtonTextTitulo>{selectedCurso?.rank}</ButtonTextTitulo>
              <ButtonTextTitulo>{selectedCurso?.nome}</ButtonTextTitulo>
              <ButtonModal
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  closeModal(); // Chama a função Material
                  setModalVisible(!modalVisible); // Fecha o modal
                }}
              >
                <Text style={styles.textStyle}>Enviar Pedido de Amizade</Text>
              </ButtonModal>
            </View>
          </View>
        </TouchableWithoutFeedback>
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
