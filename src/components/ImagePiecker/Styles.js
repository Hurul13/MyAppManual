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
    marginTop: responsiveHeight(13),
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fotoProfil: {
    width: responsiveWidth(23),
    height: responsiveHeight(11.5),
    marginTop: responsiveHeight(-8),
    borderRadius: 100 / 2,
    borderColor: WARNA_UTAMA,
    borderWidth: 2,
    justifyContent: 'center',
  },
  upFotoProfil: {
    width: responsiveWidth(23),
    height: responsiveHeight(11.5),
    marginLeft: responsiveHeight(0.2),
    marginTop: responsiveHeight(-11.5),
    borderRadius: 100 / 2,
    borderColor: WARNA_UTAMA,
    borderWidth: 2,
    justifyContent: 'center',
  },
  box4: {
    width: responsiveWidth(8),
    height: responsiveHeight(4),
    marginTop: responsiveHeight(-4),
    marginLeft: responsiveHeight(8),
    backgroundColor: WARNA_UTAMA,
    borderRadius: 100 / 2,
  },
  iconUser: {
    marginTop: responsiveHeight(0.8),
    color: WARNA_SEKUNDER,
    alignSelf: 'center',
  },
});

export default styles;
