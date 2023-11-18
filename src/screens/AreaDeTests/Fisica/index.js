import * as React from "react";
import { Text, View, Button, Modal, TextInput } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  const navigation = useNavigation();
  const [modalVisibleCelsius, setModalVisibleCelsius] = React.useState(false);
  const [modalVisibleVelocity, setModalVisibleVelocity] = React.useState(false);
  const [celsius, setCelsius] = React.useState("");
  const [fahrenheit, setFahrenheit] = React.useState("");
  const [distance, setDistance] = React.useState("");
  const [time, setTime] = React.useState("");
  const [velocity, setVelocity] = React.useState("");

  const showTemperatureConverter = () => {
    setCelsius("");
    setFahrenheit("");
    setModalVisibleCelsius(true);
  };

  const showVelocityCalculator = () => {
    setDistance("");
    setTime("");
    setVelocity("");
    setModalVisibleVelocity(true);
  };

  const convertCelsiusToFahrenheit = () => {
    if (celsius !== "") {
      const fahrenheitValue = (celsius * 9/5) + 32;
      setFahrenheit(fahrenheitValue.toFixed(2));
    }
  };

  const calculateVelocity = () => {
    if (distance !== "" && time !== "") {
      const velocityValue = distance / time;
      setVelocity(velocityValue.toFixed(2));
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Física!</Text>
      <Button title="Converter ºC para ºF" onPress={showTemperatureConverter} />
      <Button title="Calcular Velocidade Média" onPress={showVelocityCalculator} />

      {/* Modal para Converter ºC para ºF */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleCelsius}
        onRequestClose={() => {
          setModalVisibleCelsius(false);
        }}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, width: 300 }}>
            <>
              <Text>Calcular Temperatura:</Text>
              <Text>ºC: {celsius}</Text>
              <TextInput
                placeholder="ºC"
                value={celsius}
                onChangeText={(text) => setCelsius(text)}
                keyboardType="numeric"
              />
              <Button title="Converter" onPress={convertCelsiusToFahrenheit} />
              <Text>ºF: {fahrenheit}</Text>
            </>

            <Button title="Fechar" onPress={() => setModalVisibleCelsius(false)} />
          </View>
        </View>
      </Modal>

      {/* Modal para Calcular Velocidade Média */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleVelocity}
        onRequestClose={() => {
          setModalVisibleVelocity(false);
        }}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, width: 300 }}>
            <>
              <Text>Calcular Velocidade Média:</Text>
              <TextInput
                placeholder="Distância (m)"
                value={distance}
                onChangeText={(text) => setDistance(text)}
                keyboardType="numeric"
              />
              <TextInput
                placeholder="Tempo (s)"
                value={time}
                onChangeText={(text) => setTime(text)}
                keyboardType="numeric"
              />
              <Button title="Calcular Velocidade" onPress={calculateVelocity} />
              <Text>Velocidade Média: {velocity} m/s</Text>
            </>

            <Button title="Fechar" onPress={() => setModalVisibleVelocity(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
