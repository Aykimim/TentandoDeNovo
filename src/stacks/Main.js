import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//*****************Telas*****************

import Login from "../screens/Login";
import First from "../pages/First";
import Second from "../pages/Second";
import Test from "../screens/Test";
import Prot from "../screens/Prot";
import Configpage from "../screens/Configpage";


import Fatori from "../screens/Fatori";
import Finanças from "../screens/Finanças";
import Fisica from "../screens/Fisica";

import Esquecisenha from "../screens/Esquecisenha";
import Perguntas from "../screens/Perguntas";
import CursoDetalhado from "../screens/CursoDetalhado";

import Home from "../screens/Home";
import Rank from "../screens/Rank";
import Cursos from "../screens/Cursos";
import Perfil from "../screens/Perfil";


//*****************Telas*****************
import BotonTab from "./BotonTab";
import MainTab from "./MainTab";


const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Login"
  >
    <Stack.Screen name="BotonTab" component={BotonTab} />
    <Stack.Screen name="MainTab" component={MainTab} />

    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Second" component={Second} />
    <Stack.Screen name="First" component={First} />
    <Stack.Screen name="Test" component={Test} />
    <Stack.Screen name="Prot" component={Prot} />
    <Stack.Screen name="Configpage" component={Configpage} />

    <Stack.Screen name="Fatori" component={Fatori} />
    <Stack.Screen name="Finanças" component={Finanças} />
    <Stack.Screen name="Fisica" component={Fisica} />




    <Stack.Screen name="Esquecisenha" component={Esquecisenha} />
    <Stack.Screen name="Perguntas" component={Perguntas} />
<Stack.Screen name="CursoDetalhado" component={CursoDetalhado} />

    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Rank" component={Rank} />
    <Stack.Screen name="Cursos" component={Cursos} />
    <Stack.Screen name="Perfil" component={Perfil} />

  </Stack.Navigator>
);
