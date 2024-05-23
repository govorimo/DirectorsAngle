import {StyleSheet} from 'react-native';

import {borderRadius, colors, fontFamily, margin} from '../../../../styles';

export const styles = StyleSheet.create({
  helperText: {
    color: colors.charcoal,
    fontFamily: fontFamily.raleway.italic,
    marginBottom: margin.xsmall,
    marginTop: margin.large,
  },
  listContainer: {
    backgroundColor: colors.charcoal,
    borderRadius: borderRadius.medium,
  },
  mediaList: {
    borderRadius: borderRadius.medium,
  },
});
