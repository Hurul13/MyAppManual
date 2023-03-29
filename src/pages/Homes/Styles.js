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
    marginTop: responsiveHeight(2),
    marginLeft: responsiveHeight(43),
  },
  iconTroll: {
    color: WARNA_UTAMA,
    marginTop: responsiveHeight(-3.0),
    marginLeft: responsiveHeight(38),
  },
  logo: {
    width: responsiveWidth(21),
    height: responsiveHeight(7),
    marginLeft: responsiveHeight(2.8),
    marginTop: responsiveHeight(-4),
  },
  boxLinear: {
    marginTop: responsiveHeight(-1),
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    height: responsiveHeight(48),
  },
  box1: {
    backgroundColor: WARNA_SEKUNDER,
    width: responsiveWidth(87),
    height: responsiveHeight(6),
    marginTop: responsiveHeight(4),
    marginLeft: responsiveHeight(3),
    borderRadius: 50 / 2,
  },
  textInput: {
    width: responsiveWidth(70),
    height: responsiveHeight(6),
    color: WARNA_WHITE,
    borderWidth: 1,
    borderColor: WARNA_SEKUNDER,
    marginLeft: responsiveWidth(12),
    marginTop: responsiveHeight(0, 5),
    marginBottom: responsiveHeight(2),
    fontSize: responsiveFontSize(1.8),
  },
  iconSearch: {
    color: WARNA_DISABLE,
    marginTop: responsiveHeight(-6.5),
    marginLeft: responsiveHeight(2),
  },
  material1: {
    marginTop: responsiveHeight(-2),
  },
  textJudul: {
    color: WARNA_SEKUNDER,
    marginTop: responsiveHeight(3),
    marginLeft: responsiveHeight(3),
    fontSize: responsiveFontSize(2.2),
  },
  textSubJudul: {
    color: WARNA_GRAYTUA,
    marginTop: responsiveHeight(-2.4),
    marginLeft: responsiveHeight(35.4),
    fontSize: responsiveFontSize(1.7),
  },
  iconNext: {
    color: WARNA_GRAYTUA,
    marginTop: responsiveHeight(-2),
    marginLeft: responsiveHeight(44),
  },
  card: {
    height: responsiveHeight(27),
    width: responsiveWidth(41),
    marginLeft: responsiveHeight(3),
    marginTop: responsiveHeight(1),
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

  img: {
    height: responsiveHeight(13),
    width: responsiveWidth(40.5),

    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 1,
  },
  boxText: {
    marginTop: responsiveHeight(3.5),
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
    marginTop: responsiveHeight(1),
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
    color: WARNA_UTAMA,
  },
  text3: {
    fontSize: responsiveFontSize(1.9),
    marginLeft: responsiveHeight(0.5),
    color: WARNA_SEKUNDER,
  },
  boxCard: {
    marginBottom: responsiveHeight(2),
    marginTop: responsiveHeight(1),
  },
});

export default styles;
