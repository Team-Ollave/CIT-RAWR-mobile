import EStyleSheet from 'react-native-extended-stylesheet';
import { Typography } from '../utils/typography';
import { Colors } from '../utils/colors';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    borderColor: Colors.gray3,
    borderWidth: 1,
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
  badge: {
    paddingVertical: '0.125rem',
    paddingHorizontal: '0.75rem',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
  },
  badgeLabel: {
    ...Typography.extraSmall('Poppins_500Medium'),
    color: 'white',
  },
});
