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
  },
  decsName: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(2.1),
    fontWeight: '700',
  },
  decsChil: {
    color: WARNA_SEKUNDER,
    paddingTop: responsiveHeight(2),
  },
});

export default styles;
