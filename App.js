import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStackScreen from "./src/routes/RootStackScreen";

import { Provider } from "react-redux";
import configureStore from "./src/redux/store";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#212237" }}
        forceInset={{ top: "always", bottom: "always" }}
      >
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
