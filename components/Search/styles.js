import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/colors';

export default StyleSheet.create({
  container: {
    margin: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,

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
    width: '95%',
    marginLeft: 8,
  },
});
