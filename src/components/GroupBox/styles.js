import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    height: '133@vs',
    borderRadius: '20@vs',
    marginBottom: '10@vs',
  },
  leftSide: {
    flex: 1.2,
    paddingTop: '12@vs',
    paddingLeft: '12@vs',
  },
  rightSide: {
    flex: 2,
    borderTopRightRadius: '20@vs',
    borderBottomRightRadius: '20@vs',
    position: 'relative',
  },
  photo: {
    width: 67,
    height: 67,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginBottom: '5@vs',
  },
  author: {
    fontSize: '11@vs',
  },
  name: {
    fontSize: '15@vs',
  },
  members: {
    fontSize: '10@vs',
  },
  chatIcon: {
    paddingRight: '15@vs',
    paddingTop: '50@vs',
  }
});

export default styles