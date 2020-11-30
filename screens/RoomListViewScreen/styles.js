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
  roomname: {
    ...Typography.large('Poppins_500Medium'),
  },
  description: {
    ...Typography.extraSmall(),
  },
  caption: {
    flex: 1,
    backgroundColor: 'white',
    padding: '0.625rem',
  },
  building: {
    marginBottom: '0.5rem',
    ...Typography.h6(),
  },
  searchInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInputSearchIcon: {
    marginRight: '0.5rem',
  },
  searchInputTextInput: {
    fontSize: '1rem',
    letterSpacing: 0.4,
    fontFamily: 'Poppins_400Regular',
    width: '70%',
  },
  searchInputTextInputContainer: {
    borderRadius: 999,
    backgroundColor: 'white',

    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

    paddingHorizontal: '1rem',
    paddingVertical: '0.5rem',
    marginRight: '0.75rem',
    borderWidth: 1,
    borderColor: Colors.gray1,
    elevation: 1,
  },
  searchInputPadding: {
    // paddingBottom: '0.375rem,',
    paddingHorizontal: '1rem',
  },
  exploreContainer: {
    zIndex: 1,
    position: 'absolute',
    bottom: '2rem',
  },
  exploreMapActionButtonContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: '0.75rem',
    paddingVertical: '0.5rem',
    borderColor: Colors.gray1,
    borderWidth: 1,
    elevation: 1,
  },
  exploreLabel: {
    ...Typography.small('Poppins_500Medium'),
    marginLeft: '0.2rem',
  },
  featuredBadge: {
    position: 'absolute',
    top: '0.75rem',
    left: '0.75rem',
  },
  cardContentImageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  cardContentContainer: {
    flex: 1,
  },
  cardContentImageContainer: {
    flex: 3,
  },
  cardContainer: {
    height: '13.438rem',
    width: '14.688rem',
    borderRadius: '0.5rem',
    backgroundColor: 'white',
    overflow: 'hidden',
    elevation: 2,
  },
  voiceIconContainer: {
    padding: '0.625rem',
    borderRadius: 999,
    elevation: 5,
    backgroundColor: 'white',
  },
  flatListMarginTop: {
    marginTop: '1rem',
  },
});

export default styles;
