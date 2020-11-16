import EStyleSheet from 'react-native-extended-stylesheet';
import { Typography } from '../utls/typography';
import { Colors } from '../utls/colors';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    borderColor: Colors.gray3,
    borderWidth: 1,
    marginBottom: '1rem',
  },
  eventName: {
    ...Typography.regular('Poppins_500Medium'),
    color: Colors.black,
  },
  roomName: {
    ...Typography.regular('Poppins_500Medium'),
    color: Colors.black,
  },
  requestorName: {
    ...Typography.extraSmall('Poppins_400Regular'),
    color: Colors.gray4,
  },
  isAvailableTag: {
    ...Typography.extraSmall('Poppins_400Regular'),
    color: Colors.gray4,
  },
  availableTime: {
    ...Typography.small('Poppins_500Medium'),
    color: Colors.black,
  },
});
