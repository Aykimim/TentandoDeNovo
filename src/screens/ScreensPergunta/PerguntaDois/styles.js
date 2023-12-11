import styled from "styled-components/native";
import { colors } from "../../../Components/Theme";
export const ButtonCurso = styled.TouchableOpacity`
color: ${colors.secundaria};
border-width: 1px;

  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  align-items: center;
`;
export const ButtonTexticone = styled.Text`
  color: ${colors.textoPreto};
 
`;
export const ButtonConfirmar = styled.TouchableHighlight`
  background-color: ${({ mostrarBotao }) =>
    mostrarBotao ? colors.secundaria : colors.primaria};
  border-radius: 20px;
  text-align: center;
  align-items: center;
  padding: 20px;
  margin-top: 15px;
  margin-right: 50px;
  margin-left: 50px;
`;

export const ButtonTextConfirmar = styled.Text`
  color: ${colors.textoBranco};
  font-size: 20px;

  font-weight: bold; /* Adicione esta linha para tornar o texto em negrito */
`;
export const ButtonText = styled.Text`
  color: ${colors.textoPreto};
  font-size: 12px;
  text-align: center;

 
  
  font-weight: bold; /* Adicione esta linha para tornar o texto em negrito */
  padding: 10px;
 
`;
//
export const ButtonTextTitulo = styled.Text`
  color: ${colors.textoBranco};
  font-size: 15px;
  padding-horizontal: 5%; /* Corrigido o nome da propriedade */
  text-align: center;

  font-weight: bold;
`;
export const ButtonTextPergunta = styled.Text`
  color: ${colors.textoPreto};
  font-size: 16px;
  text-align: center;
  
  /* Isso faz o texto ocupar todo o espaço vertical */
  font-weight: bold; /* Adicione esta linha para tornar o texto em negrito */
`;
export const ButtonTextRsposta = styled.Text`
  color: ${colors.textoPreto};
  font-size: 16px;
  width: 0px;
  height: 0px;
  text-align: center;
  
  font-weight: bold; /* Adicione esta linha para tornar o texto em negrito */
`;
export const ButtonTextGrande = styled.Text`
  color: ${colors.textoBranco};
  font-size: 15px;
  text-align: center;

  font-weight: bold;
`;

export const IconImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const ButtonTextPressed = styled.Text`
  color: ${colors.textoPreto};
  font-size: 15px;
  text-align: center;
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${colors.textoPreto};
`;

export const ContainerQuestao = styled.View`
  flex: 1;
  background-color: ${colors.fundo};
  align-items: center;
  padding-vertical: 10%;
`;
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.fundo};
  align-items: center;
`;

export const ContainerPerguntas = styled.SafeAreaView`


  padding: 10%;
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

export const TextEntrada = styled.TextInput`
  font-size: 20px;
  width: 80%;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${colors.textoPreto};
  background-color: ${colors.textoPreto};
  border-radius: 50px;
  margin-top: 20px;
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
