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
  check: {
    marginLeft: responsiveWidth(7),
    marginTop: responsiveHeight(1.1),
  },
});

export default styles;
