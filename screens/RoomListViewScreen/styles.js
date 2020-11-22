import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../utils/colors';
import { Typography } from '../../utils/typography';

const styles = EStyleSheet.create({
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
  mainContent: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    paddingTop: 50,
  },

  ExploreMapActionButtonShadow: {
    borderRadius: 100 / 2,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,

    alignSelf: 'center',
    marginBottom: 10,
  },
  ExploreMapActionButtonContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 100 / 2,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    
  },
});

export default styles;
