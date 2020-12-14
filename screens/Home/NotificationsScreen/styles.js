import { Typography } from '../../../utils/typography';
import { Colors } from '../../../utils/colors';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: '1rem',
    },
    headerText: {
        ...Typography.screenTitle(),
        color: Colors.black,

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '1rem',
        paddingBottom: '1.25rem',
        borderBottomColor: Colors.gray1,
        borderBottomWidth: 1,
    },
});