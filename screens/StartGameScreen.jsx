import { useState } from "react";
import { StyleSheet, View, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = Number(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert
      Alert.alert(
        "Invalid Number!",
        "Number must be a number between 1 and 99.",
        [{ text: "okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={numberInputHandler}
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#3b021f",
    // android shadow:
    elevation: 4,
    // iOS shadow:
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    textAlign: "center",
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 8,
    borderBottomColor: "#ddb53f",
    borderBottomWidth: 2,
    color: "#ddb53f",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
