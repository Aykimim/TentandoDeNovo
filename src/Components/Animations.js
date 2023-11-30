import React, { Component } from "react";
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from "react-native";

export default class Animations extends Component {
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
      useNativeDriver: false, // ou true dependendo da sua animação
    }).start();

    // Introduza um atraso antes de redefinir a animação
    Animated.delay(2000).start(() => {
      this.state.animation.setValue(0);
    });
  };

  render() {
    const { progress, color, buttonText } = this.props; // Obtenha os parâmetros

    const progressInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", progress || "60%"], // Use progress ou um valor padrão de "60%"
      extrapolate: "clamp",
    });

    const colorInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(71,255,99)", color || "rgb(99,71,255)"], // Use color ou um valor padrão
    });

    const progressStyle = {
      width: progressInterpolate,
      bottom: 0,
      backgroundColor: colorInterpolate,
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <View style={[styles.button, { backgroundColor: color }]}>
            <View style={StyleSheet.absoluteFill}>
              <Animated.View style={[styles.progress, progressStyle]} />
            </View>
            <Text style={[styles.buttonText, { color: buttonText }]}>{buttonText}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

// Função que cria os estilos
export const createButtonStyles = ({ backgroundColor, textColor }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      backgroundColor: backgroundColor || "#e6537d", // Use backgroundColor ou um valor padrão
      borderRadius: 2,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 60,
      paddingVertical: 10,
      overflow: "hidden",
    },
    buttonText: {
      color: textColor || "#FFF", // Use textColor ou um valor padrão
      fontSize: 24,
      backgroundColor: "transparent",
    },
    progress: {
      position: "absolute",
      left: 0,
      top: 0,
    },
  });
};
