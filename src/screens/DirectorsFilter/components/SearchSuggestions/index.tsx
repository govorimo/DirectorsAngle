import React, {Dispatch, SetStateAction} from 'react';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {View, Text, Pressable, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';

import {Director} from '../../../../types/models/director';
import {RootStackParamList} from '../../../../types/navigation';
import {
  resetNumOfFiltersActive,
  setFilteredDirectors,
  setSearchActive,
} from '../../../DirectorsAngle/slice';
import {searchDirectors} from '../../searchUtils';
import {resetDirectorsFilter} from '../../slice';

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
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const styles = getStyles();

  const handleSuggestionPress = (suggestion: string) => {
    const searchedDirector = searchDirectors(directors, suggestion);
    dispatch(setFilteredDirectors(searchedDirector));

    setSearchSuggestions([]);
    dispatch(setSearchActive(true));

    navigation.goBack();

    dispatch(resetDirectorsFilter());
    dispatch(resetNumOfFiltersActive());
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
