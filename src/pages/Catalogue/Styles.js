import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  WARNA_DISABLE,
  WARNA_UTAMA,
  WARNA_SEKUNDER,
  WARNA_WHITE,
} from '../../utils/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  stack: {
    backgroundColor: WARNA_WHITE,
    padding: 10,
    marginTop: '20%',
    width: '50%',
    alignSelf: 'center',
    borderRadius: 10,
  },
});

export default styles;
