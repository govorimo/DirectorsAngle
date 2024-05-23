import React, {useRef} from 'react';

import {FlatList, Text, View} from 'react-native';

import {Media} from '../../../../types/models/media';
import CardsList from '../CardsList';
import FeaturedSectionHeader from '../FeaturedSectionHeader';

import {styles} from './styles';

interface FeaturedSectionProps {
  data: Media[][];
  type: 'Interviews' | 'Films';
  numOfItems: number;
  caption: string;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  data,
  type,
  numOfItems,
  caption,
}) => {
  const flatListRef = useRef(null);
  const currentIndex = useRef(0);

  const shouldDisplayArrows = numOfItems > 4;

  const renderCardListItem = ({item}: {item: Media[]}) => (
    <CardsList data={item} type={type} />
  );

  return (
    <>
      <Text style={styles.helperText}>{caption}</Text>
      <View style={styles.listContainer}>
        <FeaturedSectionHeader
          shouldDisplayArrows={shouldDisplayArrows}
          flatListRef={flatListRef}
          currentIndex={currentIndex}
          type={type}
          dataLength={data.length}
        />

        <FlatList
          ref={flatListRef}
          data={data}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderCardListItem}
          contentContainerStyle={styles.mediaList}
        />
      </View>
    </>
  );
};

export default FeaturedSection;
