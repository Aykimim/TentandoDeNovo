import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #303030;
  justify-content: center;
  align-items: center;
  padding-horizontal: 5%;
  padding-vertical: 5%;
  flex-direction: row;
`;

export const ButtonPerfil = styled.TouchableHighlight`
  
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row; /* Define a direção como "row" para alinhar os elementos horizontalmente */
  padding: 20px;
  margin-top: 15px;
  margin-right: 30px;
  margin-left: 30px;
  background-color: ${({ theme }) => theme.buttonBackground}; /* Cor de fundo padrão */

  background: linear-gradient(
    to right,
    ${({ theme }) => theme.buttonBackground} 50%,
    ${({ theme }) => theme.progressColor} 50%
  );
`;
// background-color: #e16539;
export const ProgressContainer = styled.View`
  width: 100px; /* Ajuste conforme necessário */
  margin-left: 10px; /* Adicione margem para separar o texto da barra de progresso */
`;

export const RankText = styled.Text`
  color: #f0dfc8;
  font-size: 18px;
`;

export const ButtonText = styled.Text`
  color: #f0dfc8;
  font-size: 20px;
  text-align: center;
  flex: 1; /* Isso faz o texto ocupar todo o espaço vertical */
  font-weight: bold; /* Adicione esta linha para tornar o texto em negrito */
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
export const CampoNome = styled.Text`
  font-size: 25px;
  text-align: center;
  color: #f0dfc8;
`;

export const Textentrada = styled.TextInput`
  font-size: 20px;
  width: 80%;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #000;
  background-color: #795833;
  border-radius: 50px;
  margin-top: 20px;
`;
export const Text = styled.Text`
  font-size: 25px;
  text-align: center;
  color: #f0dfc8;
`;

export const TextEscrita = styled.Text`
  font-family: "";
  font-size: 15px;
  text-align: center;
  color: #f0dfc8;
  margin-top: 20px;
`;

export const View = styled.View`
  flex: 1;
  justifycontent: "top";
  alignitems: "center";
  color: #303030;
  border: 2px;
`;
