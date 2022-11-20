import { Text, View, TouchableOpacity } from "react-native";
import styles from "../../styles/styles";

const Home = ({ route, navigation }) => {
  return (
    <View style={styles.containerCenter}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={[styles.card, { marginBottom: 30 }]}
      >
        <Text style={[styles.textWhite, styles.textLg]}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={styles.card}
      >
        <Text style={[styles.textWhite, styles.textLg]}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
