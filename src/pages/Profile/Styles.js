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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveHeight(3),
    marginVertical: responsiveWidth(3),
  },
  space: {
    flexDirection: 'row-reverse',
    marginVertical: responsiveHeight(1),
  },
  iconBell: {
    color: WARNA_UTAMA,
  },
  iconTroll: {
    marginHorizontal: responsiveHeight(3),
    color: WARNA_UTAMA,
  },
  space1: {
    flexDirection: 'row',
    marginVertical: responsiveHeight(1),
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
  boxLinear: {
    marginTop: responsiveHeight(0.9),
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
  space3: {
    width: responsiveWidth(88),
    height: responsiveHeight(8),
    backgroundColor: WARNA_WHITE,
    borderRadius: 18,
    borderColor: WARNA_UTAMA,
    marginHorizontal: responsiveHeight(3),
    borderBottomWidth: 1,
    marginVertical: responsiveWidth(1),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveHeight(2),
  },
  box3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box4: {
    width: responsiveWidth(10.5),
    height: responsiveHeight(5),
    backgroundColor: WARNA_SEKUNDER,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconPen: {
    color: WARNA_WHITE,
  },
  space2: {
    marginBottom: responsiveHeight(3),
  },
  text4: {
    marginTop: responsiveHeight(-5.6),
    marginLeft: responsiveHeight(12),
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(2),
  },
  iconNext: {
    color: WARNA_DISABLE,
    marginLeft: responsiveHeight(31),
  },
  setting: {
    marginTop: responsiveHeight(3),
  },
});

export default styles;
