import {StyleSheet} from 'react-native';

import {colors, fontFamily, fontSize, margin} from '../../../../styles';

export const getStyles = () =>
  StyleSheet.create({
    detailsName: {
      color: colors.black,
      fontFamily: fontFamily.raleway.bold,
      fontSize: fontSize.large,
      marginBottom: margin.medium,
    },
  });
