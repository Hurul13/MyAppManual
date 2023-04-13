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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveHeight(3),
    marginVertical: responsiveWidth(5),
  },
  box1: {
    backgroundColor: WARNA_WHITE,
    width: responsiveWidth(88),
    height: responsiveHeight(6),
    borderRadius: 8,
    borderColor: WARNA_WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textInput: {
    width: responsiveWidth(73),
    height: responsiveHeight(6),
    color: WARNA_SEKUNDER,
    borderWidth: 1,
    borderColor: WARNA_WHITE,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    fontSize: responsiveFontSize(1.8),
  },
  boxSearch: {
    // borderWidth: 1,
    width: responsiveWidth(14.9),
    height: responsiveHeight(6),
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: WARNA_WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  iconSearch: {
    color: WARNA_DISABLE,
  },
  boxFilter: {
    width: responsiveWidth(13),
    height: responsiveHeight(6),
    borderRadius: 8,
    backgroundColor: WARNA_SEKUNDER,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconFilter: {
    color: WARNA_WHITE,
  },
  box: {
    height: responsiveHeight(180),
  },
  categoriesListContainer: {
    alignItems: 'center',
    paddingVertical: responsiveWidth(6),
    paddingHorizontal: responsiveHeight(3),
  },
  categoryBtn: {
    height: responsiveHeight(6.5),
    width: responsiveWidth(33),
    marginRight: responsiveHeight(1),
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  imgCategory: {
    height: responsiveHeight(5),
    width: responsiveWidth(10.5),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: WARNA_WHITE,
    marginHorizontal: responsiveHeight(0.7),
  },

  card: {
    // height: responsiveHeight(25.7),
    width: responsiveWidth(41),
    marginLeft: responsiveHeight(3),
    marginTop: responsiveHeight(0.5),
    marginBottom: responsiveHeight(2),
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
  img: {
    height: responsiveHeight(13),
    width: responsiveWidth(40.5),
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 1,
  },
  boxText: {
    marginHorizontal: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
  },
  text: {
    fontSize: responsiveFontSize(2.1),
    fontWeight: '400',
    color: WARNA_SEKUNDER,
  },
  text1: {
    fontSize: responsiveFontSize(1.4),
    color: WARNA_GRAYTUA,
    // marginTop: responsiveHeight(0.3),
  },
  boxPrice: {
    marginHorizontal: responsiveHeight(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: responsiveWidth(2),
    marginTop: responsiveHeight(2),
  },
  text2: {
    fontSize: responsiveFontSize(2.5),
    color: WARNA_SEKUNDER,
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row-reverse',
  },
  iconStar: {
    color: WARNA_UTAMA,
    paddingHorizontal: responsiveHeight(0.3),
  },
  text3: {
    fontSize: responsiveFontSize(1.9),
    color: WARNA_SEKUNDER,
  },
  boxCard: {
    marginBottom: responsiveHeight(2),
  },
});

export default styles;
