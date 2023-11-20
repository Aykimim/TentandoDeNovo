import styled from "styled-components/native";

export const ButtonCurso = styled.TouchableHighlight`
  background-color: #E16539;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row; /* Define a direção como "row" para alinhar os elementos horizontalmente */
  padding: 20px;
  margin-top: 15px;
  margin-right: 30px;
  margin-left: 30px;
`;

export const ButtonText = styled.Text`
  color: #000;
  font-size: 10px;
  text-align: center;
  border-radius: 15px;
  flex: 1; /* Isso faz o texto ocupar todo o espaço vertical */
  font-weight: bold; /* Adicione esta linha para tornar o texto em negrito */
  margin-top: 15px;
  margin-right: 30px;
  margin-left: 30px;
`;

export const ButtonTextPergunta = styled.Text`
  color: #000;
  font-size: 20px;
  text-align: center;
  flex: 1; /* Isso faz o texto ocupar todo o espaço vertical */
  font-weight: bold; /* Adicione esta linha para tornar o texto em negrito */
`;

export const ButtonTextGrande = styled.Text`
  color: #000;
  font-size: 30px;
  text-align: center;
  flex: 1; /* Isso faz o texto ocupar todo o espaço vertical */
  font-weight: bold; /* Adicione esta linha para tornar o texto em negrito */
`;

export const IconImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

// Adicione um estilo de pressionamento
export const ButtonCursoPressed = styled.TouchableHighlight`
  background-color: #e16539; /* Cor diferente quando pressionado */
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
  margin-top: 15px;
  margin-right: 30px;
  margin-left: 30px;
`;

export const ButtonTextPressed = styled.Text`
  color: #fff; /* Cor do texto quando pressionado */
  font-size: 15px;
  text-align: center;
  flex: 1;
`;

export const Header = styled.View`
  background-color: #e16539;
`;
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f0dfc8;
  justify-content: center;
  align-items: center;
  padding-horizontal: 5%;
  padding-vertical: 5%;
`;

export const TextBotao = styled.Text`
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

export const SendButtonText = styled.Text`
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

export const TextEntrada = styled.TextInput`
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
  font-size: 15px;
  text-align: center;
  color: #f0dfc8;
  margin-top: 20px;
`;

export const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  color: #f0dfc8;
`;
