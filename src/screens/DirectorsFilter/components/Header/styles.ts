import {StyleSheet} from 'react-native';

import {colors, fontFamily, fontSize, margin} from '../../../../styles';

const headerHeight = 60;

export const getStyles = () =>
  StyleSheet.create({
    filterDoneText: {
      color: colors.lightBlue,
      fontFamily: fontFamily.raleway.bold,
      fontSize: fontSize.medium,
    },
    header: {
      alignItems: 'center',
      flexDirection: 'row',
      height: headerHeight,
      justifyContent: 'space-between',
      marginHorizontal: margin.large,
    },
    headerText: {
      color: colors.white,
      fontFamily: fontFamily.raleway.bold,
      fontSize: fontSize.large,
    },
  });
