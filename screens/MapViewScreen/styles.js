import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../utls/colors';
import { Typography } from '../../utls/typography';

const { width, height } = Dimensions.get('window');
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
        backgroundColor: '#333',
        opacity: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabContainer: {
        flex: 1,
        paddingTop: '1.25 rem',
        backgroundColor: 'white',
    },
    modal: {
        padding: 10,
    },
    modalStyle: {
        paddingHorizontal: '1.5 rem',
    },
    header: {
        paddingBottom: '.1 rem',
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
    indicatorStyle: {
        backgroundColor: Colors.accentColor,
        height: 1,
    },
    labelStyle: {
        ...Typography.small('Poppins_400Regular'),
        textTransform: 'capitalize',
        color: Colors.black,
    },
    tab: {
        flex: 1,
        elevation: 0,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray2,
    },

    listTitle: {
        ...Typography.small('Poppins_600SemiBold'),
        marginBottom: '0.5rem',
    },

});

export { styles, alwaysOpenHeight, modalHeight, width, height };