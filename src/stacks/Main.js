import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//*****************Telas*****************

import Login from "../screens/Entrada/Login";
import First from "../screens/AreaDeTests/pages/First";
import Second from "../screens/AreaDeTests/pages/Second";
import Test from "../screens/AreaDeTests/Test";
import TelaDeCadastro from "../screens/AreaDeTests/TelaDeCadastro";
import Configpage from "../screens/ConfiguracaoDoUsuario/Configpage";

// import Cadastro from "../screens/AreaDeTests/Cadastro";

import Fatori from "../screens/AreaDeTests/Fatori";
import Finanças from "../screens/AreaDeTests/Finanças";
import Fisica from "../screens/AreaDeTests/Fisica";

import PerguntaUm from "../screens/ScreensPergunta/PerguntaUm";
import PerguntaDois from "../screens/ScreensPergunta/PerguntaDois";
import PerguntaTres from "../screens/ScreensPergunta/PerguntaTres";

import Esquecisenha from "../screens/Entrada/Esquecisenha";
import Perguntas from "../screens/ScreensPergunta/Perguntas";
import CursoDetalhado from "../screens/TelasPrincipais/CursoDetalhado";

import Home from "../screens/TelasPrincipais/Home";
import Rank from "../screens/TelasPrincipais/Rank";
import Cursos from "../screens/TelasPrincipais/Cursos";
import Perfil from "../screens/TelasPrincipais/Perfil";

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

    {/* <Stack.Screen name="Cadastro" component={Cadastro} /> */}

    <Stack.Screen name="Second" component={Second} />
    <Stack.Screen name="First" component={First} />
    <Stack.Screen name="Test" component={Test} />
    <Stack.Screen name="TelaDeCadastro" component={TelaDeCadastro} />
    <Stack.Screen name="Configpage" component={Configpage} />

    <Stack.Screen name="Fatori" component={Fatori} />
    <Stack.Screen name="Finanças" component={Finanças} />
    <Stack.Screen name="Fisica" component={Fisica} />

    <Stack.Screen name="PerguntaUm" component={PerguntaUm} />
    <Stack.Screen name="PerguntaDois" component={PerguntaDois} />
    <Stack.Screen name="PerguntaTres" component={PerguntaTres} />

    <Stack.Screen name="Esquecisenha" component={Esquecisenha} />
    <Stack.Screen name="Perguntas" component={Perguntas} />
    <Stack.Screen name="CursoDetalhado" component={CursoDetalhado} />

    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Rank" component={Rank} />
    <Stack.Screen name="Cursos" component={Cursos} />
    <Stack.Screen name="Perfil" component={Perfil} />
  </Stack.Navigator>
);
