import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #303030;
  justify-content: center;
  align-items: center;
  padding-horizontal: 5%;
  padding-vertical: 5%;
`;
export const ViewFoto = styled.View`
width: 100;
height: 100;
borderRadius: 50;

`;
export const Textbotao = styled.Text`
  font-size: 25px;
  text-align: center;
  color: #f0dfc8;
`;
export const SendButton = styled.Text`
  font-size: 25px;
  text-align: center;
  color: #f0dfc8;
  margin-top: 20px;
`;
export const SendButtontext = styled.Text`
  font-size: 25px;
  text-align: center;
  color: #f0dfc8;
  margin-top: 20px;
`;

export const SendButtontextEsqueciSenha = styled.Text`
  font-size: 15px;
  text-align: left;
  color: #f0dfc8;
  margin-top: 5px;
`;
export const CampoNome = styled.Text`
  font-size: 25px;
  text-align: center;
  color: #f0dfc8;
`;

export const Textentrada = styled.TextInput`
  font-size: 20px;
  width: 80%;
  text-align: left;
  justify-content: center;
  align-items: center;
  color: #000;
  background-color: #795833;
  border-radius: 20px;
  margin-top: 10px;
  margin-right: 5px;
  padding-left: 10px;
  padding: 10px;
`;

export const SendButtontextBorda = styled.Text`

border-radius: 20px;
background-color: #795833;
margin-top: 20px;
padding: 10px;
color: #FFFFFF;

`;
  // 
  // -left
  // font-size: 25px;
  // text-align: center;
  // 
  // 
  // font-size: 20px;
  // width: 80%;
  // justify-content: center;
  // align-items: center;

  // 
  // margin-right: 5px;
export const CustomButton = styled.TouchableOpacity`
  width: 70%;
  max-width: 100px;
  background-color: #795833;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
`;

export const Text = styled.Text`
  font-size: 25px;
  text-align: center;
  color: #f0dfc8;
`;

export const TextEscrita = styled.Text`
  font-size: 15px;
  text-align: center;
  color: #f0dfc8;
  margin-top: 20px;
`;