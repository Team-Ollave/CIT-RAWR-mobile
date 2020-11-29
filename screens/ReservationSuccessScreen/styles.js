import EStyleSheet from 'react-native-extended-stylesheet';
import { Typography } from '../../utils/typography';
import { Colors } from '../../utils/colors';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
export default EStyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    success: {
        ...Typography.title3('Poppins_400Regular'),
        fontSize: '2.6rem',
        textAlign: 'center',
        lineHeight: '3rem',
    },
    image: {
        width: width * .75,
        height: width * .75,
    },
    descriptionContainer: {
        width: width * .9,
        padding: '1rem',
    },
    successDescription: {
        ...Typography.small(),
        textAlign: 'center',
    },
    buttonText: {
        ...Typography.button('Poppins_500Medium'),
        color: Colors.accentColor,
    },
    buttonTextContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.accentColor,
        borderWidth: .5,
        width: width * .8,
        paddingVertical: '.6rem',
    }
})