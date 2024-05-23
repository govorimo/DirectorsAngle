import {Platform, StyleSheet} from 'react-native';

import {
  colors,
  fontFamily,
  fontSize,
  margin,
  padding,
  spacing,
} from '../../styles';
import {shadows} from '../../styles/shadows';

const headerHeight = 60;

const numOfFiltersCircleHeight = 18;
const numOfFiltersCircleWidth = 18;

const numOfFiltersCircleTextMarginTop = Platform.OS === 'android' ? -3 : 0;

export const getStyles = (statusBarHeight: number) =>
  StyleSheet.create({
    filterPressable: {
      flexDirection: 'row',
      marginBottom: margin.xsmall,
      position: 'relative',
    },
    header: {
      alignContent: 'center',
      alignItems: 'flex-end',
      backgroundColor: colors.white,
      elevation: 1,
      flexDirection: 'row',
      height: headerHeight + statusBarHeight,
      justifyContent: 'space-between',
      paddingBottom: padding.medium,
      paddingHorizontal: padding.large,
      ...shadows.basicShadow,
    },
    headerText: {
      color: colors.black,
      fontFamily: fontFamily.raleway.bold,
      fontSize: fontSize.medium,
    },
    numOfFitersCircle: {
      backgroundColor: colors.lightBlue,
      borderRadius: numOfFiltersCircleHeight / 2,
      height: numOfFiltersCircleHeight,
      justifyContent: 'center',
      left: spacing.medium,
      position: 'absolute',
      top: spacing.xsmall,
      width: numOfFiltersCircleWidth,
    },
    numOfFitersCircleText: {
      color: colors.white,
      fontFamily: fontFamily.raleway.bold,
      marginTop: numOfFiltersCircleTextMarginTop,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
  });
