import {StyleSheet, Dimensions} from 'react-native';
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
} from '../../utils/constant';
const {width: SCREENWIDTH} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: responsiveHeight(20),
    backgroundColor: WARNA_WHITE,
  },
  wrap: {
    width: responsiveWidth(100),
    height: responsiveHeight(39),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapDot: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    fontSize: responsiveFontSize(4),
    marginTop: responsiveHeight(35),
  },
  dotActive: {
    margin: 3,
    color: WARNA_UTAMA,
  },
  dot: {
    margin: 3,
    color: WARNA_WHITE,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveHeight(3),
    marginTop: responsiveHeight(-35),
  },
  bulat: {
    width: responsiveWidth(10),
    height: responsiveHeight(4.7),
    borderRadius: 100 / 2,
    backgroundColor: WARNA_SEKUNDER,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  icon: {
    color: WARNA_WHITE,
  },
  box: {
    backgroundColor: WARNA_WHITE,
    marginTop: responsiveHeight(30),
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderColor: WARNA_UTAMA,
    borderWidth: 1,
    elevation: 13,
    height: responsiveHeight(60),
  },
  space: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveHeight(3),
    marginTop: responsiveHeight(34),
  },
  text: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(2.4),
    fontWeight: 'bold',
  },
  iconLike: {
    color: WARNA_SEKUNDER,
  },
  text1: {
    color: WARNA_GRAYTUA,
    fontSize: responsiveFontSize(1.8),
    marginHorizontal: responsiveHeight(3),
  },
  space1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveHeight(3),
    alignItems: 'center',
    marginTop: responsiveHeight(2),
  },
  actionBtn: {
    width: responsiveWidth(30),
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: WARNA_SEKUNDER,
    paddingHorizontal: responsiveHeight(1),
    paddingVertical: responsiveWidth(1),
    elevation: 7,
  },
  iconMin: {
    color: WARNA_GRAYTUA,
  },
  iconPlus: {
    color: WARNA_UTAMA,
  },
  text2: {
    color: WARNA_WHITE,
    fontSize: responsiveFontSize(2.2),
    paddingHorizontal: responsiveHeight(2.1),
    paddingVertical: responsiveWidth(2.3),
    borderRadius: 17,
    // borderWidth: 1,
    borderColor: WARNA_BORDER,
  },
  text3: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
  },
  line: {
    justifyContent: 'space-between',
    marginHorizontal: responsiveHeight(3),
    marginTop: responsiveHeight(3),
    borderColor: WARNA_BORDER,
    // borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  box1: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginVertical: responsiveWidth(5),
    backgroundColor: WARNA_WHITE,
    borderRadius: 10,
    elevation: 10,
    // borderWidth: 1,
  },
  bgShop: {
    backgroundColor: WARNA_SEKUNDER,
    height: responsiveHeight(6),
    width: responsiveWidth(12.5),
    borderRadius: 100 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: responsiveWidth(3),
    marginLeft: responsiveHeight(1.5),
  },
  imgShop: {
    height: responsiveHeight(3),
    width: responsiveWidth(8),
  },
  box2: {
    marginHorizontal: responsiveHeight(2),
    marginVertical: responsiveWidth(3.5),
    // alignItems: 'center',
  },
  text4: {
    color: WARNA_SEKUNDER,
    fontWeight: '600',
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(0.8),
  },
  kota: {
    flexDirection: 'row',
    marginRight: responsiveHeight(1),
    color: WARNA_SEKUNDER,
    // alignItems: 'center',
  },
  textKota: {
    color: WARNA_GRAYTUA,
    marginLeft: responsiveHeight(0.5),
  },
  iconMap: {
    color: WARNA_DISABLE,
  },
  text6: {
    color: WARNA_SEKUNDER,
    marginTop: responsiveHeight(0.5),
  },
  boxAllDecs: {
    paddingVertical: responsiveWidth(4),
    borderTopColor: WARNA_BORDER,
    borderTopWidth: 1,
    marginHorizontal: responsiveHeight(3),
  },
  boxDecs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  iconRight: {
    color: WARNA_SEKUNDER,
    paddingHorizontal: responsiveHeight(0.5),
    paddingVertical: responsiveWidth(0.6),
    borderRadius: 17,
    // borderWidth: 1,
    borderColor: WARNA_BORDER,
    // marginLeft: responsiveHeight(2),
  },
  decsName: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(2.1),
    fontWeight: '700',
  },
  review: {
    flexDirection: 'row',
    marginLeft: responsiveHeight(22),
  },
  iconStar: {
    color: WARNA_UTAMA,
  },
  iconRightRev: {
    color: WARNA_SEKUNDER,
  },

  boxBtn: {
    flexDirection: 'row',
    paddingVertical: responsiveWidth(4),
    // marginVertical: responsiveWidth(2),
    marginHorizontal: responsiveHeight(3),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WARNA_SEKUNDER,
    // elevation: 7,
    // shadowColor: 4,
    borderRadius: 100 / 2,
    marginVertical: responsiveHeight(1),
    marginBottom: responsiveHeight(3.5),
    // borderWidth: 1,
  },
  text5: {
    fontSize: responsiveFontSize(2.2),
    color: WARNA_WHITE,
    fontWeight: 'bold',
  },
  iconCard: {
    color: WARNA_WHITE,
    // marginLeft: responsiveHeight(1),
    paddingHorizontal: responsiveHeight(0.8),
  },
});

export default styles;
