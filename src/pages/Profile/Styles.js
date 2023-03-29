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
  header: {
    marginTop: responsiveHeight(0.5),
    marginBottom: responsiveHeight(2),
  },
  iconBell: {
    color: WARNA_UTAMA,
    marginTop: responsiveHeight(2),
    marginLeft: responsiveHeight(43),
  },
  iconTroll: {
    color: WARNA_UTAMA,
    marginTop: responsiveHeight(-3.0),
    marginLeft: responsiveHeight(38),
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
  boxLinear: {
    marginTop: responsiveHeight(2),
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    height: responsiveHeight(26),
  },
  box1: {
    width: responsiveWidth(75),
    height: responsiveHeight(15),
    marginTop: responsiveHeight(8),
    backgroundColor: WARNA_WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 18,
    // borderColor: WARNA_UTAMA,
    // borderWidth: 1,
  },
  fotoProfil: {
    width: responsiveWidth(23),
    height: responsiveHeight(11.5),
    marginTop: responsiveHeight(-9),
    borderRadius: 100 / 2,
    borderColor: WARNA_UTAMA,
    borderWidth: 2,
    justifyContent: 'center',
  },
  box2: {
    width: responsiveWidth(8),
    height: responsiveHeight(4),
    marginTop: responsiveHeight(-4),
    marginLeft: responsiveHeight(8),
    backgroundColor: WARNA_UTAMA,
    borderRadius: 100 / 2,
  },
  profil: {
    marginTop: responsiveHeight(-14),
    justifyContent: 'center',
  },
  text1: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(2.4),
    marginTop: responsiveHeight(1),
    textAlign: 'center',
  },
  text2: {
    color: WARNA_DISABLE,
    textAlign: 'center',
    fontSize: responsiveFontSize(1.8),
  },
  text3: {
    color: WARNA_SEKUNDER,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.4),
    marginLeft: responsiveHeight(3),
  },
  box3: {
    width: responsiveWidth(88),
    height: responsiveHeight(8),
    marginTop: responsiveHeight(3),
    marginLeft: responsiveHeight(3),
    // marginBottom: responsiveHeight(-1.5),
    backgroundColor: WARNA_WHITE,
    borderRadius: 18,
    borderColor: WARNA_UTAMA,
    borderBottomWidth: 1,
  },
  box4: {
    width: responsiveWidth(10.5),
    height: responsiveHeight(5),
    marginTop: responsiveHeight(1.5),
    marginLeft: responsiveHeight(2),
    backgroundColor: WARNA_SEKUNDER,
    borderRadius: 8,
    // borderColor: WARNA_UTAMA,
    // borderWidth: 1,
  },
  iconPen: {
    color: WARNA_WHITE,
    marginTop: responsiveHeight(1),
    marginLeft: responsiveHeight(1),
  },
  text4: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(2),
    marginLeft: responsiveHeight(9),
    marginTop: responsiveHeight(-3.6),
  },
  iconNext: {
    color: WARNA_DISABLE,
    marginTop: responsiveHeight(-2.7),
    marginLeft: responsiveHeight(38),
  },
  profilHistory: {
    marginTop: responsiveHeight(-2),
  },
  setting: {
    marginTop: responsiveHeight(3),
  },
  profilLogout: {
    marginTop: responsiveHeight(-2),
    marginBottom: responsiveHeight(3),
  },
});

export default styles;
