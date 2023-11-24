import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import Rsa from 'react-native-rsa-native';

export default function App() {
  const [inputText, setInputText] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const generateKeyPair = async () => {
    try {
      const keys = await Rsa.generateKeys(69); // Você pode ajustar o tamanho da chave conforme necessário
      setPrivateKey(keys.private);
      setPublicKey(keys.public);
    } catch (error) {
      console.error("Erro ao gerar o par de chaves:", error.message);
    }r
  };

  const encryptText = async () => {
    if (inputText && publicKey) {
      try {
        const encrypted = await Rsa.encrypt(inputText, publicKey);
        setEncryptedText(encrypted);
      } catch (error) {
        console.error("Erro ao criptografar:", error.message);
      }
    }
  };

  const decryptText = async () => {
    if (encryptedText && privateKey) {
      try {
        const decrypted = await Rsa.decrypt(encryptedText, privateKey);
        setDecryptedText(decrypted);
      } catch (error) {
        console.error("Erro ao descriptografar:", error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Gerar Par de Chaves" onPress={generateKeyPair} />

      <Text style={styles.label}>Chave Privada:</Text>
      <TextInput
        style={styles.input}
        multiline
        editable={false}
        value={privateKey}
      />

      <Text style={styles.label}>Chave Pública:</Text>
      <TextInput
        style={styles.input}
        multiline
        editable={false}
        value={publicKey}
      />

      <Text style={styles.label}>Texto Original:</Text>
      <TextInput
        style={styles.input}
        multiline
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />

      <Button title="Criptografar" onPress={encryptText} />

      <Text style={styles.label}>Texto Criptografado:</Text>
      <TextInput
        style={styles.input}
        multiline
        editable={false}
        value={encryptedText}
      />

      <Button title="Descriptografar" onPress={decryptText} />

      <Text style={styles.label}>Texto Descriptografado:</Text>
      <TextInput
        style={styles.input}
        multiline
        editable={false}
        value={decryptedText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 16,
  },
});
