import * as React from "react";
import { Text, View, Button, Modal, TextInput, StyleSheet } from "react-native";
import { Container, SendButton, SendButtontext } from "./styles";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  const navigation = useNavigation();
  const [regra3ModalVisible, setRegra3ModalVisible] = React.useState(false);
  const [hipotenusaModalVisible, setHipotenusaModalVisible] = React.useState(false);
  const [regra3Input1, setRegra3Input1] = React.useState("");
  const [regra3Input2, setRegra3Input2] = React.useState("");
  const [regra3Input3, setRegra3Input3] = React.useState("");

  const [hipotenusaInput1, setHipotenusaInput1] = React.useState("");
  const [hipotenusaInput2, setHipotenusaInput2] = React.useState("");
  const [resultRegra3, setResultRegra3] = React.useState("");
  const [resultHipotenusa, setResultHipotenusa] = React.useState("");

  const showRegra3Calculator = () => {
    setRegra3Input1("");
    setRegra3Input2("");
    setRegra3Input3("");
    setResultRegra3("");
    setRegra3ModalVisible(true);
  };

  const showHipotenusaCalculator = () => {
    setHipotenusaInput1("");
    setHipotenusaInput2("");
    setResultHipotenusa("");
    setHipotenusaModalVisible(true);
  };

  const calculateRegra3 = () => {
    if (regra3Input1 !== "" && regra3Input2 !== "" && regra3Input3 !== "") {
      const result = (regra3Input2 * regra3Input3) / regra3Input1;
      setResultRegra3(result);
    }
  };

  const calculateHipotenusa = () => {
    if (hipotenusaInput1 !== "" && hipotenusaInput2 !== "") {
      const result = Math.sqrt(hipotenusaInput1 * hipotenusaInput1 + hipotenusaInput2 * hipotenusaInput2);
      setResultHipotenusa(result.toFixed(2));
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center",  }}>
      <Text>Matemática!</Text>
      <Button title="Regra de 3 Simples" onPress={showRegra3Calculator} />
      <Button title="Calcular Hipotenusa" onPress={showHipotenusaCalculator} />

      {/* Modal para Regra de 3 Simples */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={regra3ModalVisible}
        onRequestClose={() => {
          setRegra3ModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {resultRegra3 === "" ? (
              <>
                <Text>Regra de 3 Simples</Text>
                <TextInput
                  placeholder="Valor 1"
                  value={regra3Input1}
                  onChangeText={(text) => setRegra3Input1(text)}
                  keyboardType="numeric"
                />
                <TextInput
                  placeholder="Valor 2"
                  value={regra3Input2}
                  onChangeText={(text) => setRegra3Input2(text)}
                  keyboardType="numeric"
                />
                <TextInput
                  placeholder="Valor 3"
                  value={regra3Input3}
                  onChangeText={(text) => setRegra3Input3(text)}
                  keyboardType="numeric"
                />
                <Button title="Calcular" onPress={calculateRegra3} />
              </>
            ) : (
              <>
                <Text>Resultado da Regra de 3 Simples:</Text>
                <Text>{resultRegra3}</Text>
              </>
            )}

            <Button title="Fechar" onPress={() => setRegra3ModalVisible(false)} />
          </View>
        </View>
      </Modal>

      {/* Modal para Calcular Hipotenusa */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={hipotenusaModalVisible}
        onRequestClose={() => {
          setHipotenusaModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {resultHipotenusa === "" ? (
              <>
                <Text>Calcular Hipotenusa</Text>
                <TextInput
                  placeholder="Cateto 1"
                  value={hipotenusaInput1}
                  onChangeText={(text) => setHipotenusaInput1(text)}
                  keyboardType="numeric"
                />
                <TextInput
                  placeholder="Cateto 2"
                  value={hipotenusaInput2}
                  onChangeText={(text) => setHipotenusaInput2(text)}
                  keyboardType="numeric"
                />
                <Button title="Calcular" onPress={calculateHipotenusa} />
              </>
            ) : (
              <>
                <Text>Resultado da Hipotenusa:</Text>
                <Text>{resultHipotenusa}</Text>
              </>
            )}

            <Button title="Fechar" onPress={() => setHipotenusaModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContent: {
    backgroundColor: "#795833",
    padding: 20,
    borderRadius: 10,
    width: 300,
    
  },
});
