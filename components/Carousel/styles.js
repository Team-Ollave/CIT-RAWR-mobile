import EStyleSheet from 'react-native-extended-stylesheet';
import { Typography } from '../../utils/typography';

export default EStyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  paginationContainer: {
    backgroundColor: 'rgba(0,0,0, 0.5)',
    borderRadius: '0.25rem',
    paddingVertical: '0.2rem',
    paddingHorizontal: '0.5rem',
    position: 'absolute',
    bottom: '1rem',
    right: '1.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  paginationLabel: {
    ...Typography.overline('Poppins_500Medium'),
    color: 'white',
  },
});
