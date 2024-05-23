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
    detailsBiography: {
      color: colors.charcoal,
      fontFamily: fontFamily.raleway.medium,
      fontSize: fontSize.small,
      lineHeight: lineHeight.small,
      marginTop: margin.medium,
    },

    expandOptionsText: {
      alignSelf: 'flex-start',
      color: colors.lightBlue,
      fontFamily: fontFamily.raleway.medium,
      fontSize: fontSize.small,
    },
  });
