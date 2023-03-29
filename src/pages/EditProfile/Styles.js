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
    marginTop: responsiveHeight(5.4),
    marginBottom: responsiveHeight(2),
  },
  iconBack: {
    color: WARNA_SEKUNDER,
    marginTop: responsiveHeight(-3.0),
    marginLeft: responsiveHeight(3),
  },
  judulBar: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(2.4),
    fontWeight: 'bold',
    marginTop: responsiveHeight(-2.8),
    marginLeft: responsiveHeight(8),
  },
  box: {
    backgroundColor: WARNA_WHITE,
    marginTop: responsiveHeight(2),
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    height: responsiveHeight(90.5),
  },
  textUser: {
    marginLeft: responsiveWidth(6),
    marginTop: responsiveHeight(4),
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.0),
    color: WARNA_SEKUNDER,
  },
  textPass: {
    marginLeft: responsiveWidth(6),
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.0),
    color: WARNA_SEKUNDER,
  },
  textInput: {
    width: responsiveWidth(85),
    height: responsiveHeight(6),
    color: WARNA_SEKUNDER,
    borderBottomWidth: 1,
    borderColor: WARNA_DISABLE,
    borderRadius: 10,
    marginLeft: responsiveWidth(6),
    marginTop: responsiveHeight(0, 5),
    marginBottom: responsiveHeight(2),
    fontSize: responsiveFontSize(1.8),
  },
  box2: {
    width: responsiveWidth(85),
    height: responsiveHeight(7),
    borderBottomWidth: 1,
    // borderWidth: 1,
    borderColor: WARNA_UTAMA,
    borderRadius: 10,
    color: WARNA_SEKUNDER,
    marginLeft: responsiveWidth(6),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(2),
    fontSize: responsiveFontSize(1.8),
  },
  box3: {
    width: responsiveWidth(25),
    height: responsiveHeight(4),
    backgroundColor: WARNA_UTAMA,
    borderRadius: 10,
    marginTop: responsiveHeight(1),
    // marginLeft: responsiveWidth(6),
  },
  text: {
    textAlign: 'center',
    marginTop: responsiveHeight(1),
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(1.6),
  },
  viewButton: {
    width: responsiveWidth(88),
    height: responsiveHeight(6),
    alignItems: 'center',
    backgroundColor: WARNA_UTAMA,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: responsiveHeight(1),
  },
  textRegister: {
    fontWeight: 'bold',
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(2.1),
  },
});

export default styles;
