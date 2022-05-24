import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function SignInScreen({ navigation }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

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
          onPress={() => navigation.navigate("Tabs")}
        >
          <Text style={{ color: "white", textTransform: "uppercase" }}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "#212237",
  },
  title: {
    color: "white",
    fontSize: 24,
    top: "20%",
  },
  inputs: {
    width: "75%",
    top: "35%",
  },
  input: {
    borderBottomColor: "#999AA3",
    borderBottomWidth: 1,
    fontSize: 18,
    color: "#B1B2B9",
  },
  inputText: {
    fontSize: 10,
    color: "#999AA3",
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
    backgroundColor: "#F56C26",
    color: "white",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  createBtn: {
    fontSize: 16,
    color: "#999AA3",
    marginTop: 25,
  },
});
