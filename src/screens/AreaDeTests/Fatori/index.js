import React from "react";
import { View } from "react-native";
import Animations, { styles } from"../../../Components/Animations"; // Certifique-se de fornecer o caminho correto para o arquivo Animations



const AnotherPage = () => {
  return (
    <View style={styles.container}>
      <Animations />
    </View>
  );
};

export default AnotherPage;

