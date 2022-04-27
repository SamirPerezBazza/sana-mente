import { ScaledSheet } from "react-native-size-matters";


export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25D0A2',
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    flex: 0.45,
    backgroundColor: '#E5E5E5',
  },
  title: {
    marginTop: '30@vs',
    fontSize: '30@vs',
    textAlign: 'center',
  },
  paragraph: {
    marginTop: '10@vs',
    textAlign: 'center',
    fontFamily: 'Chivo-Light',
    fontSize: '15@vs',
  },
  strong: {
    fontFamily: 'Chivo-Light',
    textDecorationLine: 'underline',
    fontSize: '15@vs',
  },
  scroll: {
    flex: 1,
  },
  slide: {
    marginHorizontal: '53@s',
  },
  dotView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '100@vs',
  },
  button: {
    width: '190@s',
    height: '36@vs',
    backgroundColor: '#303030',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: '50@vs',
  },
  buttonText: {
    fontSize: '20@vs',
    color: 'white',
  },
  bottomText: {
    fontSize: '13@vs',
    fontFamily: 'Chivo-Light',
    textAlign: 'center',
  }
});