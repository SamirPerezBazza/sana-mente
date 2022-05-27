import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logoutPrompt: {
    color: "#FFF",
    fontSize: "20@s",
  },
  logout: {
    marginVertical: "10@vs",
    backgroundColor: "#303030",
    paddingHorizontal: "10%",
    paddingVertical: "2%",
    borderRadius: 10,
    width: "250@s",
    alignItems: 'center',
  },
  title: {
    marginTop: '30@vs',
    fontSize: "30@vs",
  },
  name: {
    marginVertical: '30@vs',
    fontSize: "35@vs",
  },
  circleContainer:{
    marginTop: '30@vs',
    width: "200@s",
    height: "200@s",
    borderRadius: "100@s",
    borderWidth: "2@s",
    borderColor: "#25D0A2",
    alignItems: 'center',
    justifyContent: 'center'
  },
  circle: {
    width: "190@s",
    height: "190@s",
    borderRadius: "100@s",
    backgroundColor: "#B5F3FF",
  }
});

export default styles;