import { StyleSheet, Text, Platform } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    padding: 12,
    textAlign: "center",
    fontSize: 24,
    color: "white",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    maxWidth: "80%",
    width: "80%",
  },
});
