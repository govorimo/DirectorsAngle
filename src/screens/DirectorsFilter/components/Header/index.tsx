import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import {View, Text, Pressable} from 'react-native';

import {DONE, FILTER_AND_SEARCH} from '../../../../constants';
import directorsStore from '../../../../store/DirectorsStore';

import {getStyles} from './styles';

const Header = observer(() => {
  const navigation = useNavigation();
  const styles = getStyles();

  const setSearchActive = (isSearchActive: boolean) =>
    directorsStore.setSearchActive(isSearchActive);

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
});

export default Header;
