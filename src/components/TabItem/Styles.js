import {Dimensions, StyleSheet} from 'react-native';
import {WARNA_DISABLE, WARNA_SEKUNDER, WARNA_UTAMA} from '../../utils/constant';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    resizeMode: 'cover',
    // borderTopLeftRadius: 34,
    // borderTopRightRadius: 34,
  },
  textBottom: isFocused => ({
    fontSize: 13,
    color: isFocused ? WARNA_UTAMA : WARNA_SEKUNDER,
    marginTop: 5,
  }),
});

export default styles;
