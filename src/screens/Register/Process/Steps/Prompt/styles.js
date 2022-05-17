import { Dimensions } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.9,
  },
  greet: {
    marginTop: '100@vs',
    alignSelf: "center",
    marginBottom: "10@vs",
    fontSize: '20@vs',
    fontFamily: 'Chivo-Light',
    color: "#858181"
  },
  prompt: {
    alignSelf: "center",
    fontSize: '30@vs',
    fontFamily: 'Chivo-Light',
    textAlign: 'center'
  }
})