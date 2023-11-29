import React from "react";
import { NavigationContainer,useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Progress from 'react-native-progress';

import {
  TextEscrita,
  Container,
  ButtonText,
  ButtonCurso,
  SendButtontext,
  IconImage,
  ButtonCursoPressed,
  ButtonTextPressed,
  ProgressBar,
  ProgressBarContainer
} from "./styles";

//components
import ScreenNameHeader from "../../../Components/ScreenNameHeader";




export default function App() {
  const navigation = useNavigation();

function navigateToCursoDetalhado() {
    navigation.navigate("CursoDetalhado");
  }

const cursos = [ 
  { nome: "Empreendedorismo" },
  { nome: "Finanças" },
  { nome: "Marketing" },
  { nome: "Gestão de RH" },
  { nome: "Planejamento" },
  { nome: "eyk" }
];



return (
  <Container>
    <ScreenNameHeader headerName="Cursos" />
    <ScrollView>
      
      {cursos.map((curso, index) => (
        <ButtonCurso
          key={index}
          onPress={() => navigateToCursoDetalhado()} 
          underlayColor="#E16539"
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <IconImage
              source={require("../../../Components/img/LogoQuadrada.png")}
            />
            <ButtonText>{curso.nome}</ButtonText>

          </View>

        </ButtonCurso>
      ))}
    </ScrollView>
  </Container>
);
}    
            //  <Progress.Bar progress={0.5} height={100} width={100} color={'white'}
            
            // />
            // <ButtonText>oi</ButtonText>