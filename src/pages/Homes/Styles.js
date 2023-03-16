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
  header: {
    marginTop: responsiveHeight(0.5),
    marginBottom: responsiveHeight(2),
  },
  iconBell: {
    color: WARNA_UTAMA,
    marginTop: responsiveHeight(3),
    marginLeft: responsiveHeight(52),
  },
  iconTroll: {
    color: WARNA_UTAMA,
    marginTop: responsiveHeight(-3.6),
    marginLeft: responsiveHeight(44),
  },
  logo: {
    width: responsiveWidth(21),
    height: responsiveHeight(10),
    marginLeft: responsiveHeight(2.8),
    marginTop: responsiveHeight(-6),
  },
  boxLinear: {
    marginTop: responsiveHeight(-1),
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    height: responsiveHeight(43),
  },
});

export default styles;
