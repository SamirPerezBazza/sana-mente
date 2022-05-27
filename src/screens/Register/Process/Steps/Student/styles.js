import { Dimensions } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.9,
    alignItems: 'center',
  },
  title: {
    fontSize: "30@ms",
    marginTop: "100@vs",
    marginBottom: "50@ms",
    color: "black",
    fontFamily: 'Chivo-Light',
  },
  optionContainer: {
    width: "80%",
    alignItems: 'center',
    marginVertical: "10@ms",
    paddingVertical: "5@ms",
  },
  option: {
    fontFamily: 'Chivo-Light',
    fontSize: "25@ms",
    color: "black"
  }
});