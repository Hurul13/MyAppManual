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
    paddingBottom: responsiveHeight(20),
    backgroundColor: WARNA_WHITE,
    borderRadius: 20,
    marginHorizontal: responsiveHeight(3),
    marginVertical: responsiveWidth(2),
  },
  wrap: {
    width: responsiveWidth(110),
    height: responsiveHeight(20),
    borderRadius: 20,
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
});

export default styles;
