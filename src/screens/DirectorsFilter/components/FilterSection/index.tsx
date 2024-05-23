import React, {useCallback} from 'react';

import {View, Text, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {AppDispatch} from '../../../../store/store';
import {Director} from '../../../../types/models/director';
import {updateNumOfFiltersActive} from '../../../DirectorsAngle/actions';
import {addFilter, removeFilter} from '../../actions';
import {selectActiveFilters} from '../../selectors';

import {getStyles} from './styles';

interface FilterSectionProps {
  title: string;
  items: string[];
  directors: Director[];
}

const FilterSection: React.FC<FilterSectionProps> = ({title, items}) => {
  const styles = getStyles();

  const dispatch: AppDispatch = useDispatch();

  const activeFilters = useSelector(selectActiveFilters);

  const addItemToActiveFilter = (filter: string) => dispatch(addFilter(filter));

  const removeItemFromActiveFilter = (filter: string) =>
    dispatch(removeFilter(filter));

  const setNumOfFiltersActive = (value: number) =>
    dispatch(updateNumOfFiltersActive(value));

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
