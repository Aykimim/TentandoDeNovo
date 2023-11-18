import React from "react";
// import { useNavigation } from "@react-navigation/native";
// import { View, Text, TouchableOpacity } from "react-native";

// export default function Second() {
//   const navigate = useNavigation();

//   function navigateBack() {
//     navigate.goBack();
//   }

//   return (
//     <View>
//       <TouchableOpacity onPress={navigateBack}>
//         <Text style={{ backgroundColor: "#E02041" }}>Back to first page</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Container, SendButton, SendButtontext } from "./styles";

export default function App() {
  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.navigate("Login");
  }
  return (
    <Container>
      <View>
        <Text>Hello world!</Text>
      </View>

      <SendButton onPress={navigateToLogin}>
        <SendButtontext>login</SendButtontext>
      </SendButton>
    </Container>
  );
}
