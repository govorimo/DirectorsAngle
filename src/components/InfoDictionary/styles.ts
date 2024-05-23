import {StyleSheet} from 'react-native';

import {colors, fontFamily, fontSize, margin} from '../../styles';

export const getStyles = () =>
  StyleSheet.create({
    captionText: {color: colors.mediumGray},
    infoDictionaryContainer: {
      fontFamily: fontFamily.raleway.regular,
      fontSize: fontSize.small,
      marginBottom: margin.xsmall,
    },
    valueText: {color: colors.black},
  });
