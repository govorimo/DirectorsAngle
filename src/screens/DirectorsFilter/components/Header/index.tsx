import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {View, Text, Pressable} from 'react-native';

import {DONE, FILTER_AND_SEARCH} from '../../../../constants';
import {useDirectorsStore} from '../../../../store/directorsStore';

import {getStyles} from './styles';

const Header = () => {
  const navigation = useNavigation();
  const styles = getStyles();

  const setSearchActive = useDirectorsStore(state => state.setSearchActive);

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
