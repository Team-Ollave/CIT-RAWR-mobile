import EStyleSheet from 'react-native-extended-stylesheet';
import { Typography } from '../../utils/typography';
import { Colors } from '../../utils/colors';
import { StatusBar } from 'react-native';

export default EStyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    width: '100%',
    backgroundColor: '#ffffff',
  },
  mainContent: {
    paddingHorizontal: '1.5rem',
    height: '82%',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: '1.5rem',
    marginTop: '1rem',
    marginBottom: '1.25rem',
  },
  backButtonContainer: {
    paddingRight: '1rem',
  },
  textInput: {
    ...Typography.body2('Poppins_400Regular'),
    color: Colors.black,
    paddingHorizontal: '1rem',
    borderRadius: '0.5rem',
    borderColor: Colors.gray4,
    borderWidth: 1,
    textAlignVertical: 'top',
    paddingTop: '0.5rem',
  },
  eventName: {
    marginBottom: '1.25rem',
  },
  eventNameTextInput: {},
  eventDescription: {
    textAlignVertical: 'top',
    marginBottom: '1.25rem',
  },
  eventDescriptionTextInput: {
    minHeight: 100,
    paddingBottom: '0.5rem',
  },
  dateTime: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '1.25rem',
    width: '100%',
  },
  dateTimeContainer: {
    flexGrow: 1,
  },
  dateTimePickerInput: {
    paddingHorizontal: '1rem',
    paddingVertical: '0.5rem',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '1rem',
    borderRadius: '0.5rem',
    borderColor: Colors.gray4,
    borderWidth: 1,
    textAlignVertical: 'top',

  },
  datePickerInput: {
    marginBottom: '1.5rem',
  },
  dateTimeText: {
    ...Typography.body2('Poppins_400Regular'),
    color: Colors.black,
  },
  footer: {
    height: 72,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.gray2,
  },
  footerContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    flex: 1,
    height: '100%',
    width: '100%',
  },
  reserveButtonContainer: {
    backgroundColor: Colors.accentColor,
    borderRadius: 8,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reserveButtonText: {
    ...Typography.button('Poppins_500Medium'),
    color: '#ffffff',
  },
  headerText: {
    paddingLeft: 16,
    ...Typography.h6('Poppins_500Medium'),
    color: Colors.black,
  },
  eventHeaderText: {
    ...Typography.subtitle1('Poppins_400Regular'),
    color: Colors.black,
    paddingBottom: '0.25rem',
  },
  eventRemarksText: {
    ...Typography.body2('Poppins_400Regular'),
    color: Colors.gray4,
    fontStyle: 'italic',
  },
  dateTimeText: {
    ...Typography.body2('Poppins_400Regular'),
    color: Colors.black,
  },
  errorMessage: {
    color: 'red',
    marginTop: '.5rem',
    fontStyle: 'italic',
  }
});
