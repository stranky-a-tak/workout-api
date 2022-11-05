import { View } from "react-native";
import Card from "./Card";

const CardContainer = (props) => {
  return (
    <View>
      <Card navigation={props.navigation} />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </View>
  );
};

export default CardContainer;
