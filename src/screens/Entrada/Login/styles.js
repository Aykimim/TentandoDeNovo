import styled from "styled-components/native";
import { colors } from "../../../Components/Theme";

export const SendButtonEntrar = styled.Text`
  font-size: 25px;
  text-align: center;
  color: ${colors.branco};
  padding-horizontal: 12%;
`;

export const Textentrada = styled.TextInput`
  font-size: 20px;
  width: 80%;
  text-align: left;
  justify-content: center;
  align-items: center;
  color: ${colors.textoPreto};
  background-color: ${colors.secundaria};
  border-radius: 20px;
  margin-top: 10px;
  margin-right: 5px;
  padding-left: 10px;
  padding: 10px;
`;
export const SendButtontextEsqueciSenha = styled.Text`
  font-size: 15px;
  text-align: left;
  color: ${colors.textoPreto};
  margin-top: 1px;
  padding-left: 10px;
`;
export const Text = styled.Text`
  font-size: 25px;
  text-align: center;
  color: ${colors.textoPreto};
`;

export const TextEscrita = styled.Text`
  font-size: 15px;
  text-align: center;
  color: ${colors.textoPreto};
  margin-top: 20px;
`;

export const SendButtontextBorda = styled.TouchableHighlight`
  border-radius: 20px;
  background-color: ${colors.primaria};
  margin-top: 25px;
  padding: 1px;
  color: ${colors.textoPreto};
`;
export const SendButton = styled.Text`
  font-size: 25px;
  text-align: center;
  color: ${colors.textoPreto};
  margin-top: 3px;
  padding-right: 35%;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.fundo};
  justify-content: center;
  align-items: center;
  padding-horizontal: 5%;
  padding-vertical: 5%;
`;

export const SendButtontextPadrão = styled.Text`
  font-size: 15px;
  text-align: left;
  color: ${colors.textoPreto};
  margin-top: 1px;
  padding-left: 10px;
`;

export const SendButtontextInscrever = styled.Text`
  font-size: 15px;
  text-align: left;
  color: ${colors.primaria};
  margin-top: 1px;
  padding-left: 10px;
`;
export const TextEscrita2 = styled.Text`
  margin-left: 5px;
  font-size: 25px;
  text-align: center;
  color: ${colors.textoPreto};
  font-weight: bold;
`;
export const Container2 = styled.SafeAreaView`
  flex-direction: row;
  padding: 10px;
`;
