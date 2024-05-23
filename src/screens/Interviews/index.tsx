import React from 'react';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {FlatList, View} from 'react-native';

import Error from '../../components/Error';
import Header from '../../components/Header';
import InterviewCard from '../../components/InterviewCard';
import {tommyInterview} from '../../constants';
import {colors} from '../../styles';
import {Interview} from '../../types/models/interview';
import {RootStackParamList, Routes} from '../../types/navigation';

import useFetchInterviews from './hooks';
import {styles as getStyles} from './styles';

function Interviews() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const {interviews, loading, error, retryFetchInterviews} =
    useFetchInterviews();

  const styles = getStyles();

  const onInterviewCardPress = (interview: Interview) => {
    navigation.navigate(Routes.INTERVIEW, {interview});
  };

  if (error) {
    return <Error handleOnPressRetry={() => retryFetchInterviews()} />;
  }

  return (
    <View style={styles.interviewsContainer}>
      <Header />
      <FlatList
        data={loading ? Array(10).fill(tommyInterview) : interviews}
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        renderItem={({item}) => (
          <InterviewCard
            interview={item}
            loading={loading}
            titleColor={colors.black}
            yearColor={colors.mediumGray}
            onPress={() => {
              onInterviewCardPress(item);
            }}
            showDescription
          />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

export default Interviews;
