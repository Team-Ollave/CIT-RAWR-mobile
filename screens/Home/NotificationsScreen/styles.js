import { Typography } from '../../../utils/typography';
import { Colors } from '../../../utils/colors';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: '1.5rem',
    paddingTop: '1.5rem',
  },
  headerText: {
    ...Typography.screenTitle(),
    color: Colors.black,
  },
  notificationsList: {
    flex: 1,
    marginTop: '1.5rem',
    paddingTop: '1rem',
    borderTopColor: Colors.gray0,
    borderTopWidth: 2,
  },
});
