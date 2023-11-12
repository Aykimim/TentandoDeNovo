import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  TextEscrita,
  Container,
  ButtonText,
  ButtonCurso,
  SendButtontext,
  IconImage,
  ButtonCursoPressed,
  ButtonTextPressed
} from "./styles";

const Custumizavel = () => {
  alert("Acho que nao Presisa desse botao");
};

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
    <ButtonText>Cursos</ButtonText>
  );
}

function MyCustomRightComponent() {
  return (
    // Personalize o componente de acordo com suas necessidades
    <ButtonText></ButtonText>
  );
}
const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const cursos = [
    { nome: "Empreendedorismo" },
    { nome: "Finanças" },
    { nome: "Marketing" },
    { nome: "estão de RH" },
    { nome: "Planejamento" },
    { nome: "eyk" }
  ];

  return (
    <Container>
      <Header backgroundColor="#E16539" 
      leftComponent={<MyCustomLeftComponent />}
      centerComponent={<MyCustomCenterComponent />}
      rightComponent={<MyCustomRightComponent />}
      />
      <ScrollView>
        {cursos.map((curso, index) => (
          <ButtonCurso
            key={index}
            onPress={() => navigation.navigate("CursoDetalhado", { nome: curso.nome })}
            underlayColor="#E16539"
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <IconImage source={require("../../Components/img/LogoQuadrada.png")} />
              <ButtonText>{curso.nome}</ButtonText>
            </View>
          </ButtonCurso>
        ))}
      </ScrollView>
    </Container>
  );
}

function CursoDetalhado({ route }) {
  const { nome } = route.params;

  return (
    <Container>
      {/* Conteúdo da tela "CursoDetalhado" */}
      <ButtonText>{nome}</ButtonText>
    </Container>
  );
}


export default function App() {
  return (
    <Container>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name=" " component={HomeScreen} />
        <Stack.Screen name="CursoDetalhado" component={CursoDetalhado} />
      </Stack.Navigator>
    </Container>
  );
}
