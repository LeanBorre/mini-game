import { StyleSheet, Text } from "react-native";

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
    borderWidth: 2,
    borderColor: "white",
  },
});
