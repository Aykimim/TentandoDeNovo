import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "react-native-elements";
import Video from "react-native-video";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "./Theme";
import {
  Container,
  ButtonText,
  ButtonTextTopo,
} from "../screens/AreaDeTests/TelaVideo/styles";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Container>
      <Video
        style={styles.video}
        source={{ uri: "https://www.youtube.com/watch?v=ryISEgXkCac" }}
        isPlaying={isPlaying}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  video: {
    width: 500,
    height: 300,
  },
});

export default VideoPlayer;