import React, {useEffect} from 'react';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import {images} from '../../../../constants';
import {Director} from '../../../../types/models/director';
import {RootStackParamList, Routes} from '../../../../types/navigation';

import {styles} from './styles';

const initialOpacity = 0.1;
const maximumOpacity = 0.5;
const loadingAnimationDuration = 600;
const numOfReps = -1;

interface DirectorItemProps {
  item: Director;
  loading: boolean;
}

const DirectorItem = ({item, loading}: DirectorItemProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const opacity = useSharedValue(initialOpacity);

  useEffect(() => {
    opacity.value = withRepeat(
      withTiming(maximumOpacity, {
        duration: loadingAnimationDuration,
        easing: Easing.linear,
      }),
      numOfReps,
      true,
    );
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const navigateToDirector = () => {
    navigation.navigate(Routes.DIRECTOR, {slug: item.slug});
  };

  if (loading) {
    return (
      <Animated.View style={[styles.itemContainer, animatedStyle]}>
        <View style={styles.mainInfoContainer}>
          <Image source={images.tommy} style={styles.directorImage} />
          <View style={styles.mainTextInfoContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.details}>
              {item.city}, {item.country}
            </Text>
            <Text style={styles.details}>{item.yearsActive}</Text>
          </View>
        </View>
        <Text style={styles.biography}>{item.biography}</Text>
      </Animated.View>
    );
  }

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={navigateToDirector}>
      <View style={styles.mainInfoContainer}>
        <Image source={{uri: item.image}} style={styles.directorImage} />
        <View style={styles.mainTextInfoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.details}>
            {item.city}, {item.country}
          </Text>
          <Text style={styles.details}>{item.yearsActive}</Text>
        </View>
      </View>
      <Text style={styles.biography}>{item.biography}</Text>
    </TouchableOpacity>
  );
};

export default DirectorItem;
