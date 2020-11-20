import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../utils/colors';
import { Typography } from '../../utils/typography';

const styles = EStyleSheet.create({
    img: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end'
    },
    roomname: {
        ...Typography.subtitle1()
    },
    description: {
        ...Typography.extraSmall()
    },
    caption: {
        backgroundColor: 'white',
        padding: 10

    },
    building: {
        marginLeft: 5,
        ...Typography.h6()
    },
    badge: {
        position: 'absolute',
        top: 15,
        left: 15,

    }
});

export default styles