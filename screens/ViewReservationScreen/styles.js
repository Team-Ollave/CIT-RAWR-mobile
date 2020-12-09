import EStyleSheet from 'react-native-extended-stylesheet';
import { Typography } from '../../utils/typography';
import { Colors } from '../../utils/colors';

export default EStyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '1rem',
    },
    headerText: {
        paddingLeft: 16,
        ...Typography.h6('Poppins_500Medium'),
        color: Colors.black,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '1rem',
        marginBottom: '1.25rem',
    },
    headerTitle: {
        flexDirection: 'row',
    },
    eventName: {
        ...Typography.screenTitle(),
        marginBottom: '1rem',
        letterSpacing: 0.5,
        color: Colors.black,
    },
    detailText: {
        ...Typography.regular(),
        color: Colors.gray4,
        paddingLeft: 8,
    },
    details: {
        flexDirection: 'row',
        marginBottom: '0.5rem',
    },
    description: {
        ...Typography.regular(),
        color: Colors.black,
        paddingTop: 4,
    },
});