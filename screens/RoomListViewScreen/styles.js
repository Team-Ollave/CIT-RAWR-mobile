import { StyleSheet } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../utils/colors';
import { Typography } from '../../utils/typography';

const styles = EStyleSheet.create({
    img: {
        backgroundColor: Colors.gray4,
        flex: 3
    },
    roomname: {
        ...Typography.subtitle1()
    },
    description: {
        ...Typography.extraSmall()
    },
    caption: {
        flex: 1,
        padding: 10,
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