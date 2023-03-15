import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
    color: Colors.accent1,
    fontSize: 22,
  },
});
