import {StyleSheet, Dimensions} from 'react-native';

import {colors, padding} from '../../../../styles';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  verticalInterviewList: {
    backgroundColor: colors.charcoal,
    paddingTop: padding.large,
    width: screenWidth - 32,
  },
});
