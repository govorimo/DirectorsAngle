import {StyleSheet} from 'react-native';

import {colors, margin, padding} from '../../styles';
import {fontFamily} from '../../styles/typography';

const loadingAnimationHeight = 200;
const loadingAnimationWidth = 200;

const directorImageHeight = 290;

export const styles = () =>
  StyleSheet.create({
    animation: {
      height: loadingAnimationHeight,
      width: loadingAnimationWidth,
    },
    detailsContainer: {
      flex: 1,
    },
    detailsContent: {
      padding: padding.medium,
    },
    directorImage: {
      height: directorImageHeight,
      width: '100%',
    },
    helperText: {
      color: colors.charcoal,
      fontFamily: fontFamily.raleway.italic,
      marginBottom: margin.small,
      marginTop: margin.large,
    },
    loadingContainer: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
  });
