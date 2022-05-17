import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: "32@vs",
    alignSelf: 'flex-start',
    marginLeft: "20@s",
  },
  editContainer: {
    alignSelf: 'flex-start',
    marginLeft: "20@s",
    marginTop: "25@vs",
  },
  edit: {
    fontSize: "17@vs",
    fontFamily: 'Chivo-Light',
    color: "#25D0A2",
  },
  notification: {
    width: '31@s',
    height: '32@s',
    position: 'absolute',
    right: '25@s',
    top: '25@s',
  },
  
});