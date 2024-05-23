import {StyleSheet} from 'react-native';

import {colors, margin} from '../../styles';

export const getStyles = () =>
  StyleSheet.create({
    bodyContainer: {marginHorizontal: margin.large, marginTop: margin.large},
    container: {
      backgroundColor: colors.black,
      flex: 1,
    },
  });
