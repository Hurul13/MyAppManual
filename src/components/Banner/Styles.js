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
  boxBanner: {
    backgroundColor: WARNA_WHITE,
    marginBottom: responsiveHeight(6),
    height: responsiveHeight(20),
    width: responsiveWidth(91),
    borderRadius: 8,
    borderColor: WARNA_DISABLE,
    alignSelf: 'center',
    shadowColor: WARNA_DISABLE,
    resizeMode: 'cover',
  },
  scroll: {
    alignSelf: 'center',
    justifyContent: 'center',
    autoplay: true,
  },
  imgBanner1: {
    height: responsiveHeight(20),
    width: responsiveWidth(91),
    borderRadius: 8,
  },
  boxBannerName: {
    // backgroundColor: WARNA_DISABLE,
    marginTop: responsiveHeight(-8),
    height: responsiveHeight(8),
    width: responsiveWidth(91),
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    alignSelf: 'center',
    backgroundColor: WARNA_UTAMA,
    opacity: 0.8,
  },
  text1: {
    color: WARNA_WHITE,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
    marginLeft: responsiveHeight(2),
    marginTop: responsiveHeight(1),
  },
  text2: {
    color: WARNA_WHITE,
    marginLeft: responsiveHeight(2),
  },
});

export default styles;
