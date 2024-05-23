import {StyleSheet} from 'react-native';

import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  margin,
  padding,
} from '../../styles';

const interviewCardHeight = 80;
const interviewCardWidth = 80;

export const getStyles = (titleColor: string, yearColor: string) =>
  StyleSheet.create({
    mediaDescription: {
      fontSize: fontSize.small,
    },
    mediaItem: {
      alignItems: 'center',
      borderBottomColor: colors.lightGray,
      borderBottomWidth: 1,
      borderRadius: borderRadius.medium,
      flexDirection: 'row',
      marginBottom: margin.small,
      padding: padding.small,
    },
    mediaTextContainer: {
      alignSelf: 'flex-start',
      flex: 1,
      marginLeft: margin.small,
    },
    mediaThumbnail: {
      borderRadius: borderRadius.medium,
      height: interviewCardHeight,
      width: interviewCardWidth,
    },
    mediaTitle: {
      color: titleColor || 'white',
      fontFamily: fontFamily.raleway.bold,
      fontSize: fontSize.small,
    },
    mediaYear: {
      color: yearColor || colors.lightGray,
      fontFamily: fontFamily.raleway.medium,
    },
  });
