import {Dimensions, StyleSheet} from 'react-native';
import {
  WARNA_DISABLE,
  WARNA_SEKUNDER,
  WARNA_UTAMA,
  WARNA_WHITE,
} from '../../utils/constant';

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
  view: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WARNA_WHITE,
    borderColor: WARNA_UTAMA,
    borderWidth: 2,
    top: -25,
    // elevation: 5,
    borderRadius: 50,
  },
});

export default styles;
