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
    resizeMode: 'cover',
  },
  textInput: {
    backgroundColor: WARNA_WHITE,
    width: responsiveWidth(85),
    height: responsiveHeight(7),
    borderWidth: 1,
    borderRadius: 25,
    borderColor: WARNA_WHITE,
    alignSelf: 'center',
    marginVertical: responsiveHeight(2.33),
    marginTop: responsiveHeight(5),
  },
  iconSearch: {
    color: WARNA_DISABLE,
    marginTop: responsiveHeight(-7.5),
    marginLeft: responsiveHeight(48),
  },
});

export default styles;
