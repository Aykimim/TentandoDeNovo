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
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color:${colors.fundo};
`;
export const ScrollViewTudo = styled.ScrollView`
  padding-horizontal: 1%;
`;
//justify-content: space-between;
export const ButtonCursoTudo = styled.View`
  flex-direction: row;
  padding-left: 5%;
  padding-right: 5%;
  max-width: 350px;
`;
// border-radius: 10px;
// padding: 5px;
// flex-direction: row; /* Define a direção como "row" para alinhar os elementos horizontalmente */
// align-items: center;
// margin-top: 15px;
// margin-right: 30px;
// margin-left: 30px;

export const ButtonCurso = styled.TouchableHighlight`
  background-color: ${colors.secundaria};;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
  margin-top: 15px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const ButtonCursoRankNun = styled.TouchableHighlight`
  background-color: ${colors.primaria};
  width: 38px;
  height: 35px;
  border-radius: 50px;
  padding: 5px;

  margin-top: 40px;
`;
//
//margin-top: 50px;
// margin-top: 15px;
// margin-low: 15px;
// margin-right: 10px;
// margin-left: 10px;

// align-items: center;
export const ButtonText = styled.Text`
  color: ${colors.textoPreto};
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

export const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  color: ${colors.secundaria};
`;
