import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Progress from "react-native-progress";

import {
  ProgressContainer,
  Container,
  ButtonCurso,
  IconImage,
  ButtonText
} from "./styles";

//components
import ScreenNameHeader from "../../../Components/ScreenNameHeader";



class CourseItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0)
    };
  }

  componentDidMount() {
    this.handlePress();
  }

  handlePress = () => {
    this.state.animation.setValue(0);
  
    Animated.timing(this.state.animation, {
      duration: 1500,
      toValue: 1,
      useNativeDriver: false
    }).start();
  };
  

  render() {
    const { progress } = this.props.course;

    const progressInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", `${progress}%`],
      extrapolate: "clamp"
    });

    const colorInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(225, 101, 57)", "rgb(225, 101, 57)"]
    });

    const progressStyle = {
      width: progressInterpolate,
      bottom: 0,
      backgroundColor: colorInterpolate
    };

    return (
      <ButtonCurso onPress={this.props.onPressNavigate} underlayColor="#E16539">
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Animated.View style={[styles.progress, progressStyle]} />
          <IconImage
            source={require("../../../Components/img/LogoQuadrada.png")}
          />
          <ButtonText>{this.props.course.nome}</ButtonText>
          <Text style={styles.progressText}>{`${progress}%`}</Text>
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
    { nome: "Empreendedorismo", progress: 100 },
    { nome: "Finanças", progress: 40 },
    { nome: "Marketing", progress: 60 },
    { nome: "Gestão de RH", progress: 20 },
    { nome: "Planejamento", progress: 90 },
    { nome: "eyk", progress: 75 },
    { nome: "eyk", progress: 75 },
    { nome: "eyk", progress: 75 },
    { nome: "eyk", progress: 75 },
    { nome: "eyk", progress: 75 },
    { nome: "eyk", progress: 75 },
    { nome: "eyk", progress: 75 },
    { nome: "eyk", progress: 75 }
  ];

  return (
    <Container>
      <ScreenNameHeader headerName="Cursos" />
      <ScrollView>
        {cursos.map((curso, index) => (
          <CourseItem
            key={index}
            course={curso}
            onPressNavigate={navigateToCursoDetalhado}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  // Adicione os estilos necessários aqui
  progress: {
    backgroundColor: "#f0dfc8",
    position: "absolute",

    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#e16539"
  },
  progressText: {
    color: "#000",
    fontSize: 18,
    marginLeft: 10,
    paddingRight: 10,
    marginRight: 10
  }
});

export default CoursesPage;
