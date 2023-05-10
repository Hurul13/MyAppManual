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
  WARNA_DEEPYELLOW,
  WARNA_GREEN,
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
  box: {
    backgroundColor: WARNA_WHITE,
    // borderTopLeftRadius: 35,
    // borderTopRightRadius: 35,
    height: responsiveHeight(91.6),
    paddingVertical: responsiveWidth(8),
  },

  card: {
    backgroundColor: WARNA_WHITE,
    borderRadius: 8,
    paddingVertical: responsiveWidth(1),
    paddingHorizontal: responsiveHeight(2),
    // width: '100%',
    marginVertical: responsiveWidth(2),
    marginHorizontal: responsiveHeight(3),
  },
  elevation: {
    shadowColor: WARNA_SEKUNDER,
    elevation: 7,
  },
  box1: {
    paddingVertical: responsiveWidth(2),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: WARNA_BORDER,
  },
  icon: {
    color: WARNA_SEKUNDER,
    paddingRight: responsiveHeight(1),
  },
  space: {
    paddingVertical: responsiveWidth(3),
    flexDirection: 'row',
  },
  img: {
    height: responsiveHeight(8),
    width: responsiveWidth(19),
    borderRadius: 5,
  },
  space2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  space1: {
    paddingHorizontal: responsiveWidth(2),
    justifyContent: 'space-between',
  },
  text1: {
    color: WARNA_SEKUNDER,
    fontWeight: 'bold',
  },
  text2: {
    color: WARNA_SEKUNDER,
  },
  space3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  space5: {
    borderTopWidth: 1,
    borderColor: WARNA_BORDER,
    paddingVertical: responsiveWidth(2),
  },
  space6: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: responsiveHeight(0.5),
    justifyContent: 'space-between',
  },
  text5: {
    color: WARNA_SEKUNDER,
    fontSize: responsiveFontSize(1.8),
    // fontWeight: '500',
  },
  text7: {
    color: WARNA_GREEN,
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
  },
  text6: {
    fontSize: responsiveFontSize(1.3),
    color: WARNA_WHITE,
  },
  space7: {
    backgroundColor: WARNA_GREEN,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: responsiveHeight(1),
    paddingVertical: responsiveWidth(1),
  },
});

export default styles;
