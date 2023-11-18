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

//components
import ScreenNameHeader from "../../Components/ScreenNameHeader"

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
      <ScreenNameHeader
        headerName="Cursos"
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
