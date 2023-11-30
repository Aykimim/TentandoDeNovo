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
    // Animated.delay(2000).start(() => {
    //   this.state.animation.setValue(0);
    // });
  };

  render() {
    const progressInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "60%"],
      extrapolate: "clamp",
    });

    const colorInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(225, 101, 57)", "rgb(225, 101, 57)"],
    });
    // rgb(121, 88, 51)
    const progressStyle = {
      width: progressInterpolate,
      bottom: 0,
      backgroundColor: colorInterpolate,
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <View style={styles.button}>
            <View style={StyleSheet.absoluteFill}>
              <Animated.View style={[styles.progress, progressStyle]} />
            </View>
            <Text style={styles.buttonText}>Get it!</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#e6537d",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 60,
    paddingVertical: 10,
    overflow: "hidden",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
    backgroundColor: "transparent",
  },
  progress: {
    position: "absolute",
    left: 0,
    top: 0,
  },
});
