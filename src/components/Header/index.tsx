import React from 'react';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {View, Text, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Filter from '../../../assets/icons/filter.svg';
import {DIRECTORS_ANGLE} from '../../constants';
import {RootStackParamList, Routes} from '../../types/navigation';

import {getStyles} from './styles';

interface HeaderProps {
  numOfFiltersActive?: number;
  routeName?: string;
}

const Header: React.FC<HeaderProps> = ({numOfFiltersActive, routeName}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  const styles = getStyles(statusBarHeight);

  const handleOnPress = () => {
    navigation.navigate(Routes.FILTER_DIRECTORS);
  };

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{DIRECTORS_ANGLE}</Text>
      {routeName === Routes.DIRECTORS_ANGLE ? (
        <Pressable style={styles.filterPressable} onPress={handleOnPress}>
          <Filter />
          <View style={styles.numOfFitersCircle}>
            <Text style={styles.numOfFitersCircleText}>
              {numOfFiltersActive}
            </Text>
          </View>
        </Pressable>
      ) : null}
    </View>
  );
};

export default Header;
