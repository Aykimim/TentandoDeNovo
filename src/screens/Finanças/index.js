import * as React from "react";
import { Text, View, Button, Modal, TextInput } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  const navigation = useNavigation();
  const [usdToBrlModalVisible, setUsdToBrlModalVisible] = React.useState(false);
  const [jurosCompostosModalVisible, setJurosCompostosModalVisible] = React.useState(false);

  // Estado para a funcionalidade de "Converter USD para BRL"
  const [usdToBrlInput, setUsdToBrlInput] = React.useState("");
  const [resultUsdToBrl, setResultUsdToBrl] = React.useState("");

  // Estado para a funcionalidade de "Calcular Juros Compostos"
  const [jurosCompostosInput1, setJurosCompostosInput1] = React.useState("");
  const [jurosCompostosInput2, setJurosCompostosInput2] = React.useState("");
  const [jurosCompostosInput3, setJurosCompostosInput3] = React.useState("");
  const [resultJurosCompostos, setResultJurosCompostos] = React.useState("");

  const showUsdToBrlConverter = () => {
    setUsdToBrlInput("");
    setResultUsdToBrl("");
    setUsdToBrlModalVisible(true);
  };

  const showJurosCompostosCalculator = () => {
    setJurosCompostosInput1("");
    setJurosCompostosInput2("");
    setJurosCompostosInput3("");
    setResultJurosCompostos("");
    setJurosCompostosModalVisible(true);
  };

  const convertUsdToBrl = () => {
    if (usdToBrlInput !== "") {
      // Lógica de conversão aqui
      setResultUsdToBrl("Resultado da conversão aqui");
    }
  };

  const calculateJurosCompostos = () => {
    if (jurosCompostosInput1 !== "" && jurosCompostosInput2 !== "" && jurosCompostosInput3 !== "") {
      // Lógica de cálculo de juros compostos aqui
      setResultJurosCompostos("Resultado dos juros compostos aqui");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Finanças!</Text>
      <Button title="Converter USD para BRL" onPress={showUsdToBrlConverter} />
      <Button title="Calcular Juros Compostos" onPress={showJurosCompostosCalculator} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={usdToBrlModalVisible}
        onRequestClose={() => {
          setUsdToBrlModalVisible(false);
        }}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, width: 300 }}>
            {resultUsdToBrl === "" ? (
              <>
                <Text>Converter USD para BRL</Text>
                <TextInput
                  placeholder="Valor em USD"
                  value={usdToBrlInput}
                  onChangeText={(text) => setUsdToBrlInput(text)}
                  keyboardType="numeric"
                />
                <Button title="Converter" onPress={convertUsdToBrl} />
              </>
            ) : (
              <>
                <Text>Resultado da Conversão:</Text>
                <Text>{resultUsdToBrl} BRL</Text>
              </>
            )}

            <Button title="Fechar" onPress={() => setUsdToBrlModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={jurosCompostosModalVisible}
        onRequestClose={() => {
          setJurosCompostosModalVisible(false);
        }}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, width: 300 }}>
            {resultJurosCompostos === "" ? (
              <>
                <Text>Calcular Juros Compostos</Text>
                <TextInput
                  placeholder="Principal"
                  value={jurosCompostosInput1}
                  onChangeText={(text) => setJurosCompostosInput1(text)}
                  keyboardType="numeric"
                />
                <TextInput
                  placeholder="Taxa de Juros (%)"
                  value={jurosCompostosInput2}
                  onChangeText={(text) => setJurosCompostosInput2(text)}
                  keyboardType="numeric"
                />
                <TextInput
                  placeholder="Tempo (meses)"
                  value={jurosCompostosInput3}
                  onChangeText={(text) => setJurosCompostosInput3(text)}
                  keyboardType="numeric"
                />
                <Button title="Calcular" onPress={calculateJurosCompostos} />
              </>
            ) : (
              <>
                <Text>Resultado dos Juros Compostos:</Text>
                <Text>{resultJurosCompostos}</Text>
              </>
            )}

            <Button title="Fechar" onPress={() => setJurosCompostosModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
