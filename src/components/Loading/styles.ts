import {StyleSheet} from 'react-native';

const loadingAnimationHeight = 200;
const loadingAnimationWidth = 200;

export const getLoadingStyles = () =>
  StyleSheet.create({
    animation: {
      height: loadingAnimationHeight,
      width: loadingAnimationWidth,
    },
    loadingContainer: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
  });
