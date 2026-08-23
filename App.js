import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStackScreen from "./src/routes/RootStackScreen";

import { Provider } from "react-redux";
import configureStore from "./src/redux/store";
import { ThemeProvider, useTheme } from "./src/theme/ThemeContext";

const store = configureStore();

function AppContent() {
  const { colors, navigationTheme } = useTheme();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.surface }}
      forceInset={{ top: "always", bottom: "always" }}
    >
      <NavigationContainer theme={navigationTheme}>
        <RootStackScreen />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Provider>
  );
}
