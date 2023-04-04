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
    // borderWidth: 1,
    // flexDirection: 'row',
    // backgroundColor: WARNA_WHITE,
    borderRadius: 20,
    marginHorizontal: responsiveHeight(3),
    marginVertical: responsiveWidth(7),
  },
  wrap: {
    width: responsiveWidth(87),
    height: responsiveHeight(20),
    borderRadius: 20,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },
  wrapDot: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    fontSize: responsiveFontSize(4),
    marginTop: responsiveHeight(17),
  },
  dotActive: {
    margin: 3,
    color: WARNA_SEKUNDER,
  },
  dot: {
    margin: 3,
    color: WARNA_WHITE,
  },
  // box: {
  //   // width: responsiveWidth(87),
  //   // height: responsiveHeight(10),
  //   // borderBottomLeftRadius: 20,
  //   // borderBottomRightRadius: 20,
  //   borderRadius: 20,
  //   backgroundColor: WARNA_BORDER,
  //   opacity: 0.5,
  //   // borderBottomLeftRadius: 20,
  //   // borderBottomRightRadius: 20,
  // },
});

export default styles;
