import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
  container: {
    width: '90%',
    height: '65@vs',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  picture: {
    width: '18%',
    height: '85%',
    backgroundColor: '#303030',
    borderRadius: '7@s'
  },
  info: {
    marginLeft: '15@s',
  },
  expert: {
    fontFamily: 'Chivo-Bold',
    fontSize: '17@vs',
  },
  message: {
    fontFamily: 'Chivo-Light',
    fontSize: '15@vs'
  }
})