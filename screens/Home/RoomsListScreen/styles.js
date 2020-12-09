import EStyleSheet from 'react-native-extended-stylesheet';
import { Typography } from '../../../utils/typography';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buildingName: {
    marginBottom: '0.5rem',
    ...Typography.h6(),
  },
  exploreButton: {
    zIndex: 1,
    position: 'absolute',
    bottom: '1rem',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    paddingHorizontal: '0.5rem',
    paddingVertical: '0.5rem',
    elevation: 5,
  },
  exploreLabel: {
    ...Typography.small('Poppins_500Medium'),
    marginLeft: '0.2rem',
  },
});
