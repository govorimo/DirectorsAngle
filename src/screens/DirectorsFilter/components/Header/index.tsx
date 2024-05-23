import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {View, Text, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';

import {DONE, FILTER_AND_SEARCH} from '../../../../constants';
import {AppDispatch} from '../../../../store/store';
import {setSearchActiveAction} from '../../../DirectorsAngle/actions';

import {getStyles} from './styles';

const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigation = useNavigation();
  const styles = getStyles();

  const setSearchActive = (isSearchActive: boolean) =>
    dispatch(setSearchActiveAction(isSearchActive));

  const handleOnPressDone = () => {
    setSearchActive(false);
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
