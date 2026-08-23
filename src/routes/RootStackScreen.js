import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../views/SignInScreen";
import SignUpScreen from "../views/SignUpScreen";
import Tabs from "./Tabs";
import BookDetailsScreen from "../views/BookDetailsScreen";
import { useTheme } from "../theme/ThemeContext";

const RootStack = createNativeStackNavigator();

export default function RootStackScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerShown: false }}
      ></RootStack.Screen>
      <RootStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      ></RootStack.Screen>
      <RootStack.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }}
      ></RootStack.Screen>
      <RootStack.Screen
        name="BookDetailsScreen"
        component={BookDetailsScreen}
        options={{
          headerBackButtonMenuEnabled: false,
          title: "",
          headerTintColor: colors.textPrimary,
          headerStyle: {
            backgroundColor: colors.surface,
            shadowColor: "transparent",
          },
        }}
      ></RootStack.Screen>
    </RootStack.Navigator>
  );
}
