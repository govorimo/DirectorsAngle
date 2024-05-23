import React from 'react';

import {View, Text} from 'react-native';

import {TRIVIA} from '../../../../constants';

import {getStyles} from './styles';

interface TriviaProps {
  trivia: string[];
}

const Trivia: React.FC<TriviaProps> = ({trivia}) => {
  const styles = getStyles();

  return (
    <View style={styles.triviaContainer}>
      <Text style={styles.sectionTitle}>{TRIVIA}</Text>

      <View style={styles.sectionContainer}>
        {trivia.map((triviaItem, index) => (
          <Text key={index} style={styles.description}>
            {triviaItem}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Trivia;
