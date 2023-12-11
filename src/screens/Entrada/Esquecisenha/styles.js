import React from "react";
import styled from "styled-components/native";
import { colors } from "../../../Components/Theme";
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.fundo};
  justify-content: center;
  align-items: center;
  padding-horizontal: 5%;
  padding-vertical: 5%;
`;

export const ContainerMenor = styled.SafeAreaView`
border-radius: 50px;
  background-color: ${colors.secundaria};
  justify-content: center;
  align-items: center;
  padding-horizontal: 5%;
  padding-vertical: 5%;
`;
export const Textbotao = styled.Text`
  font-size: 25px;
  text-align: center;
  color: ${colors.textoPreto};
`;
export const SendButton = styled.Text`
border-radius: 20px;
background-color: ${colors.primaria};
margin-top: 25px;
padding: 10px;
color: ${colors.textoPreto};
`;
export const SendButtontext = styled.Text`
  font-size: 25px;
  text-align: center;
  color: ${colors.textoPreto};
  margin-top: 20px;
`;
export const CampoNome = styled.Text`
  font-size: 25px;
  text-align: center;
  color: ${colors.textoPreto};
`;


export const Text = styled.Text`
  font-size: 25px;
  text-align: center;
  color: ${colors.textoBranco};
`;



export const StyledInput = styled.TextInput`
font-size: 20px;
width: 80%;
text-align: left;
justify-content: center;
align-items: center;
color: ${colors.textoPreto};
background-color: ${({ isPressed }) => (isPressed ? colors.textoPreto : colors.secundaria)};
border-width: ${({ isPressed }) => (isPressed ? "0px" : "2px")};
border-color: ${({ isPressed }) => (isPressed ? colors.textoPreto : colors.primaria)};

border-radius: 20px;
margin-top: 20px;
margin-right: 5px;
padding-left: 10px;
padding: 10px;
`;



export const Texto = styled.Text`
  font-size: 35px;
  color: #0a122a;
`;

export const Loading = styled.ActivityIndicator`
  margin-top: 15%;
`;
export const TextEscrita = styled.Text`
  
  font-size: 15px;
  text-align: center;
  color: ${colors.textoPreto};
  margin-top: 20px;
`;
export const SetaVoltar = styled.Text`
margin-Right: 250px;
  color: ${colors.textoPreto};
 
`;
