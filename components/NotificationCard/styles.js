import { Colors } from '../../utils/colors';
import { Typography } from '../../utils/typography';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  boldText: {
    ...Typography.body1('Poppins_600SemiBold'),
  },
  cardContainer: {
    flex: 1,
    paddingVertical: '0.75rem',
    paddingHorizontal: '0.75rem',
    borderBottomColor: Colors.gray0,
    borderBottomWidth: 2,
    backgroundColor: 'white',
    marginBottom: '0.5rem',
    borderRadius: '0.5rem',
  },
  seen: {
    backgroundColor: Colors.gray0,
  },
  mainText: {
    ...Typography.body1(),
    color: Colors.black,
  },
  dateText: {
    ...Typography.small(),
    paddingTop: '.5rem',
    color: Colors.gray3,
  },
});
