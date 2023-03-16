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
    // flexDirection: 'row  ',
  },
  menuBottom: {
    flexDirection: 'row',
  },
  boxBottom: {
    backgroundColor: WARNA_SEKUNDER,
    marginBottom: responsiveHeight(20),
    marginLeft: responsiveHeight(5),
    height: responsiveHeight(11.5),
    width: responsiveWidth(19),
    borderRadius: 18,
  },
  icon: {
    color: WARNA_WHITE,
    alignSelf: 'center',
    marginTop: responsiveHeight(1.5),
  },
  icon2: {
    color: WARNA_WHITE,
    alignSelf: 'center',
    marginTop: responsiveHeight(2.7),
  },
  text: {
    color: WARNA_SEKUNDER,
    marginTop: responsiveHeight(4.1),
    fontSize: responsiveFontSize(1.7),
    textAlign: 'center',
  },
  menu2: {
    marginLeft: responsiveHeight(3),
  },
  menu3: {
    marginLeft: responsiveHeight(3),
  },
});

export default styles;
