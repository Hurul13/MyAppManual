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
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  boxContainer: {
    backgroundColor: WARNA_WHITE,
  },
  boxHeader: {
    backgroundColor: WARNA_WHITE,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  boxHeader1: {
    backgroundColor: WARNA_UTAMA,
    width: responsiveWidth(100),
    height: responsiveHeight(11),
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  header: {
    marginTop: responsiveHeight(5.4),
    marginBottom: responsiveHeight(2),
  },
  box1: {
    backgroundColor: WARNA_WHITE,
    width: responsiveWidth(80),
    height: responsiveHeight(6),
    marginTop: responsiveHeight(-3.0),
    marginLeft: responsiveHeight(3),
    borderRadius: 8,
    borderColor: WARNA_WHITE,
  },

  textInput: {
    width: responsiveWidth(65),
    height: responsiveHeight(6),
    color: WARNA_SEKUNDER,
    borderWidth: 1,
    borderColor: WARNA_WHITE,
    borderRadius: 8,
    marginLeft: responsiveWidth(12),
    marginTop: responsiveHeight(0, 5),
    // marginBottom: responsiveHeight(2),
    fontSize: responsiveFontSize(1.8),
  },
  iconSearch: {
    color: WARNA_DISABLE,
    marginTop: responsiveHeight(-4.5),
    marginLeft: responsiveHeight(2),
  },
  iconFilter: {
    color: WARNA_WHITE,
    marginTop: responsiveHeight(-5),
    marginLeft: responsiveHeight(42.5),
  },
  box: {
    height: responsiveHeight(112),
  },
  categoriesListContainer: {
    marginTop: responsiveHeight(4),
    paddingHorizontal: responsiveHeight(2.7),
  },
  categoryBtn: {
    height: responsiveHeight(4.8),
    width: responsiveWidth(22),
    marginRight: responsiveHeight(1.2),
    borderRadius: 80 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: responsiveHeight(3),
    elevation: 13,
    // paddingHorizontal: 5,
    flexDirection: 'row',
  },
  card: {
    height: responsiveHeight(27),
    width: responsiveWidth(41),
    marginLeft: responsiveHeight(3),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(4),
    borderRadius: 15,
    borderColor: WARNA_UTAMA,
    borderWidth: 1,
    elevation: 13,
    backgroundColor: WARNA_WHITE,
  },
  addToCartBtn: {
    height: responsiveHeight(3.5),
    width: responsiveWidth(7.4),
    borderRadius: 20,
    backgroundColor: WARNA_UTAMA,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImg: {
    // alignItems: 'center',
    // top: responsiveHeight(-4.5),
  },
  img: {
    height: responsiveHeight(13),
    width: responsiveWidth(40.5),

    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // borderColor: WARNA_UTAMA,
    borderWidth: 1,
  },
  boxText: {
    marginTop: responsiveHeight(3.5),
    marginLeft: responsiveHeight(2.4),
  },
  text: {
    marginTop: responsiveHeight(-2),
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    color: WARNA_SEKUNDER,
  },
  text1: {
    fontSize: responsiveFontSize(1.7),
    color: WARNA_GRAYTUA,
    marginTop: responsiveHeight(0.3),
  },
  boxPrice: {
    marginTop: responsiveHeight(1),
    marginHorizontal: responsiveHeight(2.3),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text2: {
    fontSize: responsiveFontSize(2.2),
    color: WARNA_SEKUNDER,
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
    marginTop: responsiveHeight(0.3),
  },
  iconStar: {
    // marginLeft: responsiveHeight(4),
    color: WARNA_UTAMA,
  },
  text3: {
    fontSize: responsiveFontSize(1.9),
    // marginTop: responsiveHeight(-0.1),
    marginLeft: responsiveHeight(0.5),
    color: WARNA_SEKUNDER,
  },
  boxCard: {
    marginBottom: responsiveHeight(2),
  },
});

export default styles;
