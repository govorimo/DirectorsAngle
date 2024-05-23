import React from 'react';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';

import FilmCard from '../../../../components/FilmCard';
import InterviewCard from '../../../../components/InterviewCard';
import {Media} from '../../../../types/models/media';
import {RootStackParamList, Routes} from '../../../../types/navigation';

import {styles} from './styles';

interface CardsListProps {
  data: Media[];
  type: 'Interviews' | 'Films';
}

const CardsList: React.FC<CardsListProps> = ({data, type}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = (item: Media) => {
    if (type === 'Interviews') {
      navigation.navigate(Routes.INTERVIEW, {interview: item});
    } else {
      navigation.navigate(Routes.FILM, {film: item});
    }
  };

  const renderItem = ({item}: {item: Media}) =>
    type === 'Interviews' ? (
      <InterviewCard interview={item} onPress={() => handlePress(item)} />
    ) : (
      <FilmCard film={item} onPress={() => handlePress(item)} />
    );

  return (
    <FlatList
      data={data}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={styles.verticalInterviewList}
      scrollEnabled={false}
      renderItem={renderItem}
    />
  );
};

export default CardsList;
