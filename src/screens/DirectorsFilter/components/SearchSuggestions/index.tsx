import React, {Dispatch, SetStateAction} from 'react';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {View, Text, Pressable, ScrollView} from 'react-native';

import {useDirectorsContext} from '../../../../context/directorsContext';
import {useDirectorsFilterContext} from '../../../../context/directorsFilterContext';
import {Director} from '../../../../types/models/director';
import {RootStackParamList} from '../../../../types/navigation';
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
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const {setFilteredDirectors, setSearchActive, resetNumOfFiltersActive} =
    useDirectorsContext();
  const {resetDirectorsFilter} = useDirectorsFilterContext();

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
