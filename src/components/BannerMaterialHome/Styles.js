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
    flexDirection: 'row',
    marginTop: responsiveHeight(28),
    // backgroundColor: WARNA_WHITE,
  },
  box: {
    width: responsiveWidth(42),
    height: responsiveHeight(26),
    backgroundColor: WARNA_WHITE,
    color: WARNA_SEKUNDER,
    borderWidth: 1,
    borderColor: WARNA_UTAMA,
    borderRadius: 8,
    marginLeft: responsiveWidth(6),
    marginTop: responsiveHeight(-27),
    marginBottom: responsiveHeight(2),
    // fontSize: responsiveFontSize(1.8),
  },
  img: {
    width: responsiveWidth(41.5),
    height: responsiveHeight(15),
    marginLeft: responsiveWidth(0.1),
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  text: {
    color: WARNA_SEKUNDER,
    marginLeft: responsiveWidth(3),
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(1),
  },
  text1: {
    color: WARNA_SEKUNDER,
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(0.3),
    fontSize: responsiveFontSize(2.4),
    fontWeight: 'bold',
  },
  iconMap: {
    color: WARNA_DISABLE,
    marginTop: responsiveHeight(0.6),
    marginLeft: responsiveHeight(1),
  },
  text2: {
    color: WARNA_SEKUNDER,
    marginTop: responsiveHeight(-2),
    marginLeft: responsiveWidth(8),
    fontSize: responsiveFontSize(1.3),
  },
  line: {
    width: responsiveWidth(0),
    height: responsiveHeight(2.3),
    color: WARNA_DISABLE,
    borderColor: WARNA_DISABLE,
    borderWidth: 1,
    marginLeft: responsiveWidth(25.9),
    marginTop: responsiveHeight(-1.8),
  },
  iconStar: {
    color: WARNA_UTAMA,
    marginTop: responsiveHeight(-2.4),
    marginLeft: responsiveHeight(13.7),
  },
  text3: {
    color: WARNA_SEKUNDER,
    marginTop: responsiveHeight(-1.9),
    marginLeft: responsiveWidth(33.3),
    fontSize: responsiveFontSize(1.6),
  },
  box1: {
    width: responsiveWidth(39),
    height: responsiveHeight(26),
    color: WARNA_SEKUNDER,
    borderWidth: 1,
    borderColor: WARNA_UTAMA,
    borderRadius: 8,
    marginLeft: responsiveWidth(9),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(2),
    // fontSize: responsiveFontSize(1.8),
  },
  material1: {
    marginTop: responsiveHeight(-12),
  },
});

export default styles;
