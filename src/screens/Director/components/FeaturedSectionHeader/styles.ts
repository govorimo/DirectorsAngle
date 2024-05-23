import {StyleSheet} from 'react-native';

import {colors, fontFamily, fontSize, margin} from '../../../../styles';

const horizontalMarginForArrows = 50;

export const getStyles = () =>
  StyleSheet.create({
    headerContainer: {
      alignItems: 'center',
      alignSelf: 'center',
      flexDirection: 'row',
      marginTop: margin.medium,
    },
    listTitle: {
      alignSelf: 'center',
      color: colors.white,
      fontFamily: fontFamily.raleway.medium,
      fontSize: fontSize.medium,
      marginHorizontal: horizontalMarginForArrows,
    },
  });
