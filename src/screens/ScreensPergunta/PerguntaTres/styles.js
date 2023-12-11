import styled from "styled-components/native";
import { colors } from "../../../Components/Theme";
export const ButtonModal = styled.TouchableHighlight`
  color: ${colors.textoPreto};
  font-size: 15px;
  text-align: center;
  border-Radius: 20px;
  padding: 5%;
  elevation: 2;
  margin-top: 10px;
`;
export const ButtonTexticone = styled.Text`
  color: ${colors.textoPreto};
 
`;
export const ButtonTextTitulo = styled.Text`
  color: ${colors.textoPreto};
  font-size: 20px;
  text-align: center;

  font-weight: bold; /* Adicione esta linha para tornar o texto em negrito */
`;
export const ButtonTextSubTitulo  = styled.Text`
margin-top: 10px;
  color: ${colors.textoPreto};
  font-size: 15px;
  text-align: center;
  
  /* Adicione esta linha para tornar o texto em negrito */
`;
export const ButtonCurso = styled.TouchableHighlight`
  background-color: ${colors.primaria};
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row; /* Define a direção como "row" para alinhar os elementos horizontalmente */
  padding: 20px;
  margin-top: 15px;
  margin-right: 50px;
  margin-left: 50px;
`;
export const ButtonConfirmar = styled.TouchableHighlight`
  background-color: ${colors.primaria};
  border-radius: 20px;
  text-align: center;
  align-items: center;

  padding: 20px;
  margin-bottom: 15px; /* Corrigido o nome da propriedade */
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

  border-radius: 15px;
  /* Isso faz o texto ocupar todo o espaço vertical */
  font-weight: bold; /* Adicione esta linha para tornar o texto em negrito */
  padding: 10px;
  margin-top: 10px;
  margin-right: 30px;
  margin-left: 30px;
`;
//

export const ButtonTextPergunta = styled.Text`
  color: ${colors.textoPreto};
  font-size: 16px;
  padding-top: 0px;
  text-align: center;
  /* Isso faz o texto ocupar todo o espaço vertical */
  font-weight: bold; /* Adicione esta linha para tornar o texto em negrito */
`;
export const ButtonTextGrande = styled.Text`
  color: ${colors.textoBranco};
  font-size: 15px;
  text-align: center;

   
  font-weight: bold; /* Adicione esta linha para tornar o texto em negrito */
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

export const ContainerQuestao = styled.SafeAreaView`
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
  flex: 2;

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
