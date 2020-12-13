import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    flex: 1,
    maxWidth: '70%',

    backgroundColor: 'white',
    borderColor: Colors.gray1,
    borderWidth: 1,
    borderRadius: 999,

    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    fontSize: 16,
    letterSpacing: 0.4,
    fontFamily: 'Poppins_400Regular',
    maxWidth: '95%',
    flexGrow: 1,
    marginLeft: 8,
  },
});
