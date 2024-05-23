import React, {useState} from 'react';

import {View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BY_COUNTRY_BORN, BY_DECADE_ACTIVE} from '../../constants';
import {useDirectorsStore} from '../../store/directorsStore';

import FilterSection from './components/FilterSection';
import Header from './components/Header';
import Search from './components/Search';
import SearchSuggestions from './components/SearchSuggestions';
import {getUniqueCountriesBorn, getUniqueDecades} from './dataUtils';
import useFilteredDirectors from './hooks';
import {getStyles} from './styles';

const FilterDirectors = () => {
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const {directors} = useDirectorsStore();

  const styles = getStyles();

  useFilteredDirectors(directors);

  const uniqueDecades = getUniqueDecades(directors);
  const uniqueCountriesBorn = getUniqueCountriesBorn(directors);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.bodyContainer}>
          <Search setSearchSuggestions={setSearchSuggestions} />
          {searchSuggestions.length > 0 && (
            <SearchSuggestions
              searchSuggestions={searchSuggestions}
              setSearchSuggestions={setSearchSuggestions}
              directors={directors}
            />
          )}
          <FilterSection
            title={BY_COUNTRY_BORN}
            items={uniqueCountriesBorn}
            directors={directors}
          />
          <FilterSection
            title={BY_DECADE_ACTIVE}
            items={uniqueDecades}
            directors={directors}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FilterDirectors;
