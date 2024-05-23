import React from 'react';

import {View} from 'react-native';
import WebView from 'react-native-webview';

import {getStyles} from './styles';

interface VideoProps {
  link: string;
}

const Video: React.FC<VideoProps> = ({link}) => {
  const styles = getStyles();

  return (
    <View style={styles.webViewContainer}>
      <WebView
        style={styles.webView}
        source={{
          uri: link,
        }}
      />
    </View>
  );
};

export default Video;
