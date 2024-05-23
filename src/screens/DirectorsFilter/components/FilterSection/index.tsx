import React, {useCallback} from 'react';

import {View, Text, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Director} from '../../../../types/models/director';
import {setNumOfFiltersActive} from '../../../DirectorsAngle/slice';
import {selectDirectorsFilter} from '../../selectors';
import {addItemToActiveFilter, removeItemFromActiveFilter} from '../../slice';

import {getStyles} from './styles';

interface FilterSectionProps {
  title: string;
  items: string[];
  directors: Director[];
}

const FilterSection: React.FC<FilterSectionProps> = ({title, items}) => {
  const dispatch = useDispatch();
  const styles = getStyles();

  const {activeFilters} = useSelector(selectDirectorsFilter);

  const handleFilter = useCallback(
    (filterItem: string) => {
      const isItemSelected = activeFilters.includes(filterItem);

      dispatch(setNumOfFiltersActive(isItemSelected ? -1 : 1));

      if (isItemSelected) {
        dispatch(removeItemFromActiveFilter(filterItem));
      } else {
        dispatch(addItemToActiveFilter(filterItem));
      }
    },
    [activeFilters],
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
