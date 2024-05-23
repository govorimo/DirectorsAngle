import {StyleSheet} from 'react-native';

import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  margin,
  padding,
} from '../../../../styles';

const directorNameFontSize = 16;

const directorImageHeight = 80;
const directorImageWidth = 80;

export const styles = StyleSheet.create({
  biography: {
    color: colors.charcoal,
    fontSize: fontSize.small,
  },
  details: {
    color: colors.charcoal,
    fontSize: fontSize.small,
  },
  directorImage: {
    borderRadius: borderRadius.large,
    height: directorImageHeight,
    marginBottom: margin.xsmall,
    width: directorImageWidth,
  },
  itemContainer: {
    alignItems: 'flex-start',
    backgroundColor: colors.paleGray,
    borderRadius: borderRadius.medium,
    elevation: 1,
    flexDirection: 'column',
    marginVertical: margin.small,
    padding: padding.medium,
  },
  mainInfoContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: margin.medium,
  },
  mainTextInfoContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: margin.medium,
  },
  name: {
    color: colors.black,
    fontFamily: fontFamily.raleway.bold,
    fontSize: directorNameFontSize,
    marginBottom: margin.xsmall,
  },
});
