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
  WARNA_BORDER,
  WARNA_GRAYTUA,
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
  cartCard: {
    // elevation: 1,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: WARNA_DISABLE,
    marginBottom: responsiveHeight(0.5),
    marginHorizontal: responsiveHeight(3),
    paddingHorizontal: responsiveHeight(2),
    paddingVertical: responsiveWidth(3),
  },
  space: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: responsiveHeight(10),
    width: responsiveWidth(23),
    borderRadius: 5,
    alignItems: 'center',
  },
  box4: {
    paddingLeft: responsiveHeight(1.5),
  },
  text: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.2),
    color: WARNA_SEKUNDER,
  },
  text1: {
    fontSize: responsiveFontSize(1.7),
    color: WARNA_GRAYTUA,
  },
  space1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: responsiveWidth(2),
    alignItems: 'center',
  },
  text2: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.2),
    color: WARNA_SEKUNDER,
  },
  text8: {
    fontSize: responsiveFontSize(1.7),
    color: WARNA_GRAYTUA,
    paddingLeft: responsiveHeight(19),
  },
  box: {
    backgroundColor: WARNA_WHITE,
    // borderTopLeftRadius: 35,
    // borderTopRightRadius: 35,
    height: responsiveHeight(111),
  },
  space2: {
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveHeight(3),
    marginVertical: responsiveWidth(1.5),
    alignItems: 'center',
    // borderWidth: 1,
    // paddingTop: responsiveHeight(4),
  },
  text3: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(1.6),
    fontWeight: '700',
  },
  text4: {
    fontSize: responsiveFontSize(1.6),
    color: WARNA_SEKUNDER,
    fontStyle: 'italic',
  },
  space3: {
    borderWidth: 1,
    marginHorizontal: responsiveHeight(3),
    paddingHorizontal: responsiveHeight(2),
    paddingVertical: responsiveWidth(2),
    borderRadius: 8,
    borderColor: WARNA_DISABLE,
  },
  space4: {
    flexDirection: 'row',
    paddingBottom: responsiveHeight(1),
    alignItems: 'center',
  },
  text5: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
  },
  text6: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(2),
    marginHorizontal: responsiveHeight(1),
    borderLeftWidth: 1,
    paddingHorizontal: responsiveHeight(1),
    borderColor: WARNA_BORDER,
    fontStyle: 'italic',
  },
  text7: {
    color: WARNA_SEKUNDER,
  },
  space5: {
    borderWidth: 1,
    marginHorizontal: responsiveHeight(3),
    paddingHorizontal: responsiveHeight(2),
    paddingVertical: responsiveWidth(2),
    borderRadius: 8,
    borderColor: WARNA_DISABLE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text9: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveHeight(2),
  },
  icon: {
    color: WARNA_SEKUNDER,
  },
  space7: {
    borderWidth: 1,
    marginHorizontal: responsiveHeight(3),
    paddingHorizontal: responsiveHeight(2),
    paddingVertical: responsiveWidth(2),
    borderRadius: 8,
    borderColor: WARNA_DISABLE,
  },
  space6: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text10: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveHeight(1.8),
    paddingBottom: responsiveHeight(1),
  },
  text11: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveHeight(2),
    paddingBottom: responsiveHeight(1),
    fontWeight: '700',
  },
  boxBtn: {
    flexDirection: 'row',
    paddingVertical: responsiveWidth(4),
    marginHorizontal: responsiveHeight(3),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WARNA_SEKUNDER,
    // elevation: 2,
    borderRadius: 10,
    marginTop: responsiveHeight(3),
    // marginBottom: responsiveHeight(1),
  },
  text12: {
    fontSize: responsiveFontSize(2.2),
    color: WARNA_WHITE,
    fontWeight: 'bold',
  },
  iconCard: {
    color: WARNA_WHITE,
    paddingHorizontal: responsiveHeight(0.8),
  },
});

export default styles;
