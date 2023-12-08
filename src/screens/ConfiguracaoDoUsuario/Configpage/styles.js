import styled from "styled-components/native";
import { colors } from "../../../Components/Theme";
export const ButtonCurso = styled.TouchableHighlight`
  background-color: ${colors.secundaria};
  border-radius: 10px;
  align-items: center;
  justify-content: spacebetween;
  flex-direction: row; /* Define a direção como "row" para alinhar os elementos horizontalmente */
  padding: 20px;
  margin-top: 15px;
  margin-right: 30px;
  margin-left: 30px;
`;

export const ButtonText = styled.Text`
  color: ${colors.textoPreto};
  font-size: 20px;
  text-align: center;
  flex: 1; /* Isso faz o texto ocupar todo o espaço vertical */
  font-weight: bold; /* Adicione esta linha para tornar o texto em negrito */
  position: relative; /* Adicione esta linha para tornar o position relativo */
  `;

export const IconImage = styled.Image`
  max-width: 50px;
  max-height: 50px;
  border-radius: 50px;
  top: 0;
  left: 0;
`;





export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.fundo};
`;

export const TextBotao = styled.Text`
  font-size: 25px;
  text-align: center;
  color: ${colors.textoPreto};
`;

export const SendButton = styled.Text`
  font-size: 25px;
  text-align: center;
  color: ${colors.textoPreto};
  margin-top: 20px;
`;

export const SendButtonText = styled.Text`
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
  color: ${colors.textoPreto};
  font-size: 20px;
  font-weight: bold;
  
`;

export const TextEscrita = styled.Text`
  font-size: 15px;
  text-align: center;
  color:${colors.textoPreto};
  margin-top: 20px;
`;

export const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  color: ${colors.primaria};
`;
