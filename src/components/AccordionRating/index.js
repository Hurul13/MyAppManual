import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
  FlatList,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import accordionRating from '../../utils/accordionRating';

const AccordionRating = ({title}) => {
  const [showContent, setShowContent] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;

  const toggleListItem = () => {
    const config = {
      duration: 300,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
    setShowContent(!showContent);
  };
  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const ListUserReview = ({list}) => {
    return (
      <View style={styles.bodyContainer}>
        {/* <IconMaterial
          name="account-child-circle"
          size={35}
          style={styles.iconUser}
        /> */}
        <Image source={list.imageUser} style={styles.imgUser} />
        <View style={styles.space1}>
          <Text style={styles.body}>{list.nameUser}</Text>
          <View style={styles.star}>
            <IconMaterial name="star" size={20} style={styles.iconStar} />
            <IconMaterial name="star" size={20} style={styles.iconStar} />
            <IconMaterial name="star" size={20} style={styles.iconStar} />
            <IconMaterial name="star" size={20} style={styles.iconStar} />
            <IconMaterial name="star" size={20} style={styles.iconStar} />
          </View>
          <Text style={styles.textRev}>{list.review}</Text>
          <View style={styles.space2}>
            <Image source={list.imageReview} style={styles.imgRev} />
            <Image source={list.imageReview} style={styles.imgRev} />
          </View>
          <Text style={styles.textTime}>{list.time}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleListItem()}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.space}>
            {/* <View styel={styles.star}>
            </View> */}
            <IconMaterial name="star" size={20} style={styles.iconStar} />
            <IconMaterial name="star" size={20} style={styles.iconStar} />
            <IconMaterial name="star" size={20} style={styles.iconStar} />
            <IconMaterial name="star" size={20} style={styles.iconStar} />
            <IconMaterial name="star" size={20} style={styles.iconStar} />
            <Animated.View style={{transform: [{rotateZ: arrowTransform}]}}>
              <IconMaterial name="menu-down" size={26} style={styles.icon} />
            </Animated.View>
          </View>
        </View>
      </TouchableOpacity>
      {showContent && (
        <FlatList
          data={accordionRating}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ListUserReview list={item} />}

          // renderItem={({item}) => (
          //   <AccordionRating
          //     // title={'Review'}
          //     nameUser={item.nameUser}
          //     imageUser={item.imageReview}
          //     review={item.review}
          //     imageReview={item.imageReview}
          //     time={item.time}
          //   />
          // )}
        />
      )}
      {/* <View style={styles.bodyContainer}>
          <IconMaterial
            name="account-child-circle"
            size={35}
            style={styles.iconUser}
          />
          <Image>{imageUser}</Image>
          <View style={styles.space1}>
            <Text style={styles.body}>{nameUser}</Text>
            <View style={styles.star}>
              <IconMaterial name="star" size={20} style={styles.iconStar} />
              <IconMaterial name="star" size={20} style={styles.iconStar} />
              <IconMaterial name="star" size={20} style={styles.iconStar} />
              <IconMaterial name="star" size={20} style={styles.iconStar} />
              <IconMaterial name="star" size={20} style={styles.iconStar} />
            </View>
            <Text style={styles.textRev}>{review}</Text>
            <Image>{imageReview}</Image>
            <Text style={styles.textTime}>{time}</Text>
          </View>
        </View> */}
    </View>
  );
};

export default AccordionRating;
