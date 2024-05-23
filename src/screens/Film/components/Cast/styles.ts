import {StyleSheet} from 'react-native';

import {
  colors,
  fontFamily,
  fontSize,
  margin,
  padding,
} from '../../../../styles';

export const getStyles = () =>
  StyleSheet.create({
    actor: {
      color: colors.mediumGray,
      fontSize: fontSize.small,
    },
    castContainer: {paddingHorizontal: padding.container},
    character: {
      fontFamily: fontFamily.raleway.medium,
      fontSize: fontSize.small,
    },
    item: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: margin.small,
    },
    sectionContainer: {marginTop: margin.medium},
    sectionTitle: {
      color: colors.mediumGray,
      fontFamily: fontFamily.raleway.medium,
      fontSize: fontSize.medium,
      marginTop: margin.medium,
    },
  });
