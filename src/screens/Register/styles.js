import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  title: {
    fontSize: '30@vs',
    marginTop: '50@vs',
    marginLeft: '30@s',
  },
  inputTitle: {
    fontSize: '20@vs',
    marginTop: '20@vs',
  },
  inputContainer: {
    marginTop: '30@vs',
    marginLeft: '30@s',
  },
  button: {
    width: '190@s',
    height: '36@vs',
    backgroundColor: '#303030',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: '20@vs',
    color: 'white',
  },
  errorMessage: {
    fontSize: '15@vs',
    color: 'red',
    alignSelf: 'center',
    fontFamily: 'Chivo-Italic',
    position: 'absolute',
    marginTop: '290@vs',
  },
  tooltip: {
    fontFamily: 'Chivo-Light',
    fontSize: '10@vs',
    color: '#858181',
    marginLeft: '10@s',
  },
  terms: {
    fontFamily: 'Chivo-Light',
    color: '#858181',
    fontSize: '13@vs',
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: '15@vs',
  },
  buttonContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: '60@vs',
  }
});

export default styles