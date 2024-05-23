import {StyleSheet} from 'react-native';

import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  margin,
  padding,
} from '../../styles';

const errorThumbnailHeight = 190;
const errorThumbnailWidth = 280;

export const getErrorStyles = () =>
  StyleSheet.create({
    errorCardContainer: {
      backgroundColor: colors.white,
      borderRadius: borderRadius.medium,
      padding: padding.medium,
    },
    errorContainer: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    errorSubtitle: {
      fontFamily: fontFamily.raleway.regular,
      fontSize: fontSize.small,
    },
    errorThumbnail: {
      borderRadius: borderRadius.small,
      height: errorThumbnailHeight,
      marginBottom: margin.medium,
      width: errorThumbnailWidth,
    },
    errorTitle: {
      fontFamily: fontFamily.raleway.bold,
      fontSize: fontSize.small,
    },
    retryText: {
      color: colors.lightBlue,
      fontFamily: fontFamily.raleway.bold,
      fontSize: fontSize.medium,
      marginTop: margin.medium,
    },
  });
