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
import Svg, { Circle, Path, Line, Rect, G } from "react-native-svg";
import {
  ProgressContainer,
  Container,
  ButtonCurso,
  IconImage,
  ButtonText,
  IconeView,

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
    const { progress, svgIcon, imagem } = this.props.course;

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
      <ButtonCurso
        onPress={this.props.onPressNavigate}
        underlayColor={colors.primaria}
      >
        <View style={{ flexDirection: "row" }}>
          <Animated.View style={[styles.progress, progressStyle]} />
          {svgIcon ? (
            <IconeView>{svgIcon}</IconeView>
          ) : (
            <IconImage source={imagem} />
          )}
          <ButtonText>{this.props.course.nome}</ButtonText>
          <Text style={styles.progressText}>{`${progress}%`}</Text>
        </View>
      </ButtonCurso>
    );
  }
}

const CoursesPage = () => {
  const navigation = useNavigation();

  function Trilha() {
    // navigation.navigate("Cursos");
    navigation.reset({
      index: 0,
      routes: [{ name: "MainTab" }]//,screen
    });
  }

  const cursos = [
    {
      nome: "Empreendedorismo",
      progress: 75,
      
      svgIcon: <Icon name="briefcase" size={30} color={colors.icone} />
    },
    {
      nome: "Finanças",
      progress: 40,

      svgIcon: <Icon name="money" size={30} color={colors.icone} />
    },

    {
      nome: "Marketing",
      progress: 60,
      svgIcon: <Icon name="bullhorn" size={30} color={colors.icone} />
    },
    {
      nome: "Gestão de RH",
      progress: 20,
      svgIcon: <Icon name="user" size={30} color={colors.icone} />
    },
    {
      nome: "Planejamento",
      progress: 90,
      svgIcon: (
        <Icon
          
          name="clipboard"
          size={30}
          color={colors.icone}
        />
      )
    },

    {
      nome: "eyk",
      progress: 75,
      svgIcon: <Icon name="smile-o" size={30} color={colors.icone} />
    }
  ];
  return (
    <Container>
      <ScreenNameHeader headerName="Cursos" />
      <ScrollView>
        {cursos.map((curso, index) => (
          <CourseItem
            key={index}
            course={curso}
            onPressNavigate={Trilha}
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
    color: colors.textoPreto,
    fontSize: 18,
    marginLeft: 10,
    paddingRight: 10,
    marginRight: 10
  }
});

export default CoursesPage;
