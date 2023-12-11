import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import {
  ChangeableButtonContainer,
  ChangeableButton,
  ChangeableButtonText,
  Container,
  Textentrada,
  CustomButton,
  ButtonText,
  ContainerPai,
  ButtonTextTopo
} from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { Header } from "react-native-elements";
import { colors } from "../../../Components/Theme";
import VideoPlayer from "../../../Components/VideoPlayer";

function MyCustomLeftComponent() {
  const navigation = useNavigation();

  function navigateToVoltar() {
    navigation.navigate("Login");
  }

  return (
    <ButtonText onPress={navigateToVoltar}>
      <Icon name="arrow-left" size={20} color={colors.branco}/>
    </ButtonText>
  );
}

function MyCustomCenterComponent() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <ButtonTextTopo>Video</ButtonTextTopo>
    </View>
  );
}

function MyCustomRightComponent() {
  return <ButtonText></ButtonText>;
}

export default function App() {
  const navigation = useNavigation();






  const [isSquare, setIsSquare] = useState(true);

  const handlePress = () => {
    setIsSquare((prev) => !prev);
  };

  return (
    <Container>
      <Header
        backgroundColor={colors.primaria}
        leftComponent={<MyCustomLeftComponent />}
        centerComponent={<MyCustomCenterComponent />}
        rightComponent={<MyCustomRightComponent />}
      />

      <VideoPlayer></VideoPlayer>

    </Container>
  );
}
