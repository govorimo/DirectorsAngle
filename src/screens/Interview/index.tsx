import React from 'react';

import {RouteProp} from '@react-navigation/native';
import {Text, View, ScrollView} from 'react-native';

import InfoDictionary from '../../components/InfoDictionary';
import SimpleHeader from '../../components/SimpleHeader';
import Video from '../../components/Video';
import { INTERVIEW, INTERVIEWED_BY_CAPTION, YEAR_CAPTION } from '../../constants';
import {RootStackParamList} from '../../types/navigation';

import {getStyles} from './styles';

type InterviewRouteProp = RouteProp<RootStackParamList, 'Interview'>;

interface InterviewProps {
  route: InterviewRouteProp;
}

const Interview: React.FC<InterviewProps> = ({route}) => {
  const styles = getStyles();

  const {interview} = route.params;

  return (
    <View style={styles.container}>
      <SimpleHeader title={INTERVIEW} showBackButton />
      <ScrollView>
        <Video link={interview.link} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{interview.title}</Text>
          <View style={styles.interviewInfoContainer}>
            <InfoDictionary caption={YEAR_CAPTION} value={interview.year} />
            <InfoDictionary
              caption={INTERVIEWED_BY_CAPTION}
              value={interview.interviewer}
            />
          </View>
          <Text style={styles.description}>{interview.info}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Interview;
