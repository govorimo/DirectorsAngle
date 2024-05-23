import React from 'react';

import {RouteProp} from '@react-navigation/native';
import {View, ScrollView} from 'react-native';

import SimpleHeader from '../../components/SimpleHeader';
import Video from '../../components/Video';
import {RootStackParamList} from '../../types/navigation';

import Cast from './components/Cast';
import MainFilmInfo from './components/MainFilmInfo';
import Trivia from './components/Trivia';
import {getStyles} from './styles';

type FilmRouteProp = RouteProp<RootStackParamList, 'Film'>;

interface FilmProps {
  route: FilmRouteProp;
}

const Film: React.FC<FilmProps> = ({route}) => {
  const {film} = route.params;

  const styles = getStyles();

  return (
    <View style={styles.container}>
      <SimpleHeader title={film.title} showBackButton />
      <ScrollView>
        <Video link={film.trailerLink} />
        <MainFilmInfo film={film} />
        <Cast cast={film.cast} />
        <Trivia trivia={film.trivia} />
      </ScrollView>
    </View>
  );
};

export default Film;
