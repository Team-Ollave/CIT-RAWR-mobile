import EStyleSheet from 'react-native-extended-stylesheet';
import { Typography } from '../../utils/typography';
import { Colors } from '../../utils/colors';

export default EStyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  images: {
    flex: 1,
    maxHeight: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    opacity: 0.3,
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: '1.5rem',
  },
  header: {
    paddingBottom: '1rem',
    paddingTop: '1.5rem',
    width: '100%',
  },
  headerTitle: {
    ...Typography.title3(),
    color: Colors.black,
  },
  headerDescription: {
    ...Typography.small(),
    color: Colors.gray4,
  },
  tab: {
    elevation: 0,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray2,
  },
  tabLabel: {
    ...Typography.small('Poppins_500Medium'),
    textTransform: 'capitalize',
  },
  tabIndicator: {
    backgroundColor: Colors.accentColor,
    height: 2,
  },
  listTitle: {
    ...Typography.small('Poppins_600SemiBold'),
    marginTop: '1.25rem',
    marginBottom: '0.5rem',
  },
  reservationSeparator: {
    height: '0.5rem',
  },
  'reservationCard:last-child': {
    marginBottom: '0.5rem',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: Colors.gray1,
    borderTopWidth: 1,
    paddingHorizontal: '1.5rem',
    paddingVertical: '1rem',
  },
  availabilityLabel: {
    ...Typography.caption(),
    color: Colors.gray4,
  },
  availabilityDate: {
    ...Typography.small('Poppins_500Medium'),
  },
  reserveButton: {
    paddingHorizontal: '1.5rem',
    paddingVertical: '0.5rem',
    borderRadius: '0.5rem',
    backgroundColor: Colors.accentColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reserveButtonTitle: {
    ...Typography.subtitle1('Poppins_500Medium'),
    color: 'white',
  },
  accordionSeparator: {
    height: '0.5rem',
  },
});
