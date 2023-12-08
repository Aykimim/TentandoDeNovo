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
import Video from "react-native-video";
import { colors } from "../../../Components/Theme";
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
    const { progress, imagem } = this.props.course;

    const progressInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", `${progress}%`],
      extrapolate: "clamp"
    });

    const colorInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.barraDeProgresso, colors.barraDeProgresso]
    });

    const progressStyle = {
      width: progressInterpolate,
      bottom: 0,
      backgroundColor: colorInterpolate
    };

    return (
      <ButtonCurso onPress={this.props.onPressNavigate} underlayColor= "colors.textoPreto" >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Animated.View style={[styles.progress, progressStyle]} />
          <IconImage source={imagem} />
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
    { nome: "Empreendedorismo", progress: 100, imagem: require("../../../Components/img/Blocos.png") },
    { nome: "Finanças", progress: 40, imagem: require("../../../Components/img/PensaDinheiro.png") },
    { nome: "Marketing", progress: 60, imagem: require("../../../Components/img/AltoFalante.png") },
    { nome: "Gestão de RH", progress: 20, video: require("../../../Components/img/Pessoas.mp4") },
    { nome: "Planejamento", progress: 90, imagem: require("../../../Components/img/Prancheta.png") },
    { nome: "eyk", progress: 75, imagem: require("../../../Components/img/coxinha.png") },
    { nome: "eyk", progress: 75, imagem: require("../../../Components/img/coxinha.png")},
    { nome: "eyk", progress: 75, imagem: require("../../../Components/img/coxinha.png") },
    { nome: "eyk", progress: 75, imagem: require("../../../Components/img/coxinha.png") },
    { nome: "eyk", progress: 75, imagem: require("../../../Components/img/coxinha.png") },
    { nome: "eyk", progress: 75, imagem: require("../../../Components/img/coxinha.png") },
    { nome: "eyk", progress: 75, imagem: require("../../../Components/img/coxinha.png") },
    { nome: "eyk", progress: 75, imagem: require("../../../Components/img/coxinha.png") }
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
    backgroundColor: colors.secundaria,
    position: "absolute",

    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.barraDeProgresso
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
