import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../utils/colors';
import { Typography } from '../../utils/typography';

let { width, height } = Dimensions.get('screen');
const alwaysOpenHeight = height * 0.12;
const modalHeight = height * 0.7;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  modal: {
    padding: 10,
  },
  modalStyle: {
    paddingHorizontal: '1.5 rem',
  },
  header: {
    paddingBottom: '.1 rem',
    paddingTop: '1.5 rem',
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
  tabIndicator: {
    backgroundColor: Colors.accentColor,
    height: 2,
  },
  tabLabel: {
    ...Typography.small('Poppins_500Medium'),
    textTransform: 'capitalize',
  },
  tab: {
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray2,
  },

  listTitle: {
    ...Typography.small('Poppins_600SemiBold'),
    marginBottom: '0.5rem',
  },
  mapPlaceholder: {
    width: width,
    height: height,
  },
  backButtonContainer: {
    position: 'absolute',
    top: StatusBar.currentHeight ? StatusBar.currentHeight + 16 : '1rem',
    left: '1rem',
    padding: '.5rem',
    borderRadius: 999,
    backgroundColor: 'white',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  reservationSeparator: {
    height: '0.5rem',
  },
  headerHeight: {
    height: '1rem',
  }
});

export { styles, alwaysOpenHeight, modalHeight, width, height };
