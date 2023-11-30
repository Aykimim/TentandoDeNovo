import React, { Component } from "react";
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Progress from 'react-native-progress';

import {
  Container,
  ButtonCurso,
  IconImage,
  ButtonText
} from "./styles";

//components
import ScreenNameHeader from "../../../Components/ScreenNameHeader";

class CourseItem extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  componentDidMount() {
    // Acione o método handlePress após o componente ser montado
    this.handlePress();
  }

  handlePress = () => {
    this.state.animation.setValue(0);

    Animated.timing(this.state.animation, {
      duration: 1500,
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };

  render() {
    const progressInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "80%"],
      extrapolate: "clamp",
    });

    const colorInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(225, 101, 57)", "rgb(225, 101, 57)"],
    });

    const progressStyle = {
      width: progressInterpolate,
      bottom: 0,
      backgroundColor: colorInterpolate,
    };

    return (
      <ButtonCurso onPress={this.handlePress} underlayColor="#E16539">
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          
          <Animated.View style={[styles.progress, progressStyle]} />
          <IconImage source={require("../../../Components/img/LogoQuadrada.png")} />
          <ButtonText>{this.props.course.nome}</ButtonText>
        </View>
      </ButtonCurso>
    );
  }
}

const CoursesPage = () => {
  const navigation = useNavigation();

  function navigateToCursoDetalhado() {
    navigation.navigate("CursoDetalhado");
  }

  const cursos = [
    { nome: "Empreendedorismo" },
    { nome: "Finanças" },
    { nome: "Marketing" },
    { nome: "Gestão de RH" },
    { nome: "Planejamento" },
    { nome: "eyk" }
  ];

  return (
    <Container>
      <ScreenNameHeader headerName="Cursos" />
      <ScrollView>
        {cursos.map((curso, index) => (
          <CourseItem key={index} course={curso} />
        ))}
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  // Adicione os estilos necessários aqui
  progress: {
    position: "absolute",
    left: 0,
    top: 0,
    padding: 20
  },
});

export default CoursesPage;
