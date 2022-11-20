import { View, Text, TextInput } from "react-native";
import styles from "../styles/styles";

const FormGroup = ({ input }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Text style={styles.label}>{input}</Text>
      <TextInput style={[styles.input, styles.textWhite]} />
    </View>
  );
};

export default FormGroup;
