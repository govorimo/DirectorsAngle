import React from 'react';

import {RouteProp} from '@react-navigation/native';
import {Text, ScrollView, View} from 'react-native';

import SimpleHeader from '../../components/SimpleHeader';
import {BIOGRAPHY} from '../../constants';
import {RootStackParamList} from '../../types/navigation';

import {styles} from './styles';

type BiographyRouteProp = RouteProp<RootStackParamList, 'Biography'>;
interface BiographyProps {
  route: BiographyRouteProp;
}

function Biography({route}: BiographyProps) {
  const director = route.params.director;

  return (
    <View style={styles.detailsContainer}>
      <SimpleHeader title={director.name} showBackButton />
      <ScrollView style={styles.biographyContainer}>
        <Text style={styles.biographySubtitle}>{BIOGRAPHY}</Text>
        <Text style={styles.detailsBiography}>{director.longBiography}</Text>
      </ScrollView>
    </View>
  );
}

export default Biography;
