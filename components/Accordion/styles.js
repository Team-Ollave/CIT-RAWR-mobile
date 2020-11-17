import EStyleSheet from 'react-native-extended-stylesheet';
import { Typography } from '../../utils/typography';

export default EStyleSheet.create({
  bodyContainer: {
    overflow: 'hidden',
  },
  labelContainer: {
    flexDirection: 'row',
    marginBottom: '0.25rem',
  },
  labelText: {
    ...Typography.small('Poppins_600SemiBold'),
    marginLeft: '0.25rem',
  },
});
