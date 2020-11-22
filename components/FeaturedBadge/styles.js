import EStyleSheet from 'react-native-extended-stylesheet';
import { Typography } from '../../utils/typography';

export default EStyleSheet.create({
  container: {
    flexGrow: 0,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '0.2rem',
    paddingHorizontal: '0.25rem',
    elevation: 5,
  },
  label: {
    ...Typography.overline('Poppins_600SemiBold'),
    textTransform: 'uppercase',
  },
});
