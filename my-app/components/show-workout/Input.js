import { TextInput, StyleSheet } from "react-native";

const Input = ({
  defaultValue,
  saveChanges,
  id,
  isRep = false,
  isWeight = false,
}) => {
  return (
    <TextInput
      onBlur={(e) => saveChanges(e, defaultValue, id, isRep, isWeight)}
      style={styles.input}
      defaultValue={defaultValue}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 30,
    color: "#ffffffff",
    fontSize: 18,
    marginRight: 2,
  },
});

export default Input;
