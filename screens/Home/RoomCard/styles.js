import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../../utils/colors';
import { Typography } from '../../../utils/typography';

export default EStyleSheet.create({
  container: {
    height: '12rem',
    width: '17rem',
    // height: '13.438rem',
    // width: '14.688rem',
    borderRadius: '0.5rem',
    borderColor: Colors.gray1,
    borderWidth: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
    elevation: 1,
  },
  body: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '0.625rem',
    paddingTop: '1.25rem', // para nis linear gradient
  },
  roomName: {
    color: 'white',
    ...Typography.large('Poppins_500Medium'),
  },
});
