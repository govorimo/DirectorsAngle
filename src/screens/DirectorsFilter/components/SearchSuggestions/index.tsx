import React, {Dispatch, SetStateAction} from 'react';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {View, Text, Pressable, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';

import {AppDispatch} from '../../../../store/store';
import {Director} from '../../../../types/models/director';
import {RootStackParamList} from '../../../../types/navigation';
import {
  resetNumOfFiltersActiveAction,
  setFilteredDirectorsAction,
  setSearchActiveAction,
} from '../../../DirectorsAngle/actions';
import {resetFilters} from '../../actions';
import {searchDirectors} from '../../searchUtils';

import {getStyles} from './styles';

interface SearchSuggestionsProps {
  directors: Director[];
  searchSuggestions: string[];
  setSearchSuggestions: Dispatch<SetStateAction<string[]>>;
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  directors,
  searchSuggestions,
  setSearchSuggestions,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const setSearchActive = (isSearchActive: boolean) =>
    dispatch(setSearchActiveAction(isSearchActive));

  const setFilteredDirectors = (filterDirectors: Director[]) =>
    dispatch(setFilteredDirectorsAction(filterDirectors));

  const resetNumOfFiltersActive = () =>
    dispatch(resetNumOfFiltersActiveAction());

  const resetDirectorsFilter = () => dispatch(resetFilters());

  const styles = getStyles();

  const handleSuggestionPress = (suggestion: string) => {
    const searchedDirector = searchDirectors(directors, suggestion);
    setFilteredDirectors(searchedDirector);

    setSearchSuggestions([]);
    setSearchActive(true);

    navigation.goBack();

    resetDirectorsFilter();
    resetNumOfFiltersActive();
  };

  return (
    <View style={styles.suggestionsList}>
      <ScrollView>
        {searchSuggestions.map((item, index) => (
          <Pressable key={index} onPress={() => handleSuggestionPress(item)}>
            <Text style={styles.suggestionText}>{item}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchSuggestions;
