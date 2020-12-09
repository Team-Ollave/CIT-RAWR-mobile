import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../../utils/colors';
import { Typography } from '../../../utils/typography';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    paddingTop: '1.5rem',
    paddingHorizontal: '1.5rem',
  },
  title: {
    ...Typography.screenTitle(),
    marginBottom: '1.5rem',
  },
  tabIndicator: {
    backgroundColor: Colors.black,
    height: 2,
  },
  tab: {
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray2,
  },
  tabLabel: {
    ...Typography.small('Poppins_500Medium'),
    textTransform: 'capitalize',
  },
});
