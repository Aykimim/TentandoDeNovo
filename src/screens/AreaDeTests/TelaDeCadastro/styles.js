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

export const Textentrada = styled.TextInput`
  font-size: 20px;
  width: 80%;
  text-align: left;
  justify-content: center;
  align-items: center;
  color: #000;
  background-color: ${({ isPressed }) => (isPressed ? "#303030" : "#f0dfc8")};
  border-width: ${({ isPressed }) => (isPressed ? "0px" : "2px")};
  border-color: ${({ isPressed }) => (isPressed ? "#000" : "#fff")};
  border-radius: 20px;
  margin-top: 20px;
  margin-right: 5px;
  padding-left: 10px;
  padding: 10px;
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
  margin-top: 15px;
`;

export const View = styled.View`
  flex: 1;
  justifycontent: "center";
  alignitems: "center";
  color: #f0dfc8;
`;

export const StyledView = styled.SafeAreaView`
	flex: 1;
	padding-vertical: 1%;
	padding-horizontal: 1%;
	align-items: center;
	background-color: #fdd;
	color: #ddd;
	justify-content: center;
  	width: 100%;
`;

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

export const ButtonText = styled.Text`
	max-width: 100px;
	font-size: 16px;
	color: #fff;
`;