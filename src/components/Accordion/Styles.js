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
  WARNA_BORDER,
} from '../../utils/constant';

const styles = StyleSheet.create({
  container: {
    // width: responsiveWidth(90),
    marginHorizontal: responsiveHeight(3),
    // marginVertical: responsiveWidth(2),
    paddingVertical: responsiveWidth(2),
    // borderRadius: 12,
    // backgroundColor: WARNA_DISABLE,
    overflow: 'hidden',
    // borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: WARNA_BORDER,
  },
  title: {
    fontSize: responsiveFontSize(2.2),
    color: WARNA_SEKUNDER,
    fontWeight: 'bold',
  },
  icon: {
    color: WARNA_SEKUNDER,
  },
  bodyContainer: {},
  body: {
    // paddingHorizontal: responsiveHeight(3),
    // paddingVertical: responsiveWidth(3),
    color: WARNA_SEKUNDER,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginHorizontal: responsiveHeight(3),
  },
});

export default styles;
