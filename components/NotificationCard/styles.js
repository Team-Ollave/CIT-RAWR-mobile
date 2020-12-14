import { Colors } from '../../utils/colors';
import { Typography } from '../../utils/typography';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  boldText: {
    ...Typography.body1('Poppins_600SemiBold'),
  },
  cardContainer: {
    flex: 1,
    padding: '0.5rem',
  },
  mainText: {
    ...Typography.regular(),
    color: Colors.black,
  },
  dateText: {
    paddingTop: '.5rem',
    color: Colors.gray3,
  },
});
