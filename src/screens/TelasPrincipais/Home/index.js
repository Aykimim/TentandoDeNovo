import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView, View, Text } from "react-native";
import Svg, { Line, Path } from "react-native-svg";
import styled from "styled-components/native";

import {
  ButtonCursoEsquerda,
  ButtonCursoDireita,
  Container,
  ButtonText,
  IconImage,
  ContainerSeta,
  ScrollViewLista,
  ContainerPrimeiro,
  LineWrapper,
  LineWrapperDireita,
  LineWrapperHorizontal,
  LineWrapperEsquerda,
  ButtonCursoFim
} from "./styles";

//components
import ScreenNameHeader from "../../../Components/ScreenNameHeader";
export default function App() {
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  const botaoteste = () => {
    alert("Teste");
  };

  const CustomLine = styled(Line)`
    stroke: #fff;
    stroke-width: 4px;
  `;

  const StyledSvg = styled(Svg)`
    transform: translateY(20px) rotate(90deg) translateX(40px) translateY(25px);
  `;

  // Adicione funções específicas para cada botão
  function Curso1() {
    navigation.navigate("CursoDetalhado");
  }

  function Curso2() {
    navigation.navigate("CursoDetalhado");
  }

  function Curso3() {
    navigation.navigate("CursoDetalhado");
  }

  function Curso4() {
    navigation.navigate("CursoDetalhado");
  }

  function Curso5() {
    navigation.navigate("CursoDetalhado");
  }

  return (
    <Container>
      <ScreenNameHeader headerName="Trilha de conteúdo" />
      <ScrollViewLista>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <IconImage
            source={require("../../../Components/img/Blocos.png")}
          />
        </View>

        <ButtonCursoDireita onPress={Curso1} underlayColor="#e16539">
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>Fundamentos de finanças empresariais.</ButtonText>
          </View>
        </ButtonCursoDireita>
        <ContainerSeta>
          <Svg width="63" height="101" viewBox="0 0 53 101" fill="none">
            <Path
              d="M2.09898 100.367L1.68451 57.6078C1.65776 54.8473 3.87325 52.5875 6.63371 52.5596L46.6384 52.155C49.3989 52.1271 51.6144 49.8672 51.5876 47.1068L51.1346 0.367452"
              stroke="white"
              strokeWidth="4"
            />
          </Svg>
        </ContainerSeta>
        <ButtonCursoEsquerda onPress={Curso2} underlayColor="#e16539">
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>
              Elaboração de um plano de negócios financeiro..
            </ButtonText>
          </View>
        </ButtonCursoEsquerda>
        <ContainerSeta>
          <Svg width="63" height="101" viewBox="0 0 53 101" fill="none">
            <Path
              d="M1.60515 0.612833L1.61405 43.3745C1.61463 46.1351 3.85239 48.3729 6.61299 48.3735L46.6198 48.382C49.3804 48.3826 51.6181 50.6203 51.6187 53.3809L51.6284 100.122"
              stroke="white"
              strokeWidth="4"
            />
          </Svg>
        </ContainerSeta>

        <ButtonCursoDireita onPress={Curso3} underlayColor="#e16539">
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>
              Orçamento empresarial e previsão de fluxo de caixa.
            </ButtonText>
          </View>
        </ButtonCursoDireita>
        <ContainerSeta>
          <Svg width="63" height="101" viewBox="0 0 53 101" fill="none">
            <Path
              d="M2.09898 100.367L1.68451 57.6078C1.65776 54.8473 3.87325 52.5875 6.63371 52.5596L46.6384 52.155C49.3989 52.1271 51.6144 49.8672 51.5876 47.1068L51.1346 0.367452"
              stroke="white"
              strokeWidth="4"
            />
          </Svg>
        </ContainerSeta>
        <ButtonCursoEsquerda onPress={Curso4} underlayColor="#e16539">
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>
              Estratégias de financiamento e captação de recursos.
            </ButtonText>
          </View>
        </ButtonCursoEsquerda>
        <ContainerSeta>
          <Svg width="63" height="101" viewBox="0 0 53 101" fill="none">
            <Path
              d="M1.60515 0.612833L1.61405 43.3745C1.61463 46.1351 3.85239 48.3729 6.61299 48.3735L46.6198 48.382C49.3804 48.3826 51.6181 50.6203 51.6187 53.3809L51.6284 100.122"
              stroke="white"
              strokeWidth="4"
            />
          </Svg>
        </ContainerSeta>
        <ButtonCursoDireita onPress={Curso5} underlayColor="#e16539">
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>
              Contabilidade básica para pequenos negócios.
            </ButtonText>
          </View>
        </ButtonCursoDireita>
        <ContainerSeta>
          <Svg width="63" height="101" viewBox="0 0 53 101" fill="none">
            <Path
              d="M2.09898 100.367L1.68451 57.6078C1.65776 54.8473 3.87325 52.5875 6.63371 52.5596L46.6384 52.155C49.3989 52.1271 51.6144 49.8672 51.5876 47.1068L51.1346 0.367452"
              stroke="white"
              strokeWidth="4"
            />
          </Svg>
        </ContainerSeta>
        <ButtonCursoFim onPress={Curso4} underlayColor="#e16539">
          <View style={{ flexDirection: "row", alignItems: "center",}}>
            <ButtonText>
              Fim
            </ButtonText>
          </View>
        </ButtonCursoFim>

      </ScrollViewLista>

      
    </Container>
  );
}
