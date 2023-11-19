import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView, View, Text } from "react-native";
import Svg, { Line } from "react-native-svg";
import styled from "styled-components/native";
import {
  ScreenNameHeader,
  
  Container,
  ButtonCurso,
  ButtonText,
  CampoNome,
  Textentrada,
  SendButtontext,
  SendButtontextEsqueciSenha,
  SendButtontextBorda,
  TextEscrita
} from "./styles";

const Stack = createStackNavigator();

const botaoteste = () => {
  alert("Teste");
};

const LineWrapper = styled.View`
  align-items: center;
`;

const CustomLine = styled(Line)`
  stroke: #000;
  stroke-width: 2px;
`;

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
      <ScreenNameHeader headerName="Cursos" />
      <ScrollView>
        {cursos.map((curso, index) => (
          <ButtonCurso key={index} onPress={botaoteste} underlayColor="#E16539">
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <ButtonText>{curso.nome}</ButtonText>
            </View>
          </ButtonCurso>
        ))}
      </ScrollView>
      <LineWrapper>
        <Svg height="100" width="100">
          <CustomLine x1="0" y1="0" x2="0" y2="100" />
        </Svg>
      </LineWrapper>
    </Container>
  );
}

export default function App() {
  return (
    <Container>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name=" " component={HomeScreen} />
      </Stack.Navigator>
    </Container>
  );
}
