import styled from "styled-components/native";
import { colors } from "../../../Components/Theme";
export const IconTopo= styled.View`
margin-top: 15px;
justify-content: center;
align-items: center;
`;
export const ButtonTextTitulo = styled.Text`
  color: ${colors.textoPreto};
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  
`;

export const ButtonTextParagrafo = styled.Text`
  color: ${colors.textoPreto};
  font-size: 20px;
  text-align: left;
  font-weight: bold;
  
`;

export const ButtonTextSubTitulo = styled.Text`
  margin-top: 10px;
  color: ${colors.textoPreto};
  font-size: 15px;
  text-align: left;
  padding: 20px;
`;

export const ContainerTexto = styled.SafeAreaView`
padding: 20px;
  background-color: ${colors.fundo};
  justify-content: lefts;
  align-items: left;
  text-align: center;
`;
export const ButtonCurso = styled.TouchableHighlight`
  background-color: ${colors.primaria};
  border-radius: 10px; 
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
  margin-top: 15px;
  margin-right: 30px;
  margin-left: 30px;
  margin-bottom: 15px;
`;

export const ButtonText = styled.Text`
  color: ${colors.textoBranco};
  font-size: 20px;
  text-align: center;
  flex: 1;
  font-weight: bold;
`;

export const IconImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.fundo};
  justify-content: center;
  align-items: center;
  
`;
