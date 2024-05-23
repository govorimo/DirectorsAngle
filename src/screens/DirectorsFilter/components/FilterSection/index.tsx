import React, {useCallback} from 'react';

import {useAtomValue, useSetAtom} from 'jotai';
import {View, Text, Pressable} from 'react-native';

import {updateNumOfFiltersActiveAtom} from '../../../../store/DirectorsAtom';
import {
  activeFiltersAtom,
  addItemToActiveFilterAtom,
  removeItemFromActiveFilterAtom,
} from '../../../../store/DirectorsFilterAtom';
import {Director} from '../../../../types/models/director';

import {getStyles} from './styles';

interface FilterSectionProps {
  title: string;
  items: string[];
  directors: Director[];
}

const FilterSection: React.FC<FilterSectionProps> = ({title, items}) => {
  const styles = getStyles();

  const activeFilters = useAtomValue(activeFiltersAtom);

  const addItemToActiveFilter = useSetAtom(addItemToActiveFilterAtom);
  const removeItemFromActiveFilter = useSetAtom(removeItemFromActiveFilterAtom);
  const setNumOfFiltersActive = useSetAtom(updateNumOfFiltersActiveAtom);

  const handleFilter = useCallback(
    (filterItem: string) => {
      const isItemSelected = activeFilters.includes(filterItem);

      setNumOfFiltersActive(isItemSelected ? -1 : 1);

      if (isItemSelected) {
        removeItemFromActiveFilter(filterItem);
      } else {
        addItemToActiveFilter(filterItem);
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
