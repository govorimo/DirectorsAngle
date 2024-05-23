import React from 'react';

import {View, Text} from 'react-native';

import InfoDictionary from '../../../../components/InfoDictionary';
import {FILM_FROM_CAPTION, SCREENPLAY_BY_CAPTION} from '../../../../constants';
import {Film} from '../../../../types/models/film';

import {getStyles} from './styles';

interface MainFilmInfoProps {
  film: Film;
}

const MainFilmInfo: React.FC<MainFilmInfoProps> = ({film}) => {
  const styles = getStyles();
  const shouldShowBasedOn = film?.basedOn?.length !== 0 && film?.basedOn;

  return (
    <View style={styles.mainFilmInfoContainer}>
      <Text style={styles.title}>{film.title}</Text>
      <InfoDictionary caption={FILM_FROM_CAPTION} value={film.year} />
      <Text style={styles.description}>{film.description}</Text>
      <InfoDictionary caption={SCREENPLAY_BY_CAPTION} value={film.screenplay} />
      {shouldShowBasedOn && (
        <InfoDictionary
          caption={film.basedOn[0]?.caption + ': '}
          value={film.basedOn[0].name}
        />
      )}
    </View>
  );
};

export default MainFilmInfo;
