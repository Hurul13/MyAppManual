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
  cart: {
    flexDirection: 'row',
  },
  textSubJudul: {
    marginTop: responsiveHeight(-11.5),
    marginLeft: responsiveHeight(2.8),
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
  },
  textSub: {
    marginTop: responsiveHeight(-11),
    marginLeft: responsiveHeight(18),
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
    color: WARNA_DISABLE,
  },
  boxCart: {
    backgroundColor: 'transparent',
    // marginBottom: responsiveHeight(5),
    marginTop: responsiveHeight(-3.5),
    marginLeft: responsiveHeight(-53.2),
    height: responsiveHeight(28),
    width: responsiveWidth(36),
    borderRadius: 8,
    borderWidth: 3,
    borderColor: WARNA_UTAMA,
  },
  boxGambar: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: responsiveHeight(-0.6),
    marginBottom: responsiveHeight(1.5),
    height: responsiveHeight(20),
    width: responsiveWidth(36),
    borderRadius: 8,
    // borderWidth: 3,
    borderColor: WARNA_UTAMA,
  },
  img: {
    marginTop: responsiveHeight(-0.6),
    marginBottom: responsiveHeight(1.5),

    height: responsiveHeight(20),
    width: responsiveWidth(36),
    borderRadius: 8,
  },
  textName: {
    marginTop: responsiveHeight(-1),
    marginLeft: responsiveHeight(2),
    fontSize: responsiveFontSize(1.8),
  },
  textHarga: {
    marginLeft: responsiveHeight(2),
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.8),
  },
});

export default styles;
