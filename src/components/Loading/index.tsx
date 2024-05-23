import React from 'react';

import LottieView from 'lottie-react-native';
import {SafeAreaView} from 'react-native';

import {animations, DIRECTORS_ANGLE} from '../../constants';
import SimpleHeader from '../SimpleHeader';

import {getLoadingStyles} from './styles';

const Loading = () => {
  const styles = getLoadingStyles();

  return (
    <>
      <SimpleHeader
        title={DIRECTORS_ANGLE}
        showBackButton={false}
        titleIsBold
      />
      <SafeAreaView style={styles.loadingContainer}>
        <LottieView
          source={animations.film}
          autoPlay
          loop
          style={styles.animation}
        />
      </SafeAreaView>
    </>
  );
};

export default Loading;
