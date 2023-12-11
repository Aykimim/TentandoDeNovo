import React, { useEffect, useState } from "react";
import { View,StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from "react-native-reanimated";
import { GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import { PanGestureHandler } from 'react-native-gesture-handler';
import { colors } from "./Theme";

const Carregando = () => {
  // Não é necessário o useState para controlar o carregamento aqui,
  // pois este componente é apenas para exibir a animação de carregamento

  // Restante do código...
  const pressed = useSharedValue(false);
  // highlight-next-line
  const offset = useSharedValue(0);

  const pan = PanGestureHandler()
  .onBegin(() => {
    pressed.value = true;
  })
  .onChange((event) => {
    offset.value = event.translationX;
  })
  .onFinalize(() => {
    offset.value = withSpring(0);
    pressed.value = false;
  });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      // highlight-next-line
      { translateX: offset.value },
      { scale: withTiming(pressed.value ? 1.2 : 1) }
    ],
    backgroundColor: pressed.value ? colors.transparent : colors.transparent
  }));
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <GestureHandlerRootView
        // Não é necessário onPress neste contexto
        style={styles.container}
      >
        <View style={styles.container}>
          <GestureDetector gesture={pan}>
            <Animated.View style={[animatedStyles]}>
              <Svg width="102" height="102" viewBox="0 0 102 102" fill="none">
                {/* Restante do SVG */}
              </Svg>
            </Animated.View>
          </GestureDetector>
        </View>
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});


export default Carregando;
