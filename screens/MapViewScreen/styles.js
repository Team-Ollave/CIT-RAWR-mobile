import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../utils/colors';
import { Typography } from '../../utils/typography';

let { width, height } = Dimensions.get('screen');
const alwaysOpenHeight = height * 0.14;
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
  modal: {
    padding: 10,
  },
  modalStyle: {
    paddingHorizontal: '1.5 rem',
  },
  header: {
    paddingBottom: '1 rem',
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
  listTitle: {
    ...Typography.small('Poppins_600SemiBold'),
    marginTop: '1.25rem',
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
    height: '1 rem',
  },
  headerHeight: {
    height: '1rem',
  },
  overlayStyle: {
    backgroundColor: 'transparent',
  },
  tabNavInitialLayout: {
    width: width
  },
  handleStyle: {
    backgroundColor: Colors.gray2,
  },
  modalFooter: {
    height: '1.5rem',
    opacity: 0.1,
  }
});

export { styles, alwaysOpenHeight, modalHeight, height };
