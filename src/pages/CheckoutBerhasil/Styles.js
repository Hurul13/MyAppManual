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
  all: {
    backgroundColor: WARNA_UTAMA,
  },
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: responsiveHeight(3),
    marginVertical: responsiveWidth(5.4),
  },
  iconBack: {
    color: WARNA_SEKUNDER,
  },
  judulBar: {
    marginHorizontal: responsiveHeight(2.5),
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(2.4),
    fontWeight: 'bold',
  },
  box: {
    backgroundColor: WARNA_WHITE,
    height: responsiveHeight(91.6),
  },
  space: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: responsiveWidth(10),
    // borderWidth: 1,
  },
  icon: {
    color: WARNA_SEKUNDER,
  },
  space1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
  },
  text1: {
    color: WARNA_SEKUNDER,
    paddingHorizontal: responsiveHeight(3),
    paddingVertical: responsiveWidth(3),
    textAlign: 'center',
  },
});

export default styles;
