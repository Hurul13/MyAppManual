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
} from '../../utils/constant';

const styles = StyleSheet.create({
  actionBtn: {
    width: responsiveWidth(30),
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: WARNA_SEKUNDER,
    paddingHorizontal: responsiveHeight(1),
    paddingVertical: responsiveWidth(1.5),
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
    borderRadius: 17,
    // borderWidth: 1,
    borderColor: WARNA_BORDER,
  },
});

export default styles;
