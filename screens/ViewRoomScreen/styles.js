import EStyleSheet from 'react-native-extended-stylesheet';
import { Typography } from '../../utls/typography';
import { Colors } from '../../utls/colors';

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
  tabsContainer: {
    width: '100%',
    flexDirection: 'row',
    color: 'blue',
    borderBottomColor: Colors.gray2,
    borderBottomWidth: 1,
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.accentColor,
  },
  mainContent: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'flex-start',
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: '0.5rem',
  },
  tabLabel: {
    ...Typography.small('Poppins_400Regular'),
    color: Colors.black,
  },
  tabLabelActive: {
    ...Typography.small('Poppins_500Medium'),
    color: Colors.accentColor,
  },
  tabContent: {
    flex: 1,
  },
  listTitle: {
    ...Typography.small('Poppins_600SemiBold'),
    marginBottom: '0.5rem',
  },
  reservationSeparator: {
    marginBottom: '1rem',
  },
  reservationList: {
    paddingTop: '1.25rem',
  },
  'reservationCard:last-child': {
    marginBottom: '1rem',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: Colors.gray1,
    borderTopWidth: 1,
    paddingHorizontal: '1.5rem',
    paddingVertical: '1rem',
  },
  availabilityText: {
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
});
