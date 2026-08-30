import React, { useMemo } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { logout } from "../redux/actions/user";
import { useTheme } from "../theme/ThemeContext";
import ThemeToggleButton from "../components/ThemeToggleButton";

export default function UserScreen({ navigation }) {
  const { colors, colorScheme } = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  const dispatch = useDispatch();
  const username = useSelector((state) => state.userReducer.username);

  const handleLogout = () => {
    dispatch(logout());
    navigation.reset({ index: 0, routes: [{ name: "SignInScreen" }] });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.avatar}>
          <FontAwesome name="user" size={40} color={colors.ctaContrast} />
        </View>
        <Text style={styles.username}>{username ?? "Guest"}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.rowLabel}>Theme</Text>
        <View style={styles.rowRight}>
          <Text style={styles.rowValue}>
            {colorScheme === "dark" ? "Dark" : "Light"}
          </Text>
          <ThemeToggleButton />
        </View>
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const getStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  profile: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  username: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.surface,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 20,
  },
  rowLabel: {
    color: colors.textPrimary,
    fontSize: 16,
  },
  rowRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowValue: {
    color: colors.textSecondary,
    fontSize: 14,
    marginRight: 14,
  },
  logoutBtn: {
    backgroundColor: colors.cta,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },
  logoutText: {
    color: colors.ctaContrast,
    fontSize: 16,
    fontWeight: "600",
  },
});
