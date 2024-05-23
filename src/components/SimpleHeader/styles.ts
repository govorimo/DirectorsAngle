import {StyleSheet} from 'react-native';

import {colors, fontFamily, fontSize, margin, padding} from '../../styles';
import {shadows} from '../../styles/shadows';

const headerHeight = 60;

export const styles = (
  statusBarHeight: number,
  showBackButton: boolean,
  titleIsBold: boolean,
) =>
  StyleSheet.create({
    backArrow: {marginLeft: margin.medium, marginRight: margin.medium},
    header: {
      alignItems: 'flex-end',
      backgroundColor: colors.white,
      elevation: 1,
      flexDirection: 'row',
      height: headerHeight + statusBarHeight,
      paddingBottom: padding.medium,
      ...shadows.basicShadow,
    },
    headerText: {
      color: colors.black,
      fontFamily: titleIsBold
        ? fontFamily.raleway.bold
        : fontFamily.raleway.regular,
      fontSize: fontSize.medium,
      paddingBottom: showBackButton ? padding.xsmall : 0,
      paddingHorizontal: showBackButton ? 0 : padding.large,
    },
  });
