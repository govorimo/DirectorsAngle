import {StyleSheet} from 'react-native';

import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  margin,
  padding,
} from '../../../../styles';

export const getStyles = () =>
  StyleSheet.create({
    activeOptionField: {
      alignItems: 'center',
      backgroundColor: colors.lightBlue,
      borderRadius: borderRadius.small,
      elevation: 3,
      justifyContent: 'center',
      margin: margin.xsmall,
      paddingHorizontal: padding.container,
      paddingVertical: padding.xsmall,
      shadowColor: colors.black,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    optionField: {
      alignItems: 'center',
      backgroundColor: colors.white,
      borderRadius: borderRadius.small,
      elevation: 3,
      justifyContent: 'center',
      margin: margin.xsmall,
      paddingHorizontal: padding.container,
      paddingVertical: padding.xsmall,
      shadowColor: colors.black,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    optionText: {
      color: colors.black,
      fontFamily: fontFamily.raleway.bold,
    },
    optionsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      marginLeft: -margin.xsmall,
      marginTop: margin.medium,
    },
    sectionContainer: {
      marginTop: margin.medium,
    },
    sectionTitleText: {
      color: colors.white,
      fontFamily: fontFamily.raleway.bold,
      fontSize: fontSize.medium,
    },
  });
