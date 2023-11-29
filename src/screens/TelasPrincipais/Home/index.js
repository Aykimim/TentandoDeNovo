import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView, View, Text } from "react-native";
import Svg, { Line } from "react-native-svg";
import styled from "styled-components/native";

import {
  ButtonCursoEsquerda,
  ButtonCursoDireita,
  Container,
  ButtonText,
  IconImage,
  ContainerPrimeiro,
  LineWrapper,
  LineWrapperDireita,
  LineWrapperHorizontal,
  LineWrapperEsquerda
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

  //   const StyledSvg = styled(Svg)`
  //   transform: translateY(25px) rotate(90deg) translateX(45px) translateY(35px);
  // `;

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

  // function HomeScreen({ navigation }) {
  //   const cursos = [
  //     { nome: "Empreendedorismo" },
  //     { nome: "Finanças" },
  //     { nome: "Marketing" },
  //     { nome: "estão de RH" },
  //     { nome: "Planejamento" },
  //     { nome: "eyk" }
  //   ];

  return (
    <Container>
      {/* <ContainerPrimeiro></ContainerPrimeiro> */}
      <ScreenNameHeader headerName="Finanças" />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconImage
          source={require("../../../Components/img/LogoQuadrada.png")}
        />
      </View>

      <ScrollView>
        <ButtonCursoDireita onPress={Curso1} underlayColor="#e16539">
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>Fundamentos de finanças empresariais.</ButtonText>
          </View>
        </ButtonCursoDireita>
        <LineWrapperDireita>
          <Svg height="40" width="5">
            <CustomLine x1="0" y1="0" x2="0" y2="100" />
          </Svg>
        </LineWrapperDireita>
        
        <LineWrapperHorizontal>
          <StyledSvg height="5" width="50">
            <CustomLine x1="0" y1="0" x2="0" y2="100" />
          </StyledSvg>
        </LineWrapperHorizontal>

        <LineWrapperEsquerda>
          <Svg height="40" width="5">
            <CustomLine x1="0" y1="0" x2="0" y2="100" />
          </Svg>
        </LineWrapperEsquerda>
        <ButtonCursoEsquerda onPress={Curso2} underlayColor="#e16539">
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>
              Elaboração de um plano de negócios financeiro..
            </ButtonText>
          </View>
        </ButtonCursoEsquerda>
        <LineWrapper>
          <Svg height="40" width="5">
            <CustomLine x1="0" y1="0" x2="0" y2="100" />
          </Svg>
        </LineWrapper>
        <ButtonCursoDireita onPress={Curso3} underlayColor="#e16539">
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>
              Orçamento empresarial e previsão de fluxo de caixa.
            </ButtonText>
          </View>
        </ButtonCursoDireita>
        <LineWrapper>
          <Svg height="40" width="5">
            <CustomLine x1="0" y1="0" x2="0" y2="100" />
          </Svg>
        </LineWrapper>
        <ButtonCursoEsquerda onPress={Curso4} underlayColor="#e16539">
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>
              Estratégias de financiamento e captação de recursos.
            </ButtonText>
          </View>
        </ButtonCursoEsquerda>
        <LineWrapper>
          <Svg height="40" width="5">
            <CustomLine x1="0" y1="0" x2="0" y2="100" />
          </Svg>
        </LineWrapper>
        <ButtonCursoDireita onPress={Curso5} underlayColor="#e16539">
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonText>
              Contabilidade básica para pequenos negócios.
            </ButtonText>
          </View>
        </ButtonCursoDireita>
      </ScrollView>
    </Container>
  );
}
//     <Container>

//       <ScreenNameHeader headerName="Home" />
//       <ScrollView>
//                           <LineWrapper>
//         <Svg height="10" width="10">
//           <CustomLine x1="0" y1="0" x2="0" y2="10" />
//         </Svg>
//       </LineWrapper>
//         {cursos.map((curso, index) => (
//           <ButtonCurso key={index} onPress={botaoteste} underlayColor="#E16539">

//             <View style={{ flexDirection: "row", alignItems: "center" }}>
//               <ButtonText>{curso.nome}</ButtonText>
//             </View>
//           </ButtonCurso>
//         ))}
//       </ScrollView>

//     </Container>
//   );
// }

// export default function App() {
//   return (
//     <Container>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name=" " component={HomeScreen} />
//       </Stack.Navigator>
//     </Container>
//   );
// }
