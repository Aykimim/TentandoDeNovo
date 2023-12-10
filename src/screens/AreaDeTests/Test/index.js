import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../../Components/Theme";

const opcoes = ["Redução da pegada de carbono e otimização de recursos.", "Impacto positivo nas comunidades e responsabilidade social.", "Atração de consumidores comprometidos com práticas sustentáveis"];
const correspondencias = ["Tecnologias Verdes", "Inovação Social", "Educação e Conscientização"];

export default function App() {
  const [correspondenciaSelecionada, setCorrespondenciaSelecionada] = useState(Array(correspondencias.length).fill(null));

  const verificarResposta = (opcao, index) => {
    const novaCorrespondencia = [...correspondenciaSelecionada];
    novaCorrespondencia[index] = opcao;
    setCorrespondenciaSelecionada(novaCorrespondencia);

    // Verificar se todas as correspondências foram feitas
    if (!novaCorrespondencia.includes(null)) {
      validarRespostas(novaCorrespondencia);
    }
  };

  const validarRespostas = (respostas) => {
    const respostasCorretas = ["Tecnologias Verdes", "Inovação Social", "Educação e Conscientização"];
    
    // Verificar se as respostas são corretas
    if (JSON.stringify(respostas) === JSON.stringify(respostasCorretas)) {
      Alert.alert("Respostas corretas!", "Parabéns!");
    } else {
      Alert.alert("Respostas incorretas!", "Tente novamente.");
      // Reiniciar as respostas
      setCorrespondenciaSelecionada(Array(correspondencias.length).fill(null));
    }
  };

  return (
    <View>
      <Header
        backgroundColor={colors.primaria}
        leftComponent={<Icon name="arrow-left" size={20} color={colors.branco} />}
        centerComponent={<Text style={{ fontSize: 20 }}>Questão de Ligar os Pontos</Text>}
        rightComponent={<View />}
      />
      <View style={{ padding: 20 }}>
        {correspondencias.map((correspondencia, index) => (
          <View key={index} style={styles.caixaDestino}>
            <Text style={{ fontSize: 18 }}>{correspondencia}</Text>
            <TouchableOpacity
              style={[styles.caixaOpcao, { opacity: correspondenciaSelecionada[index] ? 0.5 : 1 }]}
              onPress={() => verificarResposta(correspondencia, index)}
              disabled={correspondenciaSelecionada[index] !== null}
            >
              <Text>{correspondenciaSelecionada[index] || "Arraste aqui"}</Text>
            </TouchableOpacity>
          </View>
        ))}
        <View style={{ marginTop: 20 }}>
          {opcoes.map((opcao, opcaoIndex) => (
            <TouchableOpacity
              key={opcaoIndex}
              style={styles.caixaOpcao}
              onPress={() => verificarResposta(opcao, correspondenciaSelecionada.indexOf(null))}
              disabled={correspondenciaSelecionada.includes(opcao)}
            >
              <Text>{opcao}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  caixaDestino: {
    borderWidth: 1,
    borderColor: colors.primaria,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  caixaOpcao: {
    backgroundColor: colors.fundo,
    borderWidth: 1,
    borderColor: colors.primaria,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
});
