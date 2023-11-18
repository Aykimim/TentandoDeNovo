import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome"; // Importe o ícone que deseja usar

// Resto das importações de telas...
import Home from "../screens/TelasPrincipais/Home";
import Rank from "../screens/TelasPrincipais/Rank";
import Cursos from "../screens/TelasPrincipais/Cursos";
import Perfil from "../screens/TelasPrincipais/Perfil";

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = "home"; // Ícone para a tela "Home"
        } else if (route.name === "Rank") {
          iconName = "star"; // Ícone para a tela "Rank"
        } else if (route.name === "Cursos") {
          iconName = "graduation-cap"; // Ícone para a tela "Cursos"
        } else if (route.name === "Perfil") {
          iconName = "user"; // Ícone para a tela "Perfil"
        }
  
        // Retorne o ícone a ser exibido na guia
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#E16539", // Cor da guia ativa
      tabBarInactiveTintColor: "gray", // Cor da guia inativa
      tabBarStyle: {
        backgroundColor: "#303030", // Cor de fundo da barra
      },
    })}

  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Rank" component={Rank} />
    <Tab.Screen name="Cursos" component={Cursos} />
    <Tab.Screen name="Perfil" component={Perfil} />
  </Tab.Navigator>
);






// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Icon from "react-native-vector-icons/FontAwesome";

// //*****************Telas*****************

// import Home from "../screens/Home";
// import Rank from "../screens/Rank";
// import Cursos from "../screens/Cursos";
// import Perfil from "../screens/Perfil";

// //*****************Telas*****************

// const Tab = createBottomTabNavigator();

// export default () => (
//   <Tab.Navigator




//     screenOptions={{ headerShown: false }}
//   >
  
//     <Tab.Screen name="Home" component={Home} />
//     <Tab.Screen name="Rank" component={Rank} />
//     <Tab.Screen name="Cursos" component={Cursos} />
//     <Tab.Screen name="Perfil" component={Perfil} />
//   </Tab.Navigator>
// );
