import React from "react";
import styled from "styled-components/native";

import { colors } from "../../../Components/Theme";


export const ChangeableButtonContainer = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const ChangeableButton = styled.TouchableOpacity`
  background-color: ${({ isSquare }) => (isSquare ? colors.primaria : colors.secundaria )};
  padding: 15px;
  border-radius: ${({ isSquare }) => (isSquare ? "5px" : "50px")};
  margin-top: 20px;
`;

export const ChangeableButtonText = styled.Text`
  color: ${colors.textoBranco};
  font-weight: bold;


`;

export const ContainerPai = styled.SafeAreaView`
  background-color: ${colors.fundo};
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.fundo};

  align-items: center;
`;
//justify-content: center;
// padding-horizontal: 5%;
// padding-vertical: 5%;
export const Textentrada = styled.TextInput`
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

export const Text = styled.Text`
  font-size: 25px;
  text-align: center;
  color: ${colors.textoBranco};
`;

export const CustomButton = styled.TouchableOpacity`
  width: 70%;
  max-width: 100px;
  background-color: ${colors.primaria};
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
`;
export const ButtonTextTopo = styled.Text`
  max-width: 100px;
  font-size: 20px;
  color: ${colors.textoBranco};
`;
export const ButtonText = styled.Text`
  max-width: 100px;
  font-size: 15px;
  color: ${colors.textoBranco};
`;
