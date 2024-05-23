import React from 'react';

import {Text, Pressable} from 'react-native';

import {openExternalLink} from '../../../../utils';

import {getStyles} from './styles';

interface LearnMoreProps {
  links: string[];
}

const LearnMoreLinks: React.FC<LearnMoreProps> = ({links}) => {
  const styles = getStyles();

  return (
    <>
      {links.map((learnMore, index) => (
        <Pressable key={index} onPress={() => openExternalLink(learnMore)}>
          <Text key={index} style={styles.linkText}>
            {learnMore}
          </Text>
        </Pressable>
      ))}
    </>
  );
};

export default LearnMoreLinks;
