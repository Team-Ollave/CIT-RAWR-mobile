import EStyleSheet from 'react-native-extended-stylesheet';
import { Typography } from '../../utils/typography';
import { Colors } from '../../utils/colors';
import Constants from 'expo-constants';

export default EStyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '1rem',
    paddingTop: Constants.statusBarHeight,
  },
  headerText: {
    paddingLeft: 16,
    ...Typography.h6('Poppins_500Medium'),
    color: Colors.black,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '1rem',
    marginBottom: '1.25rem',
  },
  headerTitle: {
    flexDirection: 'row',
  },
  eventName: {
    ...Typography.screenTitle(),
    marginBottom: '0.75rem',
    color: Colors.black,
  },
  detailText: {
    ...Typography.small(),
    color: Colors.gray4,
    paddingLeft: 8,
  },
  details: {
    flexDirection: 'row',
    marginBottom: '0.5rem',
  },
  description: {
    ...Typography.regular('Poppins_400Regular'),
    color: Colors.black,
    paddingTop: 4,
  },
});
