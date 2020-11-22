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
  eventNameTextInput: {
    height: 40,
  },
  eventDescription: {
    textAlignVertical: 'top',
    marginBottom: '1.25rem',
  },
  eventDescriptionTextInput: {
    height: 180,
    paddingBottom: 5,
  },
  dateTime: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '1.25rem',
  },
  dateTimeContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
  },
  dateTimePickerInput: {
    height: 40,
    width: 144,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '1rem',
    borderRadius: '0.5rem',
    borderColor: Colors.gray4,
    borderWidth: 1,
    textAlignVertical: 'top',
  },
  dateTimeText: {
    ...Typography.body2('Poppins_400Regular'),
    color: Colors.black,
  },
  footer: {
    height: 72,
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
});
