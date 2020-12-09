import EStyleSheet from 'react-native-extended-stylesheet';
import { Typography } from '../../../../utils/typography';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    paddingTop: '1.5rem',
  },
  dateLabel: {
    ...Typography.small('Poppins_500Medium'),
  },
});
