import { StyleSheet } from 'react-native';
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
  WARNA_BLACK,
  WARNA_SILVER,
} from '../../utils/constant';

const styles = StyleSheet.create({
  all: {
    backgroundColor: WARNA_UTAMA,
  },
  container: {
    flex: 1,
    resizeMode: 'cover',
    // margin: responsiveHeight(3)
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
    // paddingVertical: responsiveWidth(8),
    padding: responsiveHeight(3)
  },
  containerrr: {
    paddingHorizontal: responsiveHeight(2),
  },
  containerStatus: {
    height: responsiveHeight(7),
  },
  statusButton: {
    backgroundColor: WARNA_BLACK,
    height: responsiveHeight(4.5),
    width: responsiveWidth(23),
    marginRight: responsiveHeight(1),
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: responsiveWidth(2),
  },
  activeStatusButton: {
    backgroundColor: WARNA_UTAMA,
  },
  statusText: {
    color: WARNA_WHITE,
    fontWeight: 'bold',
  },
  activeStatusText: {
    color: WARNA_BLACK,
    fontWeight: 'bold',
  },
  noPesananText: {
    // marginTop: 16,
    alignSelf: 'center',
    fontSize: 16,
    color: WARNA_BORDER,
    // justifyContent: 'center',
    marginTop: responsiveHeight(30),
  },
  continerCard: {
    // flex: 1,
    // marginTop: responsiveHeight(-13),
    // backgroundColor: WARNA_DEEPYELLOW,
  },
  card: {
    backgroundColor: WARNA_WHITE,
    borderRadius: 8,
    paddingVertical: responsiveWidth(1),
    paddingHorizontal: responsiveHeight(2),
    width: '96%',
    marginVertical: responsiveWidth(2),
    marginHorizontal: responsiveHeight(1),
    // marginTop: responsiveHeight(3),
    marginBottom: responsiveWidth(1.5),
  },
  elevation: {
    shadowColor: WARNA_SEKUNDER,
    elevation: 5,
  },
  space: {
    paddingVertical: responsiveWidth(3),
    flexDirection: 'row',
  },
  img: {
    height: responsiveHeight(8),
    width: responsiveWidth(19),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: WARNA_SILVER
  },
  space2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  space1: {
    paddingHorizontal: responsiveWidth(2),
    justifyContent: 'space-around',
  },
  space3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  space4: {
    borderTopWidth: 1,
    borderColor: WARNA_BORDER,
    paddingVertical: responsiveWidth(2),
  },
  space5: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: responsiveHeight(0.5),
    justifyContent: 'space-between',
  },
  text1: {
    color: WARNA_SEKUNDER,
    fontWeight: 'bold',
  },
  text2: {
    color: WARNA_SEKUNDER,
  },

  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: responsiveHeight(3),
    // marginHorizontal: responsiveHeight(3)

  },
  filterButton: {
    // flex: 1,
    // borderWidth: 1,
    backgroundColor: WARNA_BLACK,
    borderColor: WARNA_BLACK,
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
    // marginRight: responsiveHeight(0.3)
    // width: '20%'
    paddingHorizontal: responsiveHeight(2.4)
  },
  activeFilterButton: {
    backgroundColor: WARNA_UTAMA,
  },
  filterButtonText: {
    color: WARNA_WHITE,
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500'
  },
  activeFilterButtonText: {
    color: WARNA_WHITE,
  },
  orderContainer: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    borderColor: WARNA_BORDER
  },
});

export default styles;
