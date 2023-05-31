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
  WARNA_BLACK,
  WARNA_RED,
} from '../../utils/constant';
const {width: SCREENWIDTH} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: responsiveHeight(20),
    // backgroundColor: WARNA_BLACK,
    backgroundColor: WARNA_WHITE,
  },
  spaceWrap: {
    width: responsiveWidth(100),
    height: responsiveHeight(39),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: WARNA_BORDER,
    borderColor: WARNA_BORDER,
  },
  spaceWrapImg: {
    width: responsiveWidth(100),
    height: responsiveHeight(39),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
    backgroundColor: WARNA_BLACK,
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
    color: WARNA_BLACK,
    fontSize: responsiveFontSize(2.6),
    fontWeight: '600',
    // textAlign: 'center',
  },
  iconLike: {
    color: WARNA_SEKUNDER,
  },
  text1: {
    // color: warna,
    // fontSize: responsiveFontSize(1.8),
    marginHorizontal: responsiveHeight(3),
  },
  space1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: responsiveHeight(2),
  },

  text3: {
    color: WARNA_BLACK,
    fontSize: responsiveFontSize(3),
    paddingTop: responsiveHeight(1),
    fontWeight: '800',
  },
  text4: {
    color: WARNA_BORDER,
    fontSize: responsiveFontSize(2),
    paddingTop: responsiveHeight(1),
    fontWeight: '600',
    textDecorationLine: 'line-through',
    textAlign: 'center',
    marginBottom: responsiveHeight(1),
  },
  bottomToCart: {
    marginBottom: responsiveHeight(3),
  },
});

export default styles;
