import {StyleSheet} from 'react-native';

import {
  colors,
  fontFamily,
  fontSize,
  lineHeight,
  margin,
} from '../../../../styles';

export const getStyles = () =>
  StyleSheet.create({
    description: {
      color: colors.charcoal,
      fontFamily: fontFamily.raleway.regular,
      fontSize: fontSize.small,
      lineHeight: lineHeight.small,
      marginVertical: margin.medium,
    },
    mainFilmInfoContainer: {
      marginHorizontal: margin.container,
      marginTop: margin.medium,
    },
    title: {
      fontFamily: fontFamily.raleway.medium,
      fontSize: fontSize.large,
      marginBottom: margin.small,
    },
  });
