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
  WARNA_SILVER,
  WARNA_BLACK,
  WARNA_GREEN,
} from '../../utils/constant';

const styles = StyleSheet.create({
  all: {
    backgroundColor: WARNA_WHITE,
  },
  container: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: WARNA_UTAMA,
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: responsiveHeight(3),
    marginVertical: responsiveWidth(5.4),
    backgroundColor: WARNA_UTAMA,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  iconBack: {
    color: WARNA_SEKUNDER,
  },
  judulBar: {
    marginHorizontal: responsiveHeight(2.5),
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(2.4),
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
  },
  space: {
    flexDirection: 'row',
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
  // space1: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginVertical: responsiveWidth(2),
  //   alignItems: 'center',
  // },
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
    // borderWidth: 1,
    // borderTopLeftRadius: 35,
    // borderTopRightRadius: 35,
    // height: responsiveHeight(100),
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
    borderRadius: 5,
    borderColor: WARNA_SILVER,
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
    borderRadius: 5,
    borderColor: WARNA_SILVER,
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
    borderRadius: 5,
    borderColor: WARNA_SILVER,
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
  card: {
    backgroundColor: WARNA_WHITE,
    marginVertical: responsiveWidth(1),
    marginHorizontal: responsiveHeight(3),
    borderRadius: 5,
    flexDirection: 'row',
    borderColor: WARNA_SILVER,
    borderWidth: 1,
  },
  spaceImg: {
    width: '30%',
    backgroundColor: 'white',
    // borderWidth: 1,
    height: 105,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: WARNA_DISABLE,
  },
  img: {
    width: '100%',
    backgroundColor: 'white',
    // borderWidth: 1,
    height: 105,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    // backgroundColor: WARNA_DISABLE,
  },
  space1: {
    flexDirection: 'row',
    paddingVertical: responsiveWidth(2),
    // alignItems: 'center'
  },
  textContainer: {
    paddingHorizontal: responsiveHeight(1),
    // borderWidth: 1,
    width: '80%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  nama: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: WARNA_BLACK,
  },
  harga: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    color: WARNA_GRAYTUA,
    paddingVertical: responsiveWidth(4),
  },
  quantity: {
    fontSize: responsiveFontSize(1.6),
    color: WARNA_GREEN,
  },
  bottomPay: {
    marginBottom: responsiveHeight(2),
  },
});

export default styles;