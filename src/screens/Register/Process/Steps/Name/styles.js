import { Dimensions } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.9,
  },
  title: {
    alignSelf: "center",
    marginTop: "100@vs",
    marginBottom: "20@vs",
    fontFamily: 'Chivo-Light',
    fontSize: '30@vs',
  },
  input: {
    height: '60@vs',
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
    color: 'black',
    fontFamily: 'Chivo-Light',
    fontSize: '40@vs',
    textAlign: 'center',
    paddingLeft: 0,
  },
  tooltip: {
    fontFamily: 'Chivo-Light',
    fontSize: '12@vs',
    alignSelf: 'center'
  }
})