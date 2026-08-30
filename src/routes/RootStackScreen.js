import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
        options={({ navigation }) => ({
          headerBackButtonMenuEnabled: false,
          headerBackVisible: false,
          title: "",
          headerTintColor: colors.textPrimary,
          headerStyle: {
            backgroundColor: colors.surface,
            shadowColor: "transparent",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Tabs")}
              hitSlop={10}
              style={{
                width: 32,
                height: 32,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
            </TouchableOpacity>
          ),
        })}
      ></RootStack.Screen>
    </RootStack.Navigator>
  );
}
