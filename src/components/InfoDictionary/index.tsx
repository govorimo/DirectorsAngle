import React from 'react';

import {Text} from 'react-native';

import {getStyles} from './styles';

interface InfoDictionaryProps {
  caption: string;
  value: string | string[] | number;
}

const InfoDictionary: React.FC<InfoDictionaryProps> = ({caption, value}) => {
  const styles = getStyles();

  return (
    <Text style={styles.infoDictionaryContainer}>
      <Text style={styles.captionText}>{caption}</Text>
      <Text style={styles.valueText}>{value}</Text>
    </Text>
  );
};

export default InfoDictionary;
