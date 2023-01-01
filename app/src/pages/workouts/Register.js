import { TouchableOpacity, View, Text } from "react-native";
import FormGroup from "../../components/FormGroup";
import styles from "../../styles/styles";

const Register = () => {
  return (
    <View style={styles.containerCenter}>
      <FormGroup input={"Username"} />
      <FormGroup input={"Email"} />
      <FormGroup input={"Password"} />
      <TouchableOpacity>
        <Text style={[styles.card, styles.textWhite]}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
