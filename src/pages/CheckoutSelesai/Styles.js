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
  WARNA_BORDER,
  WARNA_GREEN,
  WARNA_RED,
  WARNA_BLACK,
  WARNA_SILVER,
} from '../../utils/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveHeight(3),
    marginVertical: responsiveWidth(3),
    alignItems: 'center',
  },
  space: {
    // flexDirection: 'row-reverse',
    // marginVertical: responsiveHeight(1),
  },
  iconBell: {
    color: WARNA_UTAMA,
  },
  iconTroll: {
    // marginHorizontal: responsiveHeight(2),
    color: WARNA_UTAMA,
  },
  logo: {
    width: responsiveWidth(21),
    height: responsiveHeight(7),
  },
  boxLinear: {
    marginTop: responsiveHeight(-1),
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    height: responsiveHeight(36),
    // borderWidth: 1
  },
  // box1: {
  //   backgroundColor: WARNA_WHITE,
  //   width: responsiveWidth(87),
  //   height: responsiveHeight(6),
  //   marginTop: responsiveHeight(4),
  //   marginLeft: responsiveHeight(3),
  //   borderRadius: 8,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  textInput: {
    height: 52,
    width: '85%',
    borderColor: '#ccc',
    // borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    // marginBottom: 16,
    color: 'black',
    backgroundColor: WARNA_WHITE,
    alignSelf: 'center',
    // marginVertical: responsiveHeight(2),
    marginHorizontal: responsiveHeight(3),
    marginTop: responsiveHeight(4),
  },
  btnIconSearch: {
    height: 52,
    width: '20%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  },
  iconSearch: {
    color: WARNA_DISABLE,
    marginTop: responsiveHeight(-6.5),
    marginLeft: responsiveHeight(2),
  },

  material: {
    marginVertical: responsiveWidth(-8),
  },
  space2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveHeight(3),
    alignItems: 'center',
    marginVertical: responsiveWidth(3),
    // marginTop: responsiveHeight(3),
  },
  textJudul: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(2.1),
    fontWeight: '700',
  },
  space1: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  textSubJudul: {
    color: WARNA_GRAYTUA,
    fontSize: responsiveFontSize(1.5),
  },
  iconNext: {
    color: WARNA_GRAYTUA,
  },
  card: {
    // height: responsiveHeight(24.7),
    width: responsiveWidth(41),
    // marginHorizontal: responsiveHeight(3),
    marginVertical: responsiveWidth(2),
    marginLeft: responsiveHeight(3),
    borderRadius: 15,
    borderColor: WARNA_SILVER,
    borderWidth: 1,
    // elevation: 13,
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
  spaceImg: {
    height: responsiveHeight(13),
    width: responsiveWidth(40.5),
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 1,
    backgroundColor: WARNA_BORDER,
    borderColor: WARNA_BORDER,
  },
  boxText: {
    marginHorizontal: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
  },
  text: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: '400',
    color: WARNA_BLACK,
    fontWeight: 'bold',
  },
  text1: {
    fontSize: responsiveFontSize(1.4),
    color: WARNA_RED,
    // marginTop: responsiveHeight(0.3),
  },
  boxPrice: {
    marginHorizontal: responsiveHeight(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: responsiveWidth(2),
    marginTop: responsiveHeight(2),
  },
  text2: {
    fontSize: responsiveFontSize(2.1),
    color: WARNA_GRAYTUA,
    fontWeight: '500',
  },
  text3: {
    fontSize: responsiveFontSize(1.9),
    color: WARNA_SEKUNDER,
  },
  boxCard: {
    marginBottom: responsiveHeight(4),
    marginTop: responsiveHeight(1),
  },
  boxBanner: {
    marginHorizontal: responsiveHeight(3),
    borderRadius: 20,
    // marginVertical: responsiveWidth(5),
    borderWidth: 1,
    borderColor: WARNA_WHITE,
  },
  imgs: {
    borderRadius: 20,
    width: responsiveWidth(87),
    height: responsiveHeight(20),
  },
  bgTrans: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: WARNA_SEKUNDER,
    justifyContent: 'center',
    marginTop: responsiveHeight(-7),
    paddingHorizontal: responsiveHeight(2),
    paddingVertical: responsiveWidth(3),
    opacity: 0.8,
    borderTopWidth: 1,
    borderColor: WARNA_BORDER,
  },
  text4: {
    color: WARNA_WHITE,
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
  },
  text5: {
    color: WARNA_WHITE,
    fontSize: responsiveFontSize(1.4),
  },
});

export default styles;