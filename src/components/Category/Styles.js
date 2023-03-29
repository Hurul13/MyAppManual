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
  categoriesListContainer: {
    paddingVertical: 30,
    // alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 38,
    width: 80,
    marginRight: 7,
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
});

export default styles;
