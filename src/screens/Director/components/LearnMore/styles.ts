import {StyleSheet} from 'react-native';

import {colors, fontFamily, margin} from '../../../../styles';

export const getStyles = () =>
  StyleSheet.create({
    linkText: {
      color: colors.linkBlue,
      fontFamily: fontFamily.raleway.medium,
      marginVertical: margin.xsmall,
    },
  });
