import {StyleSheet} from 'react-native';

import {
  colors,
  fontFamily,
  fontSize,
  lineHeight,
  margin,
  padding,
} from '../../../../styles';

export const getStyles = () =>
  StyleSheet.create({
    description: {
      color: colors.charcoal,
      fontFamily: fontFamily.raleway.regular,
      fontSize: fontSize.small,
      lineHeight: lineHeight.small,
      marginBottom: margin.medium,
    },
    sectionContainer: {marginTop: margin.medium},
    sectionTitle: {
      color: colors.mediumGray,
      fontFamily: fontFamily.raleway.medium,
      fontSize: fontSize.medium,
      marginTop: margin.medium,
    },
    triviaContainer: {paddingHorizontal: padding.container},
  });
