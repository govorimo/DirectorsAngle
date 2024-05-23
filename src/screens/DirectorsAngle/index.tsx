import React from 'react';

import {useRoute} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import {FlatList, View} from 'react-native';

import Error from '../../components/Error';
import Header from '../../components/Header';
import {tommy} from '../../constants';
import directorsStore from '../../store/DirectorsState';

import DirectorItem from './components/DirectorItem';
import useFetchDirectors from './hooks';
import {styles as getStyles} from './styles';

const DirectorsAngle = observer(() => {
  const route = useRoute();
  const routeName = route.name;

  const directors = directorsStore.directors;
  const filteredDirectors = directorsStore.filteredDirectors;
  const numOfFiltersActive = directorsStore.numOfFilterActive;
  const searchActive = directorsStore.searchActive;

  const {loading, error, retryFetchDirectors} = useFetchDirectors();

  const directorsData = () => {
    console.log('Filtered Directors: ', filteredDirectors);
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
        data={loading ? Array(10).fill(tommy) : directorsStore.directorsData}
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        renderItem={({item}) => <DirectorItem item={item} loading={loading} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
});

export default DirectorsAngle;
