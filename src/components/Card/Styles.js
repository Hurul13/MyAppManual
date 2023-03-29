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
  WARNA_GRAYTUA,
} from '../../utils/constant';

const styles = StyleSheet.create({
  card: {
    height: responsiveHeight(24),
    width: responsiveWidth(41),
    marginLeft: responsiveHeight(3),
    marginTop: responsiveHeight(4.5),
    marginBottom: responsiveHeight(4),
    borderRadius: 15,
    borderColor: WARNA_UTAMA,
    borderWidth: 1,
    elevation: 13,
    backgroundColor: WARNA_WHITE,
  },
  addToCartBtn: {
    height: responsiveHeight(3.5),
    width: responsiveWidth(7.4),
    borderRadius: 20,
    backgroundColor: WARNA_UTAMA,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImg: {
    alignItems: 'center',
    top: responsiveHeight(-4.5),
  },
  img: {
    height: responsiveHeight(13),
    width: responsiveWidth(26.5),
    borderRadius: 110 / 2,
    borderColor: WARNA_UTAMA,
    borderWidth: 2,
  },
  boxText: {
    marginLeft: responsiveHeight(2.4),
  },
  text: {
    marginTop: responsiveHeight(-2),
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    color: WARNA_SEKUNDER,
  },
  text1: {
    fontSize: responsiveFontSize(1.7),
    color: WARNA_GRAYTUA,
    marginTop: responsiveHeight(0.3),
  },
  boxPrice: {
    marginTop: responsiveHeight(1.5),
    marginHorizontal: responsiveHeight(2.3),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text2: {
    fontSize: responsiveFontSize(2.2),
    color: WARNA_SEKUNDER,
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
    marginTop: responsiveHeight(0.3),
  },
  iconStar: {
    // marginLeft: responsiveHeight(4),
    color: WARNA_UTAMA,
  },
  text3: {
    fontSize: responsiveFontSize(1.9),
    // marginTop: responsiveHeight(-0.1),
    marginLeft: responsiveHeight(0.5),
    color: WARNA_SEKUNDER,
  },
  boxCard: {
    marginBottom: responsiveHeight(2),
  },
});

export default styles;
