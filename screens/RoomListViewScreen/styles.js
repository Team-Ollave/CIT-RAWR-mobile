import { StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../utils/colors';
import { Typography } from '../../utils/typography';

const styles = EStyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight + 16,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  roomname: {
    ...Typography.subtitle1(),
  },
  description: {
    ...Typography.extraSmall(),
  },
  caption: {
    backgroundColor: 'white',
    padding: 10,
  },
  building: {
    marginLeft: 5,
    ...Typography.h6(),
  },
  badge: {
    position: 'absolute',
    top: 15,
    left: 15,
  },
  section: {
    margin: 10,
  },
  // mainContent: {
  //   position: 'absolute',
  //   top: 0,
  //   bottom: 0,
  //   paddingTop: 50,
  // },

  ExploreMapActionButtonShadow: {
    borderRadius: 999,
    elevation: 5,
    alignSelf: 'center',
  },
  ExploreMapActionButtonContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '1rem',
    paddingVertical: '0.5rem',
  },
  exploreLabel: {
    ...Typography.small('Poppins_500Medium'),
    marginLeft: '0.2rem',
  },
});

export default styles;
