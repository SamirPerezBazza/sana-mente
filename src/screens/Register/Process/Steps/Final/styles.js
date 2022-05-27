import { Dimensions } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.9,
    alignItems: 'center',
  },
  title: {
    marginTop: "150@vs",
    marginBottom: '30@vs',
    fontSize: "30@vs",
    fontFamily: 'Chivo-Light',
    textAlign:'center'
  },

});