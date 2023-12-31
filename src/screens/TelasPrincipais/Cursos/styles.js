import styled from "styled-components/native";
import * as Progress from "react-native-progress";
import { colors } from "../../../Components/Theme";

export const ButtonCurso = styled.TouchableHighlight`
  background-color: ${colors.secundaria};
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row; /* Define a direção como "row" para alinhar os elementos horizontalmente */
  padding-top: 15px;
  
  margin-top: 15px;

  margin-right: 30px;
  margin-left: 30px;
  border-width: 2px; /* Adicione esta linha para definir a largura da borda */
  border-color: ${colors.secundaria}; /* Adicione esta linha para definir a cor da borda */
`;
// padding-horizontal: 15px;
export const IconeView = styled.View`
margin-left: 4%;
`;


export const ButtonText = styled.Text`
  padding-bottom: 10px;
  color: ${colors.textoPreto};
  font-size: 20px;
  text-align: center;
  flex: 1; /* Isso faz o texto ocupar todo o espaço vertical */
  font-weight: bold; /* Adicione esta linha para tornar o texto em negrito */
`;

export const IconImage = styled.Image`
  margin-left: 5px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const Header = styled.View`
  background-color: ${colors.primaria};
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.fundo};
`;
