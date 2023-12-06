import styled from "styled-components/native";

export const ScrollViewLista = styled.ScrollView`
flex: 1;
`;
export const LineWrapper = styled.View`
  align-items: center;
`;

export const LineWrapperDireita = styled.View`
  align-items: center;
  margin-left: 50px;
`;
export const LineWrapperHorizontal = styled.View`
  align-items: center;
  margin-left: 50px;
`;
export const LineWrapperEsquerda = styled.View`
  align-items: center;
  margin-right: 50px;
`;
export const ButtonCursoDireita = styled.TouchableHighlight`
  background-color: #795833;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;

  padding: 10px;

  margin-right: 25px;
  margin-left: 75px;
`;
// margin-top: 15px;
export const ButtonCursoEsquerda = styled.TouchableHighlight`
  background-color: #795833;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;

  margin-right: 75px;
  margin-left: 25px;
`;
export const ButtonCursoFim = styled.TouchableHighlight`
  background-color: #795833;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
  margin-bottom: 50px;
  margin-right: 75px;
  margin-left: 25px;
`;
//  margin-top: 15px;
export const ButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
  text-align: center;
  flex: 1; /* Isso faz o texto ocupar todo o espaço vertical */
  font-weight: bold; /* Adicione esta linha para tornar o texto em negrito */
`;

export const IconImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  margin-top: 15px;
  margin-right: 70px;
  margin-left: 10px;
`;

export const ScreenNameHeader = styled.View`
  background-color: #e16539;
`;
export const ContainerSeta = styled.SafeAreaView`
align-items: center;
  
`;


export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #303030;
`;




