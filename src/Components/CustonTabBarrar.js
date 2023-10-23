<Tab.Navigator
screenOptions={({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === "Matematica") {
      iconName = focused ? "home-outline" : "home-outline";
    } else if (route.name === "Fisica") {
      iconName = focused ? "home-outline" : "home-outline";
    } else if (route.name === "Finanças") {
      iconName = focused ? "home-outline" : "home-outline";
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray"
})}
>
</Tab.Navigator>