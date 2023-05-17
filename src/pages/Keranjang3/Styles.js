import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  WARNA_DISABLE,
  WARNA_GRAYTUA,
  WARNA_SEKUNDER,
  WARNA_UTAMA,
  WARNA_DEEPYELLOW,
  WARNA_WHITE,
  WARNA_BORDER,
  WARNA_BLACK,
  WARNA_SILVER,
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
  card: {
    backgroundColor: 'white',
    marginVertical: responsiveWidth(1),
    marginHorizontal: responsiveHeight(2),
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
  },
  space2: {
    flexDirection: 'row',
    paddingHorizontal: responsiveHeight(0.8),
    width: '20%',
    // borderWidth: 1,
    justifyContent: 'space-between',
  },
  textContainer: {
    paddingHorizontal: responsiveHeight(1),
    // borderWidth: 1,
    width: '63%',
  },
  nama: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: WARNA_BLACK,
  },
  harga: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: WARNA_GRAYTUA,
    paddingVertical: responsiveWidth(2),
  },
  bottom: {
    // backgroundColor: WARNA_UTAMA,
    borderTopWidth: 1,
    borderColor: WARNA_BORDER,
    alignItems: 'center',
    // borderTopRightRadius: 10,
    // borderTopLeftRadius: 10,
    // justifyContent
    // marginHorizontal: responsiveHeight(2),
  },
  bottomTotal: {
    marginVertical: responsiveWidth(5),
    flexDirection: 'row',
    borderRadius: 50,
    justifyContent: 'space-between',
    backgroundColor: WARNA_WHITE,
    // shadowOpacity: 2,
    width: '90%',
    height: 45,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: WARNA_BORDER,
    alignItems: 'center',
  },
  totalHarga1: {
    paddingHorizontal: responsiveHeight(2),
    fontSize: responsiveFontSize(2),
    color: WARNA_SEKUNDER,
    fontWeight: 'bold',
    // textAlign: 'center',
  },
  totalHarga: {
    paddingVertical: responsiveWidth(3),
    textAlign: 'center',
    paddingHorizontal: responsiveHeight(2),
    height: 45,
    borderRadius: 50,
    backgroundColor: WARNA_UTAMA,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
  },
  checkoutButton: {
    // borderTopWidth: 1,
    // borderColor: WARNA_BORDER,
    alignItems: 'center',
    // borderTopRightRadius: 10,
    // borderTopLeftRadius: 10,
    backgroundColor: WARNA_UTAMA,
    width: '90%',
    borderRadius: 50,
    // height: 45,
    marginVertical: responsiveWidth(5),
  },
  checkoutText: {
    fontSize: responsiveFontSize(2),
    color: WARNA_SEKUNDER,
    fontWeight: 'bold',
    // paddingHorizontal: responsiveHeight(2),
    paddingVertical: responsiveWidth(4),
    textAlign: 'center',
  },
});

export default styles;
