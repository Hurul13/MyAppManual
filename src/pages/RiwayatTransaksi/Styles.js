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

  cartCard: {
    height: responsiveHeight(25),
    elevation: 15,
    borderRadius: 10,
    borderColor: WARNA_UTAMA,
    backgroundColor: WARNA_WHITE,
    marginTop: responsiveHeight(4),
    marginVertical: responsiveHeight(-1),
    marginHorizontal: responsiveHeight(3),
    paddingHorizontal: responsiveHeight(2),
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
  img: {
    height: responsiveHeight(10),
    width: responsiveWidth(23),
    marginTop: responsiveHeight(1.5),
    borderRadius: 5,
  },
  box4: {
    marginTop: responsiveHeight(-10),
    marginLeft: responsiveHeight(13),
  },
  text: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.2),
    color: WARNA_SEKUNDER,
  },
  boxTime: {
    flexDirection: 'row',
  },
  iconTime: {
    marginTop: responsiveHeight(5),
    color: WARNA_DISABLE,
  },
  text1: {
    marginLeft: responsiveHeight(0.5),
    fontSize: responsiveFontSize(1.6),
    marginTop: responsiveHeight(5),
    color: WARNA_DISABLE,
  },
  box2: {
    // flexDirection: 'row',
    marginTop: responsiveHeight(1.5),
    marginLeft: responsiveHeight(35),
  },
  text2: {
    marginLeft: responsiveHeight(1.3),
    fontSize: responsiveFontSize(1.7),
    color: WARNA_GRAYTUA,
  },
  text4: {
    fontSize: responsiveFontSize(1.7),
    color: WARNA_GRAYTUA,
  },
  box3: {
    height: responsiveHeight(5),
    width: responsiveWidth(88),
    marginTop: responsiveHeight(1.8),
    marginLeft: responsiveHeight(-2),
    borderTopWidth: 1,
    borderColor: WARNA_DISABLE,
    // backgroundColor: WARNA_GRAYTUA,
  },
  box6: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(1.2),
    // marginBottom: responsiveHeight(1),
    marginHorizontal: responsiveHeight(2),
    // backgroundColor: WARNA_DISABLE,
  },
  text6: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
    color: WARNA_SEKUNDER,
  },
  text5: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
    color: WARNA_SEKUNDER,
  },
  box5: {
    height: responsiveHeight(5),
    width: responsiveWidth(88),
    marginLeft: responsiveHeight(-2),
    borderBottomWidth: 1,
    borderColor: WARNA_DISABLE,
  },

  box1: {
    marginTop: responsiveHeight(-7.4),
    marginRight: responsiveHeight(-28),
    alignItems: 'center',
  },
  text3: {
    paddingHorizontal: responsiveHeight(0.5),
    fontSize: responsiveFontSize(1),
    color: WARNA_WHITE,
  },
  actionBtn: {
    width: responsiveWidth(21),
    height: responsiveHeight(4),
    backgroundColor: WARNA_SEKUNDER,
    borderRadius: 30,
    marginTop: responsiveHeight(-2),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
