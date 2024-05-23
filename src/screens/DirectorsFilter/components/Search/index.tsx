import React, {Dispatch, SetStateAction, useState} from 'react';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useAtomValue, useSetAtom} from 'jotai';
import {View, TextInput, Pressable, Text} from 'react-native';

import CrossIcon from '../../../../../assets/icons/cross.svg';
import SearchIcon from '../../../../../assets/icons/search.svg';
import {DIRECTOR_NAME, SEARCH} from '../../../../constants';
import {
  directorsAtom,
  filteredDirectorsAtom,
  resetNumOfFiltersActiveAtom,
  searchActiveAtom,
} from '../../../../store/DirectorsAtom';
import {resetDirectorsFilterAtom} from '../../../../store/DirectorsFilterAtom';
import {RootStackParamList} from '../../../../types/navigation';
import {getSearchSuggestions, searchDirectors} from '../../searchUtils';

import {getStyles} from './styles';

interface SearchProps {
  setSearchSuggestions: Dispatch<SetStateAction<string[]>>;
}

const Search: React.FC<SearchProps> = ({setSearchSuggestions}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const directors = useAtomValue(directorsAtom);

  const setSearchActive = useSetAtom(searchActiveAtom);
  const setFilteredDirectors = useSetAtom(filteredDirectorsAtom);
  const resetNumOfFiltersActive = useSetAtom(resetNumOfFiltersActiveAtom);
  const resetDirectorsFilter = useSetAtom(resetDirectorsFilterAtom);

  const styles = getStyles();

  const [searchQuery, setSearchQuery] = useState('');
  const [displayClearSearch, setDisplayClearSearch] = useState(false);

  const handleSearchInputChange = (query: string) => {
    setSearchQuery(query);
    filterDirectors(query);

    if (query !== '') {
      setDisplayClearSearch(true);
    } else {
      setDisplayClearSearch(false);
    }

    if (query) {
      displaySearchSuggestions(query);
    } else {
      setSearchSuggestions([]);
    }
  };

  const displaySearchSuggestions = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const suggestions = getSearchSuggestions(directors, lowerCaseQuery);
    setSearchSuggestions(suggestions);
  };

  const handleClearPress = () => {
    setDisplayClearSearch(false);
    setSearchQuery('');
    setSearchSuggestions([]);
  };

  const handleSearchPress = (query: string) => {
    filterDirectors(query);

    setSearchSuggestions([]);
    setDisplayClearSearch(true);

    setSearchActive(true);
    resetDirectorsFilter();
    resetNumOfFiltersActive();

    navigation.goBack();
  };

  const filterDirectors = (query: string) => {
    const filtered = searchDirectors(directors, query);

    setFilteredDirectors(filtered);
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputContainer}>
        <SearchIcon />
        <View style={styles.textInputContent}>
          <TextInput
            placeholder={DIRECTOR_NAME}
            style={styles.directorsInput}
            value={searchQuery}
            onChangeText={handleSearchInputChange}
          />
          {displayClearSearch ? (
            <Pressable
              onPress={handleClearPress}
              style={styles.crossIconContainer}>
              <CrossIcon width={14} height={14} />
            </Pressable>
          ) : null}
        </View>
      </View>
      <Pressable onPress={() => handleSearchPress(searchQuery)}>
        <Text style={styles.clearText}>{SEARCH}</Text>
      </Pressable>
    </View>
  );
};

export default Search;
