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

  box2: {
    borderColor: WARNA_DISABLE,
    borderBottomWidth: 1,
    marginTop: responsiveHeight(4),
    height: responsiveHeight(28.5),
  },
  box3: {
    borderColor: WARNA_DISABLE,
    borderWidth: 1,
    height: responsiveHeight(4.5),
  },
  iconToko: {
    color: WARNA_SEKUNDER,
    marginTop: responsiveHeight(0.1),
    marginLeft: responsiveHeight(3),
  },
  text1: {
    color: WARNA_SEKUNDER,
    marginTop: responsiveHeight(-3.2),
    marginLeft: responsiveHeight(9),
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  genteng: {
    borderColor: WARNA_DISABLE,
    borderWidth: 1,
    borderRadius: 5,
    height: responsiveHeight(14),
    width: responsiveWidth(28),
    marginTop: responsiveHeight(3),
    marginLeft: responsiveHeight(3),
  },
  text2: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(-14.5),
    marginLeft: responsiveHeight(18),
  },
  iconJam: {
    color: WARNA_DISABLE,
    marginTop: responsiveHeight(8.7),
    marginLeft: responsiveHeight(18),
  },
  text3: {
    color: WARNA_DISABLE,
    fontSize: responsiveFontSize(1.5),
    marginTop: responsiveHeight(-2.2),
    marginLeft: responsiveHeight(21),
  },
  text4: {
    color: WARNA_DISABLE,
    fontSize: responsiveFontSize(1.8),
    marginTop: responsiveHeight(-1.9),
    marginLeft: responsiveHeight(38),
  },
  text5: {
    color: WARNA_DISABLE,
    fontSize: responsiveFontSize(1.5),
    marginTop: responsiveHeight(-4.4),
    marginLeft: responsiveHeight(43.8),
  },
  box4: {
    // borderColor: WARNA_DISABLE,
    backgroundColor: WARNA_SEKUNDER,
    borderWidth: 1,
    borderRadius: 50 / 2,
    height: responsiveHeight(4),
    width: responsiveWidth(25),
    marginTop: responsiveHeight(-3),
    marginLeft: responsiveHeight(34),
  },
  text6: {
    color: WARNA_DISABLE,
    fontSize: responsiveFontSize(1.4),
    marginTop: responsiveHeight(0.3),
    marginLeft: responsiveHeight(1),
  },
  box5: {
    borderColor: WARNA_DISABLE,
    borderTopWidth: 1,
    height: responsiveHeight(4.5),
    marginTop: responsiveHeight(5),
  },
  text7: {
    color: WARNA_SEKUNDER,
    marginTop: responsiveHeight(1),
    marginLeft: responsiveHeight(3),
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  text8: {
    color: WARNA_SEKUNDER,
    marginTop: responsiveHeight(-2.3),
    marginLeft: responsiveHeight(35.5),
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
});

export default styles;
