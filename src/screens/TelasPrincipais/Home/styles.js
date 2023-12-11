import styled from "styled-components/native";
import { colors } from "../../../Components/Theme";
import Svg, { Line, Path } from "react-native-svg";

export const centeredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const modalView = styled.View``;
// margin: 20px;
// background-color: white;
// border-radius: 20px;
// padding: 35px;
// align-items: center;
// shadow-color: #000;
// shadow-offset: {
//   width: 0,
//   height: 2,
// };
// shadow-opacity: 0.25;
// shadow-radius: 4px;
// elevation: 5;

export const CheckIcon = styled(Svg)`
  position: absolute;
`;
export const ProgressoRedondo = styled.View``;
export const ContainerFilho = styled.SafeAreaView`
  padding: 1%;
`;
export const ContainerTudo = styled.SafeAreaView`
  flex: 1;

  background-color: ${colors.fundo};
`;

export const Meiocubo = styled.SafeAreaView`
  align-items: center;
`;

export const ScrollViewTudo = styled.ScrollView``;

export const ButtonCursoMeio = styled.TouchableHighlight`
  align-items: center;

  width: 100px;
  height: 100px;
  border-radius: 25px;
  justify-content: center;
  flex-direction: row; /* Add this line to allow flexDirection in children */
  margin-top: -50px; /* ajuste conforme necessário */

  shadow-color: ${colors.textoPreto};
  shadow-offset: 1px;
  shadow-opacity: 0.25;

  elevation: 10;
`;

// export const ButtonCursoMeia1 = styled.TouchableHighlight`
//   align-items: center;
//   width: 100px;
//   height: 100px;
//   border-radius: 25px;
//   justify-content: center;
//   flex-direction: row;
//   margin-top: -50px;
//   shadow-color: #000;
//   shadow-offset: {
//     width: 0;
//     height: 2;
//   };
//   shadow-opacity: 0.25;
//   shadow-radius: 4;
//   elevation: 5;
// `;

export const ButtonCursoDireita = styled.TouchableHighlight`
  align-items: center;

  width: 100px;
  height: 100px;
  border-radius: 25px;
  margin-left: 65%;
  justify-content: center;
  shadow-color: ${colors.textoPreto};
  shadow-offset: 1px;
  shadow-opacity: 0.25;

  elevation: 10;
`;

export const ButtonCursoEsquerda = styled.TouchableHighlight`
  align-items: center;

  width: 100px;
  height: 100px;
  border-radius: 25px;
  margin-right: 65%;
  justify-content: center;
  shadow-color: ${colors.textoPreto};
  shadow-offset: 1px;
  shadow-opacity: 0.25;

  elevation: 10;
`;
export const ButtonCursoComeco = styled.TouchableHighlight`
  background-color: ${colors.primaria};

  height: 5%;
  border-radius: 20px;
  margin-left: 5%;
  margin-right: 5%;
  padding: 2%;
  margin-bottom: 100px;
  shadow-color: ${colors.textoPreto};
  shadow-offset: 1px;
  shadow-opacity: 0.25;

  elevation: 10;
`;
export const ButtonCursoFim = styled.TouchableHighlight`
  background-color: ${colors.primaria};
  width: 100%;
  height: 2%;
  border-radius: 20px;
  align-items: center;
  padding-bottom: 10px;
  padding: 10px;
  margin-bottom: 0px;
  margin-top: 100px;
  shadow-color: ${colors.textoPreto};
  shadow-offset: 1px;
  shadow-opacity: 0.25;

  elevation: 10;
`;
//
export const ButtonText = styled.Text`
  color: ${colors.textoBranco};
  font-size: 15px;
  text-align: center;

  font-weight: bold; /* Adicione esta linha para tornar o texto em negrito */
`;
export const ButtonTextTitulo = styled.Text`
  color: ${colors.textoPreto};
  font-size: 20px;
  text-align: center;

  font-weight: bold; /* Adicione esta linha para tornar o texto em negrito */
`;
export const ButtonTextSubTitulo = styled.Text`
  margin-top: 10px;
  color: ${colors.textoPreto};
  font-size: 15px;
  text-align: center;

  /* Adicione esta linha para tornar o texto em negrito */
`;
export const ButtonModal = styled.TouchableHighlight`
  color: ${colors.textoPreto};
  font-size: 15px;
  text-align: center;
  border-radius: 20px;
  padding: 5%;
  elevation: 2;
  margin-top: 10px;
`;

export const ButtonTextTopo = styled.Text`
  color: ${colors.textoBranco};
  font-size: 20px;
  text-align: center;
  margin-left: 10%;
  margin-right: 5%;
  font-weight: bold; /* Adicione esta linha para tornar o texto em negrito */
`;
export const IconImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`;

export const LineWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Esquerdacima = styled.SafeAreaView`
  margin-left: 63%;
  margin-right: 0%;

  margin-top: -50px; /* ajuste conforme necessário */
  margin-button: 0px; /* ajuste conforme necessário */
`;

export const Esquerdabaixo = styled.SafeAreaView`
  margin-left: 63%;
  margin-right: 0px;
  margin-top: 0px; /* ajuste conforme necessário */
  margin-button: -20px; /* ajuste conforme necessário */
`;

export const Direitacima = styled.SafeAreaView`
  margin-left: 16%;
  margin-right: 0px;
  margin-top: -50px; /* ajuste conforme necessário */
  margin-button: 0px; /* ajuste conforme necessário */
`;

export const Direitabaixo = styled.SafeAreaView`
  margin-left: 16%;
  margin-right: 0px;
  margin-top: 0px; /* ajuste conforme necessário */
  margin-button: 0px; /* ajuste conforme necessário */
`;
