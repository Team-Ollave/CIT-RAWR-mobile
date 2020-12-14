import { Colors } from '../../utils/colors';
import { Typography } from '../../utils/typography';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  boldText: {
    ...Typography.body1('Poppins_600SemiBold'),
  },
  cardContainer: {
    flex: 1,
    padding: '0.75rem',
    borderBottomColor: Colors.gray1,
    borderBottomWidth: 1,
    backgroundColor: 'white',
    marginBottom: '0.5rem',
    borderRadius: '0.5rem',
  },
  seen: {
    // backgroundColor: Colors.gray0,
    backgroundColor: 'rgba(116, 30, 30, 0.05)',
  },
  mainText: {
    ...Typography.body1(),
    marginBottom: '.5rem',
    color: Colors.black,
  },
  dateText: {
    ...Typography.small(),
    color: Colors.gray4,
  },
});
