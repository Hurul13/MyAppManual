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
    height: responsiveHeight(350),
  },
  text: {
    color: WARNA_SEKUNDER,
    marginTop: responsiveHeight(4),
    marginLeft: responsiveHeight(3),
    fontSize: responsiveFontSize(2.1),
    fontWeight: 'bold',
  },
  text1: {
    color: WARNA_SEKUNDER,
    marginTop: responsiveHeight(1),
    marginLeft: responsiveHeight(3),
    fontSize: responsiveFontSize(2.1),
    fontWeight: 'bold',
  },
  text2: {
    color: WARNA_SEKUNDER,
    marginTop: responsiveHeight(0.5),
    marginLeft: responsiveHeight(3),
    fontSize: responsiveFontSize(1.8),
    marginRight: responsiveHeight(2.5),
  },
});

export default styles;
