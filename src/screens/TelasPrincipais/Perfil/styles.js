import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 2;
  background-color: #EAE8E9;
  text-align: left;
  flex-direction: rows;
  border: 1px;

  border-radius: 10px;
  flex-direction: column;
  justify-content: spacebetween;
  padding: 10px;
  margin: 1px;
`;

export const PerfilText = styled.Text`
  text-align: left;
  color: white;
  padding-left: 5%;
  font-size: 20px;
  color: #372A28;
`;

export const Title = styled.Text`
  text-align: left;
  color: white;
  padding-left: 5%;
  font-size: 30px;
  padding: 3%;
  font-weight: bold;
  color: #372A28;
`;

export const Text = styled.Text`
  font-size: 25px;
  text-align: center;
  color: #372A28;
`;

export const View = styled.View`
margin-top: 25px;
  flex: 1;
`;
export const ViewButao = styled.View`

  flex: 1;
`;

export const ButtonCurso = styled.TouchableHighlight`
  background-color: #FFC61A;
  border-radius: 10px; 
  align-items: center;
  justify-content: space-between;
  flex-direction: row; /* Define a direção como "row" para alinhar os elementos horizontalmente */
  padding: 20px;
  margin-top: 10px;
  margin-right: 30px;
  margin-left: 30px;
`;

export const IconImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color:#372A28;
  font-size: 20px;
  text-align: center;
  flex: 1; /* Isso faz o texto ocupar todo o espaço vertical */
  font-weight: bold; /* Adicione esta linha para tornar o texto em negrito */
`;

export const ScroolView = styled.ScrollView`
  background-color: #EAE8E9;
  border-color: #303030;
`;