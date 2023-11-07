import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ScrollView ,
 
} from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import { 
  NavigationContainer, 
  useNavigation 
} from "@react-navigation/native";
import {
  TextEscrita,
  Container,
  ButtonText,
  ButtonCurso, // Importe ButtonCurso do styles.js
  SendButtontext,
  IconImage,
  ButtonCursoPressed,
  ButtonTextPressed
} from "./styles";

const botaoteste = () => {
  alert("Teste");
};
const Custumizavel = () => {
  alert("Acho que nao Presisa desse botao");
};
function navigateToVoltar() {
  navigation.navigate("Login");
}

function MyCustomLeftComponent() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity onPress={Custumizavel}>
        <Icon name="star" size={40} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

function MyCustomCenterComponent() {
  return (
    // Personalize o componente de acordo com suas necessidades
    <ButtonText>Classificação</ButtonText>
  );
}

function MyCustomRightComponent() {
  return (
    // Personalize o componente de acordo com suas necessidades
    <ButtonText></ButtonText>
  );
}

export default function App() {
  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.navigate("Login");
  }
  // Defina o número de rank para cada botão de curso
  const cursos = [
    { nome: "Yuji Kamada", rank:"1º" },
    { nome: "Raphael Lima", rank: "2º" },
    { nome: "Carlos Massa", rank: "3º" },
    { nome: "Igor Guimarães", rank: "4º" },
    { nome: "Robert Val", rank: "5º" },
    { nome: "eyk", rank: "6º" },
  ];
  return (
    <Container>
      <Header
        backgroundColor="#795833"
        leftComponent={<MyCustomLeftComponent />}
        centerComponent={<MyCustomCenterComponent />}
        rightComponent={<MyCustomRightComponent />}
      />
       <ScrollView> 

       {cursos.map((curso, index) => (
          <ButtonCurso 
            key={index} 
            onPress={botaoteste} 
            underlayColor="#795833" 
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
             
              <IconImage 
                source={require("../../Components/img/IconeUsuario.png")} 
              />
           
              <ButtonText>{curso.rank}</ButtonText>
              <ButtonText>{curso.nome}</ButtonText>
            </View>
          </ButtonCurso>
        ))}

        {cursos.map((curso, index) => (
          <ButtonCurso 
            key={index} 
            onPress={botaoteste} 
            underlayColor="#795833" 
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
             <ButtonText>{curso.rank}</ButtonText>
              <IconImage 
                source={require("../../Components/img/IconeUsuario.png")} 
              />
             
              
              <ButtonText>{curso.nome}</ButtonText>
            </View>
          </ButtonCurso>
        ))}






      </ScrollView>
    </Container>
  );
}
