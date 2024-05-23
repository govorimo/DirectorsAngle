import React from 'react';

import {Text} from 'react-native';

import {getStyles} from './styles';

interface InfoDictionaryProps {
  caption: string;
  value: string | string[] | number;
}

const InfoDictionary: React.FC<InfoDictionaryProps> = ({caption, value}) => {
  const styles = getStyles();

  const renderValue = () => {
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    return value;
  };

  return (
    <Text style={styles.infoDictionaryContainer}>
      <Text style={styles.captionText}>{caption}</Text>
      <Text style={styles.valueText}>{renderValue()}</Text>
    </Text>
  );
};

export default InfoDictionary;
