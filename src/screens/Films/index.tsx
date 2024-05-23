import React from 'react';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {FlatList, View} from 'react-native';

import Error from '../../components/Error';
import FilmCard from '../../components/FilmCard';
import Header from '../../components/Header';
import {room} from '../../constants';
import {colors} from '../../styles';
import {Film} from '../../types/models/film';
import {RootStackParamList, Routes} from '../../types/navigation';

import useFetchFilms from './hooks';
import {styles as getStyles} from './styles';

function Films() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const {films, loading, error, retryFetchFilms} = useFetchFilms();

  const styles = getStyles();

  const onFilmCardPress = (film: Film) => {
    navigation.navigate(Routes.FILM, {film});
  };

  if (error) {
    return <Error handleOnPressRetry={() => retryFetchFilms()} />;
  }

  return (
    <View style={styles.filmsContainer}>
      <Header />
      <FlatList
        data={loading ? Array(10).fill(room) : films}
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        renderItem={({item}) => (
          <FilmCard
            film={item}
            titleColor={colors.black}
            loading={loading}
            yearColor={colors.mediumGray}
            onPress={() => {
              onFilmCardPress(item);
            }}
          />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

export default Films;
