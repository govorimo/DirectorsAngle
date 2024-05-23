import {StyleSheet} from 'react-native';

import {
  colors,
  fontFamily,
  fontSize,
  margin,
  padding,
} from '../../../../styles';

const headerHeight = 60;
const headerTextPaddingBottom = 5;

export const getStyles = (statusBarHeight: number) =>
  StyleSheet.create({
    header: {
      alignItems: 'flex-end',
      backgroundColor: colors.transparent,
      flexDirection: 'row',
      flex: 1,
      height: headerHeight + statusBarHeight,
      paddingBottom: padding.small,
      paddingLeft: padding.medium,
      paddingTop: padding.large,
      position: 'absolute',
      width: '100%',
      zIndex: 1,
    },
    headerText: {
      color: colors.black,
      fontFamily: fontFamily.raleway.bold,
      fontSize: fontSize.medium,
      marginLeft: margin.medium,
      paddingBottom: headerTextPaddingBottom,
      zIndex: 2,
    },
  });
