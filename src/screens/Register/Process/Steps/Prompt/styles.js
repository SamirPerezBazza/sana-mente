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
  },
  optionContainer: {
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '100@vs',
  },
  question:{
    color: "black",
    fontSize: '10@vs',
    textAlign: 'center',
    position: 'absolute',
    top: '50@vs',
  },
  option: {
    width: '135@s',
    height: '120@vs',
    margin: '10@vs', 
  }
})