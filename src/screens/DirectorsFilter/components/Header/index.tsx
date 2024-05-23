import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {View, Text, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';

import {DONE, FILTER_AND_SEARCH} from '../../../../constants';
import {setSearchActive} from '../../../DirectorsAngle/slice';

import {getStyles} from './styles';

const Header = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const styles = getStyles();

  const handleOnPressDone = () => {
    dispatch(setSearchActive(false));
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{FILTER_AND_SEARCH}</Text>
      <Pressable onPress={handleOnPressDone}>
        <Text style={styles.filterDoneText}>{DONE}</Text>
      </Pressable>
    </View>
  );
};

export default Header;
