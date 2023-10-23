import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./src/stacks/Main";


export default function App() {
  return (
    <NavigationContainer>
   
      <Main />
    </NavigationContainer>
  );
}

// import React from "react";
// import Routes from "./src/pages/routes";

// export default function App() {
//   return <Routes />;
// }
