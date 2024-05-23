import React from 'react';

import {useRoute} from '@react-navigation/native';
import {FlatList, View} from 'react-native';
import {useRecoilValue} from 'recoil';

import Error from '../../components/Error';
import Header from '../../components/Header';
import {tommy} from '../../constants';
import {
  directorsState,
  filteredDirectorsState,
  numOfFiltersActiveState,
  searchActiveState,
} from '../../store/DirectorsState';

import DirectorItem from './components/DirectorItem';
import useFetchDirectors from './hooks';
import {styles as getStyles} from './styles';

function DirectorsAngle() {
  const route = useRoute();
  const routeName = route.name;

  const directors = useRecoilValue(directorsState);
  const filteredDirectors = useRecoilValue(filteredDirectorsState);
  const numOfFiltersActive = useRecoilValue(numOfFiltersActiveState);
  const searchActive = useRecoilValue(searchActiveState);

  const {loading, error, retryFetchDirectors} = useFetchDirectors();

  const directorsData = () => {
    if (numOfFiltersActive > 0 || searchActive) {
      return filteredDirectors;
    } else {
      return directors;
    }
  };

  const styles = getStyles();

  if (error || !directors) {
    return <Error handleOnPressRetry={() => retryFetchDirectors()} />;
  }

  return (
    <View style={styles.directorsContainer}>
      <Header numOfFiltersActive={numOfFiltersActive} routeName={routeName} />
      <FlatList
        data={loading ? Array(10).fill(tommy) : directorsData()}
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        renderItem={({item}) => <DirectorItem item={item} loading={loading} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

export default DirectorsAngle;
