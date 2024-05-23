import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const aspectRatio = 9 / 16;
const calculatedHeight = windowWidth * aspectRatio;

export const getStyles = () =>
  StyleSheet.create({
    webView: {
      flex: 1,
    },
    webViewContainer: {
      height: calculatedHeight,
      width: windowWidth,
    },
  });
