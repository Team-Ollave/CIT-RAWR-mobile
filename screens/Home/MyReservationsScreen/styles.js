import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../../utils/colors';
import { Typography } from '../../../utils/typography';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  title: {
    ...Typography.screenTitle(),
    marginLeft: '1.5rem',
    marginTop: '1.5rem',
    marginBottom: '1rem',
  },
  tabIndicator: {
    backgroundColor: Colors.black,
    height: 2,
  },
  tab: {
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray2,
    marginHorizontal: '1.5rem',
  },
  tabLabel: {
    ...Typography.small('Poppins_500Medium'),
    textTransform: 'capitalize',
  },
});
