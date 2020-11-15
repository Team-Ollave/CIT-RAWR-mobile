import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';
import { Colors } from '../../utls/colors';
import { Typography } from '../../utls/typography';

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: StatusBar.currentHeight,
    }
});

export { styles };