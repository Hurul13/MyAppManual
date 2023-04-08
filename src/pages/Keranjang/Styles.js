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
  all: {
    backgroundColor: WARNA_UTAMA,
  },
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  header2: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
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
  box: {
    backgroundColor: WARNA_WHITE,
    // marginTop: responsiveHeight(2),
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    height: responsiveHeight(91.6),
  },
  box6: {
    height: responsiveHeight(12),
    // backgroundColor: WARNA_GRAYTUA,
    borderTopWidth: 1,
    borderColor: WARNA_DISABLE,
    marginTop: responsiveHeight(4.4),
  },
  box2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(1.5),
    // marginBottom: responsiveHeight(1),
    marginHorizontal: responsiveHeight(4),
    // backgroundColor: WARNA_DISABLE,
  },
  text4: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.2),
    color: WARNA_SEKUNDER,
  },
  text5: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.2),
    color: WARNA_SEKUNDER,
  },
  box3: {
    flexDirection: 'row',
    paddingVertical: responsiveWidth(4),
    marginHorizontal: responsiveHeight(3),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WARNA_SEKUNDER,
    borderRadius: 10,
    marginVertical: responsiveHeight(2),
    marginBottom: responsiveHeight(3.5),
  },
  text6: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.2),
    color: WARNA_WHITE,
  },
  cartCard: {
    height: responsiveHeight(19),
    elevation: 15,
    borderRadius: 10,
    borderColor: WARNA_UTAMA,
    backgroundColor: WARNA_WHITE,
    marginTop: responsiveHeight(4),
    marginVertical: responsiveHeight(-1),
    marginHorizontal: responsiveHeight(3),
    paddingHorizontal: responsiveHeight(2),
  },
  space: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1.2),
    // justifyContent: 'center',
  },
  img: {
    height: responsiveHeight(10),
    width: responsiveWidth(23),
    // marginTop: responsiveHeight(1.5),
    borderRadius: 5,
    alignItems: 'center',
  },
  box5: {
    height: responsiveHeight(5),
    width: responsiveWidth(88),
    marginLeft: responsiveHeight(-2),
    borderBottomWidth: 1,
    borderColor: WARNA_DISABLE,
  },
  text7: {
    marginLeft: responsiveHeight(6.3),
    marginTop: responsiveHeight(-2.8),
    color: WARNA_SEKUNDER,
  },
  iconShop: {
    marginTop: responsiveHeight(0.8),
    marginLeft: responsiveHeight(1.8),
    color: WARNA_SEKUNDER,
  },
  box4: {
    marginHorizontal: responsiveHeight(1.5),
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
    marginVertical: responsiveWidth(1.5),
  },
  text2: {
    fontWeight: 'bold',
    marginTop: responsiveHeight(1),
    fontSize: responsiveFontSize(2.2),
    color: WARNA_SEKUNDER,
  },
  minplus: {
    paddingHorizontal: responsiveHeight(6),
  },
  box1: {
    marginTop: responsiveHeight(-7.4),
    marginRight: responsiveHeight(-28),
    alignItems: 'center',
  },
  text3: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.2),
    color: WARNA_SEKUNDER,
  },

  actionBtn: {
    width: responsiveWidth(20),
    height: responsiveHeight(3.9),
    backgroundColor: WARNA_UTAMA,
    borderRadius: 30,
    marginTop: responsiveHeight(1),
    flexDirection: 'row',
  },
  iconRemove: {
    color: WARNA_WHITE,
    marginTop: responsiveHeight(0.5),
    marginLeft: responsiveHeight(0.9),
  },
  iconAdd: {
    color: WARNA_WHITE,
    marginTop: responsiveHeight(0.5),
    marginLeft: responsiveHeight(2.1),
  },
});

export default styles;
