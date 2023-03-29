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
  all: {
    backgroundColor: WARNA_UTAMA,
  },
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    marginTop: responsiveHeight(5.4),
    marginBottom: responsiveHeight(2),
  },
  iconBack: {
    color: WARNA_SEKUNDER,
    marginTop: responsiveHeight(-3.0),
    marginLeft: responsiveHeight(3),
  },
  judulBar: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(2.4),
    fontWeight: 'bold',
    marginTop: responsiveHeight(-2.8),
    marginLeft: responsiveHeight(8),
  },
  box: {
    backgroundColor: WARNA_WHITE,
    marginTop: responsiveHeight(2),
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    height: responsiveHeight(90.5),
  },
  text1: {
    color: WARNA_SEKUNDER,
    marginTop: responsiveHeight(4),
    marginLeft: responsiveHeight(3),
    fontSize: responsiveFontSize(2.2),
  },
  box2: {
    width: responsiveWidth(88),
    height: responsiveHeight(8),
    marginTop: responsiveHeight(3),
    marginLeft: responsiveHeight(3),
    // marginBottom: responsiveHeight(-1.5),
    backgroundColor: WARNA_WHITE,
    // borderRadius: 18,
    borderColor: WARNA_SEKUNDER,
    borderBottomWidth: 1,
  },
  box3: {
    width: responsiveWidth(11),
    height: responsiveHeight(4.7),
    marginTop: responsiveHeight(1.5),
    borderRadius: 8,
    borderColor: WARNA_SEKUNDER,
    borderWidth: 1,
  },
  iconMap: {
    color: WARNA_SEKUNDER,
    marginTop: responsiveHeight(0.6),
    marginLeft: responsiveHeight(1.1),
  },
  text2: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(1.6),
    marginLeft: responsiveHeight(7),
    marginTop: responsiveHeight(-3.6),
  },
  profilTelpon: {
    marginTop: responsiveHeight(-2),
  },
});

export default styles;
