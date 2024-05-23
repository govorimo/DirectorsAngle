import React, {useCallback} from 'react';

import {View, Text, Pressable} from 'react-native';
import {useRecoilValue, useSetRecoilState} from 'recoil';

import {
  activeFiltersState,
  addItemToActiveFilterState,
  removeItemFromActiveFilterState,
} from '../../../../store/DirectorsFilterState';
import {updateNumOfFiltersActiveState} from '../../../../store/DirectorsState';
import {Director} from '../../../../types/models/director';

import {getStyles} from './styles';

interface FilterSectionProps {
  title: string;
  items: string[];
  directors: Director[];
}

const FilterSection: React.FC<FilterSectionProps> = ({title, items}) => {
  const styles = getStyles();

  const activeFilters = useRecoilValue(activeFiltersState);

  const addItemToActiveFilter = useSetRecoilState(addItemToActiveFilterState);
  const removeItemFromActiveFilter = useSetRecoilState(
    removeItemFromActiveFilterState,
  );
  const setNumOfFiltersActive = useSetRecoilState(
    updateNumOfFiltersActiveState,
  );

  const handleFilter = useCallback(
    (filterItem: string) => {
      const isItemSelected = activeFilters.includes(filterItem);

      setNumOfFiltersActive(isItemSelected ? -1 : 1);

      if (isItemSelected) {
        removeItemFromActiveFilter(filterItem); // Use string as newValue in set
      } else {
        addItemToActiveFilter(filterItem); // Use string as newValue in set
      }
    },
    [
      activeFilters,
      addItemToActiveFilter,
      removeItemFromActiveFilter,
      setNumOfFiltersActive,
    ],
  );

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitleText}>{title}</Text>
      <View style={styles.optionsContainer}>
        {items.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => handleFilter(item)}
            style={
              activeFilters.includes(item)
                ? styles.activeOptionField
                : styles.optionField
            }>
            <Text style={styles.optionText}>{item}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default FilterSection;
