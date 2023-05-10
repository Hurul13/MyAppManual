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
  all: {},
  container: {
    backgroundColor: WARNA_UTAMA,
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: responsiveHeight(3),
    marginVertical: responsiveWidth(5.4),
    // marginBottom: responsiveWidth(),
    // justifyContent: 'center'
  },
  iconBack: {
    color: WARNA_SEKUNDER,
  },
  judulBar: {
    marginHorizontal: responsiveHeight(2.5),
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(2.4),
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: responsiveHeight(0.8),
  },
  box: {
    backgroundColor: WARNA_WHITE,
    // marginTop: responsiveHeight(2),
    // borderTopLeftRadius: 35,
    // borderTopRightRadius: 35,
    height: responsiveHeight(91.6),
    paddingTop: responsiveWidth(5),
  },
});

export default styles;
