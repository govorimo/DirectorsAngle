import React from 'react';

import {Pressable, SafeAreaView, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import {
  CHECK_INTERNET_CONNECTION,
  DIRECTORS_ANGLE,
  ERROR_LOADING_DIRECTOR_DATA,
  images,
  RETRY,
} from '../../constants';
import SimpleHeader from '../SimpleHeader';

import {getErrorStyles} from './styles';

interface ErrorProps {
  handleOnPressRetry: () => void;
}

const Error: React.FC<ErrorProps> = ({handleOnPressRetry}) => {
  const styles = getErrorStyles();

  return (
    <>
      <SimpleHeader
        title={DIRECTORS_ANGLE}
        showBackButton={false}
        titleIsBold
      />
      <SafeAreaView style={styles.errorContainer}>
        <View style={styles.errorCardContainer}>
          <FastImage
            source={images.tommyError}
            style={styles.errorThumbnail}
            resizeMode={FastImage.resizeMode.cover}
          />
          <Pressable onPress={handleOnPressRetry}>
            <Text style={styles.errorTitle}>{ERROR_LOADING_DIRECTOR_DATA}</Text>
            <Text style={styles.errorSubtitle}>
              {CHECK_INTERNET_CONNECTION}
            </Text>
            <Text style={styles.retryText}>{RETRY}</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Error;
