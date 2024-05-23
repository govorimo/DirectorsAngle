import React from 'react';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Text, Pressable} from 'react-native';

import {SEE_MORE} from '../../../../constants';
import {Director} from '../../../../types/models/director';
import {RootStackParamList, Routes} from '../../../../types/navigation';

import {getStyles} from './styles';

interface ShortBiographyProps {
  director: Director;
}

const ShortBiography: React.FC<ShortBiographyProps> = ({director}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const styles = getStyles();

  const handleSeeMore = () => {
    navigation.navigate(Routes.BIOGRAPHY, {director: director});
  };

  return (
    <>
      <Text style={styles.detailsBiography}>{director.biography}</Text>
      <Pressable onPress={handleSeeMore}>
        <Text style={styles.expandOptionsText}>{SEE_MORE}</Text>
      </Pressable>
    </>
  );
};

export default ShortBiography;
