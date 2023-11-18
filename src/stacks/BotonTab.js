import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//*****************Telas*****************

import Fatori from "../screens/AreaDeTests/Fatori";
import Finanças from "../screens/AreaDeTests/Finanças";
import Fisica from "../screens/AreaDeTests/Fisica";

//*****************Telas*****************

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={{ headerShown: false }}
  >
    <Tab.Screen name="Fatori" component={Fatori} />
    <Tab.Screen name="Fisica" component={Fisica} />
    <Tab.Screen name="Finanças" component={Finanças} />
  </Tab.Navigator>
);
