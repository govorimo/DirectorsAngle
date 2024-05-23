import {StyleSheet} from 'react-native';

import {
  colors,
  fontFamily,
  fontSize,
  lineHeight,
  margin,
  padding,
} from '../../styles';

export const getStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      flex: 1,
    },
    description: {
      color: colors.charcoal,
      fontFamily: fontFamily.raleway.regular,
      fontSize: fontSize.small,
      lineHeight: lineHeight.small,
    },
    detailsContainer: {
      padding: padding.container,
    },
    interviewInfoContainer: {marginVertical: margin.medium},
    title: {
      color: colors.black,
      fontFamily: fontFamily.raleway.medium,
      fontSize: fontSize.large,
      marginBottom: margin.small,
    },
  });
