import {StyleSheet} from 'react-native';

import {margin, padding} from '../../styles';

export const styles = () =>
  StyleSheet.create({
    filmsContainer: {flex: 1},
    list: {
      marginTop: margin.xsmall,
      paddingHorizontal: padding.medium,
    },
  });
