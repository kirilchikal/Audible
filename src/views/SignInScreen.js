import React, { useState, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useTheme } from "../theme/ThemeContext";

export default function SignInScreen({ navigation }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { colors } = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputs}>
        <View>
          <Text style={styles.inputText}>Username</Text>
          <TextInput
            style={styles.input}
            onChange={(text) => setLogin(text)}
            value="user1@test.au"
          />
        </View>
        <View style={styles.inputPassword}>
          <Text style={styles.inputText}>Password</Text>
          <TextInput
            style={styles.input}
            onChange={(text) => setPassword(text)}
            value="audible"
            secureTextEntry
          />
        </View>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() =>
            navigation.reset({ index: 0, routes: [{ name: "Tabs" }] })
          }
        >
          <Text style={{ color: colors.ctaContrast, textTransform: "uppercase" }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
          <Text style={styles.createBtn}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const getStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.surface,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 24,
    top: "20%",
  },
  inputs: {
    width: "75%",
    top: "35%",
  },
  input: {
    borderBottomColor: colors.textSecondary,
    borderBottomWidth: 1,
    fontSize: 18,
    color: colors.textMuted,
  },
  inputText: {
    fontSize: 10,
    color: colors.textSecondary,
    textTransform: "uppercase",
    marginBottom: 12,
  },
  inputPassword: {
    marginTop: 18,
  },
  btn: {
    top: "50%",
    alignItems: "center",
  },
  loginBtn: {
    width: 285,
    height: 40,
    backgroundColor: colors.cta,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  createBtn: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: 25,
  },
});
