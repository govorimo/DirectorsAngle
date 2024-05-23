import React, {useCallback} from 'react';

import {observer} from 'mobx-react-lite';
import {View, Text, Pressable} from 'react-native';

import directorsFilterStore from '../../../../store/DirectorsFilterState';
import directorsStore from '../../../../store/DirectorsState';
import {Director} from '../../../../types/models/director';

import {getStyles} from './styles';

interface FilterSectionProps {
  title: string;
  items: string[];
  directors: Director[];
}

const FilterSection: React.FC<FilterSectionProps> = observer(
  ({title, items}) => {
    const styles = getStyles();

    const activeFilters = directorsFilterStore.activeFilters;

    const addItemToActiveFilter = (filter: string) =>
      directorsFilterStore.addItemToActive(filter);

    const removeItemFromActiveFilter = (filter: string) =>
      directorsFilterStore.removeItemFromActive(filter);

    const setNumOfFiltersActive = (value: number) =>
      directorsStore.updateNumOfFiltersActive(value);

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
  },
);

export default FilterSection;
