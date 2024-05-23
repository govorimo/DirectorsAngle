import React from 'react';

import {View, Text} from 'react-native';

import {MAIN_ROLES} from '../../../../constants';

import {getStyles} from './styles';

interface CastDetailsProps {
  cast: {
    [actor: string]: string;
  };
}

const Cast: React.FC<CastDetailsProps> = ({cast}) => {
  const styles = getStyles();

  return (
    <View style={styles.castContainer}>
      <Text style={styles.sectionTitle}>{MAIN_ROLES}</Text>

      <View style={styles.sectionContainer}>
        {Object.entries(cast).map(([actor, character], index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.actor}>{actor}</Text>
            <Text style={styles.character}>{character}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Cast;
