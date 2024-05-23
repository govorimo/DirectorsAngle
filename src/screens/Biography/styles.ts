import {StyleSheet} from 'react-native';

import {colors, fontFamily, fontSize, lineHeight, margin} from '../../styles';

export const styles = StyleSheet.create({
  biographyContainer: {
    marginTop: margin.small,
    paddingHorizontal: margin.medium,
  },
  biographySubtitle: {
    fontFamily: fontFamily.raleway.medium,
    fontSize: fontSize.medium,
  },
  detailsBiography: {
    color: colors.charcoal,
    fontFamily: fontFamily.raleway.medium,
    fontSize: fontSize.small,
    lineHeight: lineHeight.small,
    marginTop: margin.medium,
  },
  detailsContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
