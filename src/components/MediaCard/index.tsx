import React, {useEffect} from 'react';

import {Text, Pressable, View, ImageSourcePropType} from 'react-native';
import FastImage, {Source} from 'react-native-fast-image';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import {MediaType} from '../../types/mediaType';
import {Media} from '../../types/models/media';
import {getImageSource} from '../../utils';
import {getStyles as getFilmCardStyles} from '../FilmCard/styles';
import {getStyles as getInterviewCardStyles} from '../InterviewCard/styles';

const initialOpacity = 0.1;
const maximumOpacity = 0.5;
const loadingAnimationDuration = 600;
const numOfReps = -1;

interface MediaCardProps {
  item: Media;
  loading?: boolean;
  onPress: () => void;
  titleColor?: string;
  yearColor?: string;
  showDescription?: boolean;
  defaultImage?: ImageSourcePropType;
  type: MediaType;
}

const MediaCard: React.FC<MediaCardProps> = ({
  item,
  loading,
  onPress,
  titleColor,
  yearColor,
  showDescription,
  defaultImage,
  type,
}) => {
  const styles =
    type === MediaType.INTERVIEW
      ? getInterviewCardStyles(titleColor as string, yearColor as string)
      : getFilmCardStyles(titleColor as string, yearColor as string);

  const source = getImageSource(
    item.thumbnail,
    defaultImage as ImageSourcePropType,
  );

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

  if (loading) {
    return (
      <Animated.View style={[styles.mediaItem, animatedStyle]}>
        <FastImage
          source={source as Source}
          style={styles.mediaThumbnail}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.mediaTextContainer}>
          <Text style={styles.mediaTitle}>{item.title}</Text>
          <Text style={styles.mediaYear}>{item.year}</Text>
          {showDescription && (
            <Text style={styles.mediaDescription}>{item.description}</Text>
          )}
        </View>
      </Animated.View>
    );
  }

  return (
    <Pressable onPress={onPress} style={styles.mediaItem}>
      <FastImage
        source={source as Source}
        style={styles.mediaThumbnail}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.mediaTextContainer}>
        <Text style={styles.mediaTitle}>{item.title}</Text>
        <Text style={styles.mediaYear}>{item.year}</Text>
        {showDescription && (
          <Text style={styles.mediaDescription}>{item.description}</Text>
        )}
      </View>
    </Pressable>
  );
};

export default MediaCard;
