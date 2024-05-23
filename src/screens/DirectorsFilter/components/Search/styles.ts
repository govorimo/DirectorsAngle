import {StyleSheet} from 'react-native';

import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  margin,
  padding,
} from '../../../../styles';

const searchContainerHeight = 40;
const searchInputHeight = 40;

export const getStyles = () =>
  StyleSheet.create({
    clearText: {
      color: colors.lightBlue,
      fontFamily: fontFamily.raleway.regular,
      fontSize: fontSize.medium,
      marginLeft: margin.medium,
    },
    crossIconContainer: {marginRight: margin.small},
    directorsInput: {
      backgroundColor: colors.white,
      borderRadius: borderRadius.small,
      color: colors.black,
      flex: 1,
      fontFamily: fontFamily.raleway.medium,
      fontSize: fontSize.small,
      height: searchInputHeight,
      paddingLeft: padding.small,
    },
    searchContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      height: searchContainerHeight,
      justifyContent: 'space-between',
    },
    searchInputContainer: {
      alignItems: 'center',
      backgroundColor: colors.white,
      borderRadius: borderRadius.small,
      color: colors.black,
      flex: 1,
      flexDirection: 'row',
      fontFamily: fontFamily.raleway.medium,
      fontSize: fontSize.small,
      paddingLeft: padding.small,
    },
    textInputContent: {
      alignItems: 'center',
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
    },
  });
