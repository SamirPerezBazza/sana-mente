import { ScaledSheet } from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  notification: {
    width: '31@s',
    height: '32@s',
    position: 'absolute',
    right: '25@s',
    top: '25@s',
  },
  titleBox: {
    marginLeft: '30@s',
    marginTop: '60@s',
  },
  title: {
    fontSize: '40@ms',
  },
  subTitle: {
    fontSize: '20@ms',
  },
  moodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    height: '70@ms',
    backgroundColor: '#9AEFD7',
    borderRadius: '25@ms',
    marginVertical: '15@s',
  },
  moodButton: {
    width: '55@ms',
    height: '55@ms',
    backgroundColor: '#FFFFFF',
    marginHorizontal: '5@ms',
    borderRadius: '27@ms',
  },
  groupTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginHorizontal: '22@s',
  },
  middleText: {
    fontSize: '20@ms',
  },
  lightText: {
    fontSize: '15@ms',
    fontFamily: 'Chivo-Light',
    color: '#858181'
  },
});