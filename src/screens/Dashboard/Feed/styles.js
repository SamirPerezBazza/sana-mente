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
    marginBottom: '12@vs',
  },
  middleText: {
    fontSize: '20@ms',
  },
  lightText: {
    fontSize: '15@ms',
    fontFamily: 'Chivo-Light',
    color: '#858181'
  },
  scrollContainer: {
    height: '220@vs',
    marginLeft: '20@s',
    justifyContent: 'center',
  },
  scroll: {
    flex: 1,
  },
  groupBox: {
    height: '170@vs',
    width: '150@vs',
    borderRadius: '21@s',
    marginRight: '20@s',
    position: 'relative',
  },
  groupName: {
    fontSize: '15@vs',
    marginLeft: '10@s',
  },
  groupAuthor: {
    fontFamily: 'Chivo-Light',
    fontSize: '10@vs',
    color: '#858181',
    marginLeft: '10@s',
  },
  addButton: {
    width: '30@s',
    height: '30@s',
    borderRadius: '25@s',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: '5@s',
    position: 'absolute',
    bottom: '10@s',
    right: '10@s',
  },
  postBox: {
    height: '70@vs',
    width: '270@s',
    borderRadius: '21@s',
    backgroundColor: '#C7D5FF',
    flexDirection: 'row',
    alignItems: 'center'
  },
  postPicture: {
    width: '50@s',
    height: '47@vs',
    borderRadius: '25@s',
    backgroundColor: '#FFFFFF',
    marginLeft: '15@s',
  },
  authorRow: {
    flexDirection: 'row',
  },
  postAuthor: {
    fontSize: '13@vs',
    color: "#FFFF",
    marginLeft: '5@s',
  },
  titleContainer: {
    width: '100%',
  },
  postTitle: {
    fontSize: '13@vs',
    textAlign: 'center'
  }
});