import EStyleSheet from 'react-native-extended-stylesheet';
import { Typography } from '../../../../utils/typography';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    paddingHorizontal: '1.5rem',
  },
  dateLabel: {
    ...Typography.small('Poppins_500Medium'),
  },
  'section:first-child': {
    marginTop: '1rem',
  },
  'section:last-child': {
    marginBottom: '1rem',
  },
});
