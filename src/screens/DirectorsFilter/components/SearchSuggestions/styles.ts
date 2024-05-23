import {StyleSheet} from 'react-native';

import {borderRadius, colors, fontFamily, padding} from '../../../../styles';

const suggestionsListHeight = 150;

export const getStyles = () =>
  StyleSheet.create({
    suggestionText: {
      borderBottomColor: colors.lightGray,
      borderBottomWidth: 1,
      fontFamily: fontFamily.raleway.medium,
      padding: padding.small,
    },
    suggestionsList: {
      backgroundColor: colors.white,
      borderColor: colors.lightGray,
      borderRadius: borderRadius.small,
      borderWidth: 1,
      maxHeight: suggestionsListHeight,
    },
  });
