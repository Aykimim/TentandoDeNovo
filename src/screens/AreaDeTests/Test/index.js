import React, { useState } from "react";
import { View, TouchableOpacity, Text, Button } from "react-native";

const PerguntaCompletarTexto = () => {
  const respostaCorreta = "reutilização e reciclagem";
  const opcoes = ["sustentabilidade", "redução de custos", "reutilização e reciclagem", "inovação"];
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [mostrarBotao, setMostrarBotao] = useState(false);

  const verificarResposta = (opcao) => {
    setRespostaSelecionada(opcao);
    setMostrarBotao(true);
  };

  const prosseguir = () => {
    if (respostaSelecionada === respostaCorreta) {
      alert("Resposta correta!");
      // Adicione lógica adicional para lidar com a resposta correta
    } else {
      alert("Resposta incorreta. Tente novamente.");
    }
    // Adicione qualquer lógica adicional necessária antes de prosseguir
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 20 }}>
        A economia circular visa promover a {respostaSelecionada || "__________"} e a {respostaSelecionada || "____________"}, reduzindo o desperdício e minimizando o impacto ambiental.
      </Text>
      {opcoes.map((opcao, index) => (
        <TouchableOpacity
          key={index}
          style={{
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 5,
            padding: 10,
            marginBottom: 10,
            alignItems: "center",
            backgroundColor: respostaSelecionada === opcao ? "yellow" : "white",
          }}
          onPress={() => verificarResposta(opcao)}
        >
          <Text>{opcao}</Text>
        </TouchableOpacity>
      ))}
      {mostrarBotao && (
        <Button
          title="Prosseguir"
          onPress={prosseguir}
          color="#841584"
        />
      )}
    </View>
  );
};

export default PerguntaCompletarTexto;
