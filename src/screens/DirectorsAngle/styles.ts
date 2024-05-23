import {StyleSheet} from 'react-native';

import {padding} from '../../styles/spacing';

export const styles = () =>
  StyleSheet.create({
    directorsContainer: {flex: 1},
    list: {
      paddingHorizontal: padding.medium,
      paddingTop: padding.xsmall,
    },
  });
