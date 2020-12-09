import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Colors } from '../../utils/colors';

export default StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: 'white',
  },
  barStyle: {
    backgroundColor: 'white',
    elevation: 10,
    borderTopColor: Colors.gray0,
    borderTopWidth: 1,
  },
});
