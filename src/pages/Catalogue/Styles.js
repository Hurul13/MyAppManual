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
  WARNA_BORDER,
  WARNA_RED,
  WARNA_GREEN,
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
  textInput: {
    height: 52,
    width: '85%',
    borderColor: '#ccc',
    // borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    color: 'black',
    marginVertical: responsiveHeight(2.5),
    marginHorizontal: responsiveHeight(3),
    backgroundColor: WARNA_WHITE,
    alignSelf: 'center',
  },
  // box1: {
  //   backgroundColor: WARNA_WHITE,
  //   width: responsiveWidth(88),
  //   height: responsiveHeight(6),
  //   borderRadius: 8,
  //   borderColor: WARNA_WHITE,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // },
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
  spaceImg: {
    height: responsiveHeight(13),
    width: responsiveWidth(40.5),
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 1,
    backgroundColor: WARNA_BORDER,
    borderColor: WARNA_BORDER,
  },
  boxText: {
    marginHorizontal: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
  },
  text: {
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
    color: WARNA_SEKUNDER,
  },
  text1: {
    fontSize: responsiveFontSize(1.4),
    color: WARNA_RED,
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
    fontSize: responsiveFontSize(2.3),
    color: WARNA_GREEN,
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
  category: {
    // borderWidth: 1,
    paddingHorizontal: responsiveHeight(2),
    marginHorizontal: responsiveHeight(0.5),
    marginVertical: responsiveWidth(4),
    paddingVertical: responsiveWidth(2),
    borderRadius: 50 / 2,
  },
  categoryText: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  categoryBar: {
    marginHorizontal: responsiveHeight(2),
  },
});

export default styles;
