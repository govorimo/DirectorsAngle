import React, {MutableRefObject} from 'react';

import {View, Text, Pressable, FlatList} from 'react-native';

import ChevronLeft from '../../../../../assets/icons/chevron_left.svg';
import ChevronRight from '../../../../../assets/icons/chevron_right.svg';

import {getStyles} from './styles';

interface FeaturedSectionHeaderProps {
  shouldDisplayArrows: boolean;
  flatListRef: MutableRefObject<FlatList | null>;
  currentIndex: MutableRefObject<number>;
  type: string;
  dataLength: number;
}

const FeaturedSectionHeader: React.FC<FeaturedSectionHeaderProps> = ({
  shouldDisplayArrows,
  flatListRef,
  currentIndex,
  type,
  dataLength,
}) => {
  const styles = getStyles();

  const scrollToNextItem = () => {
    if (flatListRef.current && currentIndex.current < dataLength - 1) {
      currentIndex.current += 1;
      flatListRef.current.scrollToIndex({
        animated: true,
        index: currentIndex.current,
      });
    }
  };

  const scrollToPrevItem = () => {
    if (flatListRef.current && currentIndex.current > 0) {
      currentIndex.current -= 1;
      flatListRef.current.scrollToIndex({
        animated: true,
        index: currentIndex.current,
      });
    }
  };

  return (
    <View style={styles.headerContainer}>
      {shouldDisplayArrows ? (
        <Pressable onPress={scrollToPrevItem}>
          <ChevronLeft />
        </Pressable>
      ) : null}

      <Text style={styles.listTitle}>{type}</Text>

      {shouldDisplayArrows ? (
        <Pressable onPress={scrollToNextItem}>
          <ChevronRight />
        </Pressable>
      ) : null}
    </View>
  );
};

export default FeaturedSectionHeader;
