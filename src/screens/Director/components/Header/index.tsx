import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {Text, Pressable, Animated} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import BackArrow from '../../../../../assets/icons/back-arrow.svg';
import {colors} from '../../../../styles';

import {getStyles} from './styles';

const startingYforOpacityChange = 200;
const endingYforOpacityChange = 220;

const startingOpacity = 0;
const endingOpacity = 1;

const startingYforBackgroundColorChange = 200;
const endingYforBackgroundColorChange = 220;

const startingBackgroundColor = colors.transparent;
const endingBackgroundColor = colors.white;

interface HeaderProps {
  scrollY: Animated.Value;
  directorName: string;
}

const Header: React.FC<HeaderProps> = ({scrollY, directorName}) => {
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  const styles = getStyles(statusBarHeight);

  const handleBackArrowPress = () => {
    navigation.goBack();
  };

  const opacity = scrollY.interpolate({
    inputRange: [startingYforOpacityChange, endingYforOpacityChange],
    outputRange: [startingOpacity, endingOpacity],
    extrapolate: 'clamp',
  }) as Animated.AnimatedInterpolation<number>;

  const backgroundColor = scrollY.interpolate({
    inputRange: [
      startingYforBackgroundColorChange,
      endingYforBackgroundColorChange,
    ],
    outputRange: [startingBackgroundColor, endingBackgroundColor],
    extrapolate: 'clamp',
  }) as Animated.AnimatedInterpolation<string>;

  return (
    <Animated.View style={[styles.header, {backgroundColor}]}>
      <Pressable onPress={handleBackArrowPress} style={styles.backArrow}>
        <BackArrow />
      </Pressable>
      <Animated.View style={{opacity}}>
        <Text style={styles.headerText}>{directorName}</Text>
      </Animated.View>
    </Animated.View>
  );
};

export default Header;
