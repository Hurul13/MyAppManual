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
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    height: responsiveHeight(91.6),
  },
  text1: {
    color: WARNA_SEKUNDER,
    marginTop: responsiveHeight(4),
    marginLeft: responsiveHeight(3),
    fontSize: responsiveFontSize(2.2),
    fontWeight: '600',
    marginBottom: responsiveHeight(1),
  },
  box2: {
    width: responsiveWidth(88),
    height: responsiveHeight(8),
    backgroundColor: WARNA_WHITE,
    borderColor: WARNA_SEKUNDER,
    borderBottomWidth: 1,
    marginHorizontal: responsiveHeight(3),
    flexDirection: 'row',
    alignItems: 'center',
  },
  box3: {
    width: responsiveWidth(11),
    height: responsiveHeight(4.7),
    borderRadius: 8,
    borderColor: WARNA_SEKUNDER,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconMap: {
    color: WARNA_SEKUNDER,
  },
  text2: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(1.6),
    marginHorizontal: responsiveHeight(2),
  },
});

export default styles;
