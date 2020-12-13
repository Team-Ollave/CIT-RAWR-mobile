import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Typography } from '../../../utils/typography';

const { width } = Dimensions.get('screen');

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
  title: {
    ...Typography.screenTitle(),
  },
  header: {
    width,
    paddingLeft: 24,
    paddingRight: 16,
    marginTop: 24,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
